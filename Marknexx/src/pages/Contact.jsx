import {
  ArrowUpRight,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Instagram
} from "lucide-react";

import {
  useState
} from "react";

import {
  whatsappLink
} from "../data/services";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Codeight,

Name: ${form.name}
Business: ${form.business}
Service: ${form.service}
Budget: ${form.budget}

Requirement:
${form.message}
    `.trim();

    const url =
      `https://wa.me/917048931619?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <section className="page-hero contact-hero">

        <div className="page-hero-bg"></div>

        <div className="container">

          <div className="eyebrow">
            <span></span>
            Contact
          </div>

          <h1>
            Let's build
            <br />
            something
            <span> meaningful.</span>
          </h1>

          <p>
            Tell us about your project and we'll
            get back to you with the next steps.
          </p>

        </div>

      </section>


      <section className="section contact-section">

        <div className="container contact-grid">

          <div className="contact-info">

            <div className="eyebrow">
              <span></span>
              Start a Project
            </div>

            <h2>
              Have an idea?
              <br />
              Let's talk.
            </h2>

            <p>
              Whether you need a website, online
              store, mobile app, social media strategy
              or personal branding — tell us what
              you're looking to achieve.
            </p>

            <div className="contact-methods">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >

                <div className="contact-icon">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>
                    +91 70489 31619
                  </strong>
                </div>

                <ArrowUpRight size={17} />

              </a>

              <a
                href="mailto:codeeight.in@gmail.com"
                className="contact-method"
              >

                <div className="contact-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    hello@codeight.in
                  </strong>
                </div>

                <ArrowUpRight size={17} />

              </a>

              <a
                href="https://www.instagram.com/marknexx_/"
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >

                <div className="contact-icon">
                  <Instagram size={20} />
                </div>

                <div>
                  <span>Instagram</span>
                  <strong>
                    @codeight_
                  </strong>
                </div>

                <ArrowUpRight size={17} />

              </a>

              <div className="contact-method">

                <div className="contact-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>
                    Delhi, India
                  </strong>
                </div>

              </div>

            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Business Name
                </label>

                <input
                  type="text"
                  name="business"
                  placeholder="Your business"
                  value={form.business}
                  onChange={handleChange}
                />

              </div>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label>
                  Service
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a service
                  </option>

                  <option>
                    Website Development
                  </option>

                  <option>
                    E-commerce Development
                  </option>

                  <option>
                    Mobile App Development
                  </option>

                  <option>
                    Social Media Management
                  </option>

                  <option>
                    Personal Branding
                  </option>

                  <option>
                    Real Estate Growth
                  </option>

                </select>

              </div>

              <div className="form-group">

                <label>
                  Approx. Budget
                </label>

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >

                  <option value="">
                    Select budget
                  </option>

                  <option>
                    Under ₹25,000
                  </option>

                  <option>
                    ₹25,000 – ₹50,000
                  </option>

                  <option>
                    ₹50,000 – ₹1,00,000
                  </option>

                  <option>
                    ₹1,00,000+
                  </option>

                </select>

              </div>

            </div>


            <div className="form-group">

              <label>
                Tell us about your project
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="What are you looking to build?"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="btn btn-primary form-submit"
            >
              Send via WhatsApp
              <MessageCircle size={18} />
            </button>

            <p className="form-note">
              Clicking submit will open WhatsApp
              with your project details.
            </p>

          </form>

        </div>

      </section>
    </>
  );
}

export default Contact;