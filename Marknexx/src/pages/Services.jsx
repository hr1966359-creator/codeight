import {
  ArrowUpRight
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import SectionHeading from "../Components/SectionHeading";
import ServiceCard from "../Components/ServiceCard";
import PricingCard from "../Components/PricingCard";
import CTA from "../Components/CTA";

import {
  services
} from "../data/services";

function Services() {
  return (
    <>
      <section className="page-hero">

        <div className="page-hero-bg"></div>

        <div className="container">

          <div className="eyebrow">
            <span></span>
            Our Services
          </div>

          <h1>
            Digital solutions
            <br />
            built around your
            <span> business.</span>
          </h1>

          <p>
            Choose the service that fits your
            current stage or combine multiple
            solutions for a complete digital system.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="services-grid services-grid-large">

            {services.map(
              (service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              )
            )}

          </div>

        </div>

      </section>


      <section className="section pricing-overview">

        <div className="container">

          <SectionHeading
            eyebrow="Plans & Pricing"
            title="Choose the right starting point."
            description="Every plan can be customized according to your exact business requirements."
          />

          {services.map(
            (service) => (
              <div
                className="pricing-service"
                key={service.id}
              >

                <div className="pricing-service-header">

                  <div>
                    <span className="eyebrow">
                      <span></span>
                      {service.shortTitle}
                    </span>

                    <h3>
                      {service.title}
                    </h3>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="text-link"
                  >
                    View details
                    <ArrowUpRight size={17} />
                  </Link>

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
            )
          )}

          <p className="pricing-note">
            Final pricing depends on project
            requirements. Ad spend, hosting,
            domain, app-store and third-party
            charges are separate where applicable.
          </p>

        </div>

      </section>


      <CTA />
    </>
  );
}

export default Services;