import React from "react"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

function ServiceItem({ image, title, icon, description }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={image} alt="" />
        </div>
        <div className="col-sm-7">
          <h4><i className="service-icon">
            <FontAwesomeIcon
              icon={icons[icon]}
            />
          </i>{title}</h4>
          <p className="m-0">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem;
