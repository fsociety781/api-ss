# ==========================================
# STAGE 1: Builder
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install build tools if needed
RUN apk add --no-cache openssl libc6-compat

# Install dependencies
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

# Copy source code and build
COPY tsconfig.json ./
COPY app.ts ./
COPY bin ./bin/
COPY bootstrap ./bootstrap/
COPY config ./config/
COPY controller ./controller/
COPY docs ./docs/
COPY middleware ./middleware/
COPY routes ./routes/
COPY services ./services/
COPY types ./types/
COPY utils ./utils/
COPY public ./public/
COPY views ./views/

# Generate Prisma Client & Compile TypeScript
RUN npx prisma generate
RUN npm run build

# Prune dev dependencies for lean image
RUN npm prune --production

# ==========================================
# STAGE 2: Production Runner
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

# Security: Install OpenSSL for Prisma and create non-root user
RUN apk add --no-cache openssl curl && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

ENV NODE_ENV=production
ENV PORT=3000

# Copy necessary production artifacts
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nodejs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nodejs:nodejs /app/public ./public
COPY --from=builder --chown=nodejs:nodejs /app/src ./src

USER nodejs

EXPOSE 3000

# Health check probe
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

CMD ["node", "dist/bin/www.js"]

