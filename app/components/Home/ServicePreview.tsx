import { ServicesData } from "@/data/services";
import React from "react";

const ServicePreview = () => {
  return (
    <div className="py-16 px-4">
      <h1 className="text-center mb-4 text-4xl text-black-700 font-semibold tracking-tight leading-none">
        Some of our Services
      </h1>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-12 ">
        {ServicesData.map((service) => (
          <div
            className="p-4 border-2 border-yellow-400 bg-yellow-50 rounded-lg"
            key={service.id}
          >
            <h1 className="text-2xl py-3">{service.title} </h1>
            <ul className="px-2">
              {service.offers.map((offer, index) => (
                <li key={index} className="list-disc">
                  {offer}{" "}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicePreview;
