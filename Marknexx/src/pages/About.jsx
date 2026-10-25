import {
  ArrowUpRight,
  Target,
  Layers3,
  Zap,
  Users
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import CTA from "../Components/CTA";

function About() {
  return (
    <>
      <section className="page-hero about-page-hero">

        <div className="page-hero-bg"></div>

        <div className="container">

          <div className="eyebrow">
            <span></span>
            About Codeight
          </div>

          <h1>
            We turn business
            <br />
            ideas into
            <span> digital reality.</span>
          </h1>

          <p>
            Codeight is a digital solutions agency
            focused on helping businesses build a
            strong and useful online presence.
          </p>

        </div>

      </section>


      <section className="section about-story">

        <div className="container about-story-grid">

          <div className="story-label">

            <span>
              OUR APPROACH
            </span>

            <div className="story-line"></div>

          </div>

          <div className="story-content">

            <h2>
              Digital shouldn't just
              <span> look good.</span>
              <br />
              It should work for your business.
            </h2>

            <p>
              Your website is often the first
              interaction someone has with your
              business. Your social media is how
              people discover you. Your content is
              what builds trust.
            </p>

            <p>
              That's why Codeight combines design,
              development, marketing and strategy
              into practical digital solutions.
            </p>

            <Link
              to="/contact"
              className="text-link"
            >
              Start a conversation
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      <section className="section values-section">

        <div className="container">

          <div className="values-header">

            <div>
              <div className="eyebrow">
                <span></span>
                Our Principles
              </div>

              <h2>
                What drives
                <span> our work.</span>
              </h2>
            </div>

          </div>

          <div className="values-grid">

            <div className="value-card">

              <Target size={27} />

              <span>01</span>

              <h3>
                Purpose
              </h3>

              <p>
                Every digital project should have
                a clear business purpose behind it.
              </p>

            </div>

            <div className="value-card">

              <Layers3 size={27} />

              <span>02</span>

              <h3>
                Simplicity
              </h3>

              <p>
                We remove unnecessary complexity
                and focus on what actually matters.
              </p>

            </div>

            <div className="value-card">

              <Zap size={27} />

              <span>03</span>

              <h3>
                Execution
              </h3>

              <p>
                Good ideas only matter when they
                are executed properly.
              </p>

            </div>

            <div className="value-card">

              <Users size={27} />

              <span>04</span>

              <h3>
                Partnership
              </h3>

              <p>
                We work alongside businesses instead
                of treating projects like transactions.
              </p>

            </div>

          </div>

        </div>

      </section>


      <CTA />
    </>
  );
}

export default About;