import React from "react";
import ACB from "../../assets/ACB.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={ACB} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
