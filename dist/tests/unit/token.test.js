"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const strict_1 = __importDefault(require("node:assert/strict"));
const token_1 = require("../../utils/token");
(0, node_test_1.describe)('🔑 JWT Token Utility Tests', () => {
    const dummyPayload = {
        userId: 'usr-123-abc',
        role: 'FARMER',
        email: 'petani@shroomsync.id',
    };
    (0, node_test_1.it)('harus berhasil generate token JWT valid dari payload', () => {
        const token = (0, token_1.signToken)(dummyPayload);
        strict_1.default.ok(typeof token === 'string', 'Token harus berupa string');
        strict_1.default.ok(token.split('.').length === 3, 'JWT harus memiliki 3 segmen (header.payload.signature)');
    });
    (0, node_test_1.it)('harus berhasil memverifikasi dan mendekode token JWT yang valid', () => {
        const token = (0, token_1.signToken)(dummyPayload);
        const decoded = (0, token_1.verifyToken)(token);
        strict_1.default.strictEqual(decoded.userId, dummyPayload.userId);
        strict_1.default.strictEqual(decoded.role, dummyPayload.role);
        strict_1.default.strictEqual(decoded.email, dummyPayload.email);
    });
    (0, node_test_1.it)('harus menolak token yang dipalsukan/tampered', () => {
        const token = (0, token_1.signToken)(dummyPayload);
        const tampered = token.slice(0, -5) + 'xxxxx';
        strict_1.default.throws(() => {
            (0, token_1.verifyToken)(tampered);
        }, /invalid signature|jwt malformed/);
    });
});
//# sourceMappingURL=token.test.js.map