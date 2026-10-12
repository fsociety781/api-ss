import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { signToken, verifyToken } from '../../utils/token';
import { TokenPayload } from '../../types/auth';
import { UserRole, UserStatus } from '../../src/generated/prisma/client';

describe('🔑 JWT Token Utility Tests', () => {
  const dummyPayload: TokenPayload = {
    userId: 'usr-123-abc',
    phoneNumber: '08123456789',
    email: 'petani@shroomsync.id',
    role: UserRole.FARMER,
    status: UserStatus.ACTIVE,
  };

  it('harus berhasil generate token JWT valid dari payload', () => {
    const token = signToken(dummyPayload);
    assert.ok(typeof token === 'string', 'Token harus berupa string');
    assert.ok(
      token.split('.').length === 3,
      'JWT harus memiliki 3 segmen (header.payload.signature)',
    );
  });

  it('harus berhasil memverifikasi dan mendekode token JWT yang valid', () => {
    const token = signToken(dummyPayload);
    const decoded = verifyToken(token);

    assert.strictEqual(decoded.userId, dummyPayload.userId);
    assert.strictEqual(decoded.phoneNumber, dummyPayload.phoneNumber);
    assert.strictEqual(decoded.role, dummyPayload.role);
    assert.strictEqual(decoded.status, dummyPayload.status);
    assert.strictEqual(decoded.email, dummyPayload.email);
  });

  it('harus menolak token yang dipalsukan/tampered', () => {
    const token = signToken(dummyPayload);
    const tampered = token.slice(0, -5) + 'xxxxx';

    assert.throws(
      () => {
        verifyToken(tampered);
      },
      /invalid signature|jwt malformed/,
    );
  });
});
