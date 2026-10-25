import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Sparkles,
  CheckCircle2
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import SectionHeading from "../Components/SectionHeading";
import ServiceCard from "../Components/ServiceCard";
import CTA from "../Components/CTA";

import {
  services,
  whatsappLink,
  testimonials
} from "../data/services";

function Home() {
  return (
    <>
      {/* HERO */}

      <section className="hero">

        <div className="hero-grid"></div>

        <div className="hero-orb orb-one"></div>
        <div className="hero-orb orb-two"></div>

        <div className="container hero-container">

          <div className="hero-content">

            <div className="hero-badge">
              <Sparkles size={14} />
              Digital Growth Partner
            </div>

            <h1>
              We build digital
              <br />

              <span>
                experiences
              </span>

              <br />

              that move brands.
            </h1>

            <p className="hero-description">
              Websites, e-commerce, apps, social media
              and personal branding — everything your
              business needs to grow online.
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/services"
                className="btn btn-ghost"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="hero-trust">

              <div className="trust-item">
                <CheckCircle2 size={17} />
                <span>Business focused</span>
              </div>

              <div className="trust-item">
                <CheckCircle2 size={17} />
                <span>Custom solutions</span>
              </div>

              <div className="trust-item">
                <CheckCircle2 size={17} />
                <span>Growth driven</span>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <div className="hero-card main-dashboard">

              <div className="dashboard-top">

                <div>
                  <span className="small-label">
                    CODEIGHT
                  </span>

                  <h3>
                    Digital Growth
                  </h3>
                </div>

                <div className="live-dot">
                  <span></span>
                  Live
                </div>

              </div>

              <div className="chart-area">

                <div className="chart-bars">

                  <span style={{ height: "38%" }}></span>
                  <span style={{ height: "54%" }}></span>
                  <span style={{ height: "43%" }}></span>
                  <span style={{ height: "68%" }}></span>
                  <span style={{ height: "61%" }}></span>
                  <span style={{ height: "82%" }}></span>
                  <span style={{ height: "94%" }}></span>

                </div>

                <div className="chart-line">
                  <span></span>
                </div>

              </div>

              <div className="dashboard-stats">

                <div>
                  <span>Reach</span>
                  <strong>+184%</strong>
                </div>

                <div>
                  <span>Leads</span>
                  <strong>+72%</strong>
                </div>

                <div>
                  <span>Growth</span>
                  <strong>+96%</strong>
                </div>

              </div>

            </div>

            <div className="floating-card card-one">
              <span>Websites</span>
              <strong>01</strong>
            </div>

            <div className="floating-card card-two">
              <span>Social</span>
              <strong>02</strong>
            </div>

            <div className="floating-card card-three">
              <span>Apps</span>
              <strong>03</strong>
            </div>

          </div>

        </div>

      </section>


      {/* MARQUEE */}

      <section className="marquee-section">

        <div className="marquee">

          {[...Array(2)].map((_, group) => (
            <div
              className="marquee-content"
              key={group}
            >

              <span>WEB DEVELOPMENT</span>
              <b>✦</b>

              <span>E-COMMERCE</span>
              <b>✦</b>

              <span>MOBILE APPS</span>
              <b>✦</b>

              <span>SOCIAL MEDIA</span>
              <b>✦</b>

              <span>PERSONAL BRANDING</span>
              <b>✦</b>

              <span>REAL ESTATE</span>
              <b>✦</b>

            </div>
          ))}

        </div>

      </section>


      {/* SERVICES */}

      <section className="section services-preview">

        <div className="container">

          <SectionHeading
            eyebrow="What We Do"
            title="Everything you need to grow online."
            description="From your first website to a complete digital growth system, Codeight brings strategy, design and technology together."
          />

          <div className="services-grid">

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

          <div className="center-action">

            <Link
              to="/services"
              className="text-link"
            >
              View all services
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* ABOUT STRIP */}

      <section className="section about-strip">

        <div className="container about-grid">

          <div className="about-big-number">
            01
          </div>

          <div className="about-strip-content">

            <div className="eyebrow">
              <span></span>
              Why Codeight
            </div>

            <h2>
              Not just another
              <span> service provider.</span>
            </h2>

            <p>
              We look at your business first, then
              build the digital solution around it.
              Every website, campaign and brand
              strategy is created with a clear purpose:
              better visibility, better communication
              and better opportunities.
            </p>

            <Link
              to="/about"
              className="text-link"
            >
              Discover Codeight
              <ArrowUpRight size={17} />
            </Link>

          </div>

          <div className="about-points">

            <div className="about-point">
              <span>01</span>
              <div>
                <strong>Strategy First</strong>
                <p>
                  We understand your goals before
                  creating the solution.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>02</span>
              <div>
                <strong>Built for Growth</strong>
                <p>
                  Digital systems designed to support
                  your next stage.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span>03</span>
              <div>
                <strong>One Digital Partner</strong>
                <p>
                  Design, technology and marketing
                  under one roof.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* TESTIMONIALS */}

      <section className="section testimonials-section">

        <div className="container">

          <SectionHeading
            eyebrow="Client Perspective"
            title="Built around real business goals."
            description="Our approach focuses on creating digital systems that make sense for the business behind them."
          />

          <div className="testimonial-grid">

            {testimonials.map(
              (testimonial, index) => (
                <div
                  className="testimonial-card"
                  key={index}
                >

                  <div className="quote-mark">
                    “
                  </div>

                  <p>
                    {testimonial.text}
                  </p>

                  <div className="testimonial-person">

                    <div className="avatar">
                      {testimonial.name
                        .charAt(0)}
                    </div>

                    <div>
                      <strong>
                        {testimonial.name}
                      </strong>

                      <span>
                        {testimonial.role}
                      </span>
                    </div>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </section>


      <CTA />
    </>
  );
}

export default Home;