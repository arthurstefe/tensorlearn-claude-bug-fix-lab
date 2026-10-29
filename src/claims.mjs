// Contract: docs/contract.md. Pure function; do not mutate claims.

// A valid ID is a string that is nonempty once trimmed. Anything else is malformed.
function normalizeId(value) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed === '' ? null : trimmed;
}

export function getClaim(claims, viewerId, claimId) {
  if (!Array.isArray(claims)) return null;
  const viewer = normalizeId(viewerId);
  const target = normalizeId(claimId);
  if (viewer === null || target === null) return null;

  for (const claim of claims) {
    if (claim === null || typeof claim !== 'object') continue;
    if (normalizeId(claim.id) === target && normalizeId(claim.ownerId) === viewer) {
      return claim;
    }
  }
  return null;
}
