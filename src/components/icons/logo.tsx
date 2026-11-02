import { LOGO_STYLES } from "./logo.css";

export function Logo() {
  return (
    <span className={LOGO_STYLES.CONTAINER}>
      <span className={LOGO_STYLES.BRACKETS}>[</span>
      <span className={LOGO_STYLES.INITIALS}>mikareich</span>
      <span className={LOGO_STYLES.BRACKETS}>]</span>
    </span>
  );
}
