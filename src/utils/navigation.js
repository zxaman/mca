// Hash-based navigation helper.
// Kept outside components so render code never mutates window directly.
export function goTo(hash) {
  window.location.hash = hash;
}
