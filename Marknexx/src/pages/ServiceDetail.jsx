import {
  ArrowRight,
  Check,
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

import {
  Link,
  useParams
} from "react-router-dom";

import PricingCard from "../Components/PricingCard";
import CTA from "../Components/CTA";

import {
  services,
  whatsappLink
} from "../data/services";

function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <div className="not-found">
        <h1>Service Not Found</h1>

        <Link
          to="/services"
          className="btn btn-primary"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <section
        className={`detail-hero ${service.accent}`}
      >

        <div className="detail-hero-bg"></div>

        <div className="container">

          <Link
            to="/services"
            className="back-link"
          >
            <ArrowRight
              size={16}
              style={{
                transform: "rotate(180deg)"
              }}
            />
            All Services
          </Link>

          <div className="detail-icon">
            <Icon size={32} />
          </div>

          <div className="eyebrow">
            <span></span>
            {service.shortTitle}
          </div>

          <h1>
            {service.title}
          </h1>

          <p>
            {service.description}
          </p>

          <div className="detail-actions">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={18} />
              Discuss Your Project
            </a>

            <Link
              to="/contact"
              className="btn btn-ghost"
            >
              Get a Quote
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      <section className="section detail-pricing">

        <div className="container">

          <div className="detail-section-header">

            <div>

              <div className="eyebrow">
                <span></span>
                Pricing
              </div>

              <h2>
                Choose your plan.
              </h2>

            </div>

            <p>
              Select a starting package and
              customize it according to your
              requirements.
            </p>

          </div>

          <div className="pricing-grid">

            {service.plans.map(
              (plan, index) => (
                <PricingCard
                  key={index}
                  plan={plan}
                  accent={service.accent}
                />
              )
            )}

          </div>

        </div>

      </section>


      <section className="section process-section">

        <div className="container">

          <div className="process-header">

            <div>

              <div className="eyebrow">
                <span></span>
                Our Process
              </div>

              <h2>
                Simple process.
                <br />
                Serious execution.
              </h2>

            </div>

            <p>
              We keep the process clear so you
              always know what happens next.
            </p>

          </div>

          <div className="process-grid">

            <div className="process-item">

              <span>01</span>

              <h3>
                Discovery
              </h3>

              <p>
                We understand your business,
                audience, goals and requirements.
              </p>

            </div>

            <div className="process-item">

              <span>02</span>

              <h3>
                Strategy
              </h3>

              <p>
                We create the structure and
                approach required for the project.
              </p>

            </div>

            <div className="process-item">

              <span>03</span>

              <h3>
                Build
              </h3>

              <p>
                Design, development and content
                are executed according to plan.
              </p>

            </div>

            <div className="process-item">

              <span>04</span>

              <h3>
                Launch
              </h3>

              <p>
                We test, refine and help you
                move the project into production.
              </p>

            </div>

          </div>

        </div>

      </section>


      <CTA />
    </>
  );
}

export default ServiceDetail;