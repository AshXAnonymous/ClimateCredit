import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid
} from "recharts";

const IndustryAnalytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/industries.csv")
      .then((res) => {
        if (!res.ok) {
          throw new Error("CSV file not found");
        }
        return res.text();
      })
      .then((csvText) => {
        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

       const formatted = result.data.map((item) => {
  // 🔥 CLEAN ALL KEYS (IMPORTANT)
  const cleanItem = {};
  Object.keys(item).forEach((key) => {
    cleanItem[key.trim()] = item[key];
  });

  console.log("CLEANED:", cleanItem); // debug

  const emission = parseFloat(cleanItem.Emission_kg_per_day);
  const credits = parseFloat(cleanItem.Climate_Credits_Required);
  const reduction = parseFloat(cleanItem.Reduction_Target_kg);

  return {
    name: cleanItem.Industry_Name || "Unknown",

    emission: isNaN(emission) ? 0 : emission,
    credits: isNaN(credits) ? 0 : credits,

    efficiency:
      emission > 0 && !isNaN(reduction)
        ? Math.round((reduction / emission) * 100)
        : 0,
  };
});

        setData(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading data...
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        No Data Found (Check CSV file)
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-lime-950 to-emerald-900 text-white px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Industry Analytics Dashboard
        </h1>
        <p className="text-gray-300">
          Real-time visualization of industrial emissions and climate credits
        </p>
      </div>

      {/* BAR CHART */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-16">
        <h2 className="text-2xl mb-6 text-center">
          Emission vs Credits
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="emission" fill="#84cc16" />
            <Bar dataKey="credits" fill="#4d7c0f" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* LINE CHART */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-16">
        <h2 className="text-2xl mb-6 text-center">
          Efficiency Trend
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="efficiency"
              stroke="#a3e635"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* INDUSTRY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.05] transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">
              {item.name}
            </h3>

            <p className="text-gray-300">
              Emission: <span className="text-red-400">{item.emission}</span>
            </p>

            <p className="text-gray-300">
              Credits: <span className="text-green-400">{item.credits}</span>
            </p>

            <p className="text-gray-300">
              Efficiency: <span className="text-lime-400">{item.efficiency}%</span>
            </p>

            <div className="mt-4 w-full bg-white/10 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-lime-500"
                style={{ width: `${item.efficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default IndustryAnalytics;