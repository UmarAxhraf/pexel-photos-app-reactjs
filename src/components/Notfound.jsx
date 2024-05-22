import React from "react";
import { Link } from "react-router-dom/dist";

const Notfound = () => {
  return (
    <>
      <section className="page404">
        <div className="page404_bg">
          <h1>404-Not Found</h1>
        </div>

        <div className="contantbox_404">
          <h3 className="h2">Look like you're lost</h3>

          <p>The page you are looking for not avaible!</p>

          <Link to="/home" className="link404">
            Go to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Notfound;
