import { useEffect, useState } from "react";
import { navLinks, site } from "../data/siteContent";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`} aria-label="Primary">
      <a className="nav__brand" href="#top" onClick={close}>
        {site.brand}
      </a>

      <ul className="nav__links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "CLOSE" : "MENU"}
      </button>

      <div
        id="mobile-menu"
        className={`nav__mobile ${open ? "is-open" : ""}`}
        hidden={!open}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
