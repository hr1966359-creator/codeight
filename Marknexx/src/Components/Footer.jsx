import React from "react";
import {
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const WHATSAPP_NUMBER = "917048931619";

const Footer = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="footer">
      <div className="container">

        {/* Top Footer */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              Code<span>ight</span>
            </a>

            <p>
              We build digital experiences that help businesses
              build, grow and scale online.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Services</h4>

            <a href="/services/website-development">
              Website Development
            </a>

            <a href="/services/ecommerce-development">
              E-Commerce
            </a>

            <a href="/services/mobile-app-development">
              Mobile Apps
            </a>

            <a href="/services/social-media-management">
              Social Media
            </a>

            <a href="/services/personal-branding">
              Personal Branding
            </a>

            <a href="/services/real-estate-growth">
              Real Estate
            </a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>

            <a href="/">Home</a>

            <a href="/services">Services</a>

            <a href="/about">About Us</a>

            <a href="/contact">Contact</a>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h4>Let's Talk</h4>

            <a href="tel:+917048931619">
              <Phone size={16} />
              +91 70489 31619
            </a>

            <a href="mailto:codeeight.in@gmail.com">
              <Mail size={16} />
              hello@codeight.in
            </a>

            <div className="footer-location">
              <MapPin size={16} />
              <span>Delhi, India</span>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Codeight. All rights reserved.
          </p>

          <div className="footer-socials">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/marknexx_/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

          </div>

          <a href="#top" className="back-top">
            Back to top
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;  