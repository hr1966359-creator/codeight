import {
  ArrowLeft
} from "lucide-react";

import {
  Link
} from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">

      <div className="not-found-number">
        404
      </div>

      <h1>
        Page not found.
      </h1>

      <p>
        The page you're looking for doesn't
        exist or has been moved.
      </p>

      <Link
        to="/"
        className="btn btn-primary"
      >
        <ArrowLeft size={17} />
        Back Home
      </Link>

    </section>
  );
}

export default NotFound;