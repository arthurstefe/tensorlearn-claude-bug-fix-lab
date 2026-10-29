import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';

const claimB = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };

test('viewer user-4 does not receive claim-B owned by user-42', () => {
  // Incident: "user-4" is a textual prefix of "user-42".
  assert.equal(getClaim([claimB], 'user-4', 'claim-B'), null);
});

test('the real owner user-42 still receives claim-B', () => {
  assert.equal(getClaim([claimB], 'user-42', 'claim-B'), claimB);
});
