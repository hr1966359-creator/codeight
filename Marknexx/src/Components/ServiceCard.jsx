import {
  ArrowUpRight
} from "lucide-react";

import {
  Link
} from "react-router-dom";

function ServiceCard({
  service,
  index
}) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`service-card ${service.accent}`}
      style={{
        "--delay": `${index * 80}ms`
      }}
    >

      <div className="service-card-top">

        <div className="service-icon">
          <Icon size={25} />
        </div>

        <div className="service-number">
          0{index + 1}
        </div>

      </div>

      <div className="service-card-content">

        <h3>
          {service.title}
        </h3>

        <p>
          {service.description}
        </p>

      </div>

      <div className="service-card-bottom">

        <span>
          Explore service
        </span>

        <ArrowUpRight size={19} />

      </div>

    </Link>
  );
}

export default ServiceCard;