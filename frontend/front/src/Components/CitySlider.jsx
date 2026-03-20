import React from "react";
import Slider from "react-slick";

const CitySlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,          // smooth
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // medium speed
    arrows: false
  };

  const cities = [
    {
      name: "Kanpur",
      tag: "Industrial City",
      aqi: "200 (Poor)",
      allowed: "200 CC",
      current: "400 CC",
      insight:
        "Industries must cut emissions by 50% or offset 200 CC daily to maintain ecological balance.",
      status: "🔴 Critical"
    },
    {
      name: "Delhi",
      tag: "High Transport + Mixed Pollution",
      aqi: "260 (Very Poor)",
      allowed: "220 CC",
      current: "440 CC",
      insight:
        "Strict emission control and credit compensation required to reduce urban pollution load.",
      status: "🔴 Very Critical"
    },
    {
      name: "Mumbai",
      tag: "Moderate Coastal City",
      aqi: "140 (Moderate)",
      allowed: "180 CC",
      current: "200 CC",
      insight:
        "Minor emission adjustments and sustainable practices can achieve compliance.",
      status: "🟡 Near Safe Limit"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-16">
      <Slider {...settings}>
        {cities.map((city, index) => (
          <div key={index}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md text-center transition duration-300">

              {/* City Title */}
              <h2 className="text-3xl font-semibold mb-2">
                {city.name} <span className="text-gray-400 text-lg">({city.tag})</span>
              </h2>

              {/* AQI */}
              <p className="text-gray-300 mb-4">
                Current AQI: <span className="text-white">{city.aqi}</span>
              </p>

              {/* LINE 1 */}
              <p className="text-lg text-gray-200 mb-2">
                Allowed Emission: <span className="text-green-400">{city.allowed}</span>
              </p>

              {/* LINE 2 */}
              <p className="text-lg text-gray-200 mb-6">
                Current Emission: <span className="text-red-400">{city.current}</span>
              </p>

              {/* Insight */}
              <p className="text-gray-300 italic mb-6">
                "{city.insight}"
              </p>

              {/* Status */}
              <div className="text-lg font-medium">
                Status: {city.status}
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CitySlider;