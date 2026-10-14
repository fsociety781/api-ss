import { z } from 'zod';

/**
 * Production-grade password schema with complexity requirements.
 * Requires: min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char.
 */
export const passwordSchema = z
  .string()
  .min(8, 'Password minimal 8 karakter')
  .regex(/[A-Z]/, 'Password harus mengandung minimal 1 huruf kapital')
  .regex(/[a-z]/, 'Password harus mengandung minimal 1 huruf kecil')
  .regex(/[0-9]/, 'Password harus mengandung minimal 1 angka')
  .regex(
    /[^A-Za-z0-9]/,
    'Password harus mengandung minimal 1 karakter khusus (!@#$%^&*)',
  );

/**
 * Relaxed password schema for login (don't enforce complexity on login attempt).
 */
export const loginPasswordSchema = z
  .string()
  .min(1, 'Password wajib diisi');
