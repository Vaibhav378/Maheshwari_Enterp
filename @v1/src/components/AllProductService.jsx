import React, { useState } from "react";
import ProductService from "./ProductService";
import prodData from "../products_services.json";
import "../styles/AllProductService.css";

const AllProductService = () => {
  const [active, setActive] = useState(true);

  function handleOnClick(e) {
    const buttonClassName = e.target.className;

    if (buttonClassName.includes("products-btn")) {
      setActive(true);
    } else if (buttonClassName.includes("services-btn")) {
      setActive(false);
    }
  }

  return (
    <div className="prod-serv-container">
      <div className="prod-serv-btn-container">
        <button
          className={`prod-serv-btn products-btn ${
            active ? "prod-active" : ""
          }`}
          onClick={handleOnClick}
        >
          Products
        </button>
        <button
          className={`prod-serv-btn services-btn ${
            !active ? "prod-active" : ""
          }`}
          onClick={handleOnClick}
        >
          Services
        </button>
      </div>

      {active ? (
        <div className="prod-container">
          <h2 className="prod-serv-head">
            Our Products
            <div className="prod-border"></div>
          </h2>
          <div className="prod-data">
            {prodData.products.map((product) => (
              <ProductService key={product.id} data={product} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="serv-container">
            <h2 className="prod-serv-head">
              Our Services<div className="prod-border"></div>
            </h2>
            <div className="serv-data">
              {prodData.services.map((service) => (
                <ProductService key={service.id} data={service} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllProductService;
