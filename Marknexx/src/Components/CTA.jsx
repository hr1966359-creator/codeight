import {
  ArrowUpRight,
  MessageCircle
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import {
  whatsappLink
} from "../data/services";

function CTA() {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-box">

          <div className="cta-glow"></div>

          <div className="cta-content">

            <div className="eyebrow">
              <span></span>
              Let's Build Something
            </div>

            <h2>
              Your next big move
              <br />
              starts here.
            </h2>

            <p>
              Tell us what you want to build.
              We'll help you turn the idea into
              a digital experience.
            </p>

            <div className="cta-actions">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={18} />
                Talk on WhatsApp
              </a>

              <Link
                to="/services"
                className="btn btn-secondary"
              >
                Explore Services
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;