export function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return (
    <svg className={`icon icon--${direction}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M14 7l5 5-5 5" />
    </svg>
  );
}

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menu-icon${open ? " is-open" : ""}`} aria-hidden="true">
      <i />
      <i />
    </span>
  );
}
