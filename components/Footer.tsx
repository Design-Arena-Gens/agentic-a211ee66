import Link from "next/link";

const quickLinks = [
  { href: "#destinations", label: "Destinations" },
  { href: "#seasonal", label: "Seasonal Calendar" },
  { href: "#itineraries", label: "Itineraries" },
  { href: "#tips", label: "Tips" }
];

const contactDetails = [
  "hello@atlasjourneys.co",
  "+1 (646) 555-0196",
  "Remote-first travel atelier"
];

const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.youtube.com", label: "YouTube" },
  { href: "https://www.pinterest.com", label: "Pinterest" }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-column">
          <h3>Atlas Journeys</h3>
          <p>
            Crafted by curious explorers for travelers who crave immersive moments,
            insider access, and purposeful adventure.
          </p>
          <div className="footer-badge">Tailored travel intelligence since 2014</div>
        </div>

        <div className="footer-column">
          <h4>Quick links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <ul>
            {contactDetails.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow our journeys</h4>
          <ul>
            {socialLinks.map((social) => (
              <li key={social.href}>
                <Link href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Atlas Journeys. All rights reserved.</span>
        <Link href="/destinations/kyoto">Explore our Kyoto guide →</Link>
      </div>
    </footer>
  );
}
