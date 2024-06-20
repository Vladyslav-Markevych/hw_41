import "./footer.css";
import { Company } from "../Company";
import { Reviews } from "../Reviews";

export function Footer() {
  return (
    <footer className='footer-block'>
      <p className='footer-text'>
        Trusted by over 16,000 companies and millions of earners around the
        world
      </p>
      <Company />
      <Reviews />
    </footer>
  );
}
