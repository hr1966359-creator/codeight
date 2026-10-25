import {
  Check,
  ArrowRight
} from "lucide-react";

import {
  Link
} from "react-router-dom";

function PricingCard({
  plan,
  accent = "violet"
}) {
  return (
    <div
      className={`pricing-card ${accent} ${
        plan.popular ? "popular" : ""
      }`}
    >

      {plan.popular && (
        <div className="popular-badge">
          Most Popular
        </div>
      )}

      <div className="pricing-top">

        <span className="plan-name">
          {plan.name}
        </span>

        <div className="plan-price">
          {plan.price}
        </div>

        {plan.duration && (
          <span className="plan-duration">
            Delivery: {plan.duration}
          </span>
        )}

      </div>

      <div className="pricing-divider"></div>

      <ul className="feature-list">

        {plan.features.map(
          (feature, index) => (
            <li key={index}>
              <Check size={16} />
              <span>{feature}</span>
            </li>
          )
        )}

      </ul>

      <Link
        to="/contact"
        className="pricing-btn"
      >
        Get Started
        <ArrowRight size={17} />
      </Link>

    </div>
  );
}

export default PricingCard;