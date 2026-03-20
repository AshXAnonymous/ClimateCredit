const data = [
  {
    id: 1,
    name: "GreenTech Manufacturing",
    category: "Technology",
    location: "San Francisco, CA",
    score: "A+",
    lastUpdated: "June 15, 2023",
    description:
      "GreenTech Manufacturing is a leading technology company specializing in sustainable electronics production. They have implemented innovative waste reduction systems and have transitioned to 100% renewable energy sources in all their facilities.",
    emissions: [
      { period: "Q1 2023", amount: "120 tons", change: "-15%" },
      { period: "Q4 2022", amount: "141 tons", change: "-8%" },
      { period: "Q3 2022", amount: "153 tons", change: "-5%" },
      { period: "Q2 2022", amount: "161 tons", change: "-3%" },
    ],
    certificates: [
      {
        name: "ISO 14001 Environmental Management",
        issuer: "International Organization for Standardization",
        validUntil: "2025-06-30",
        status: "Active",
      },
      {
        name: "Carbon Neutral Certification",
        issuer: "Carbon Trust",
        validUntil: "2024-12-31",
        status: "Active",
      },
      {
        name: "Green Energy Partner",
        issuer: "EPA",
        validUntil: "2023-12-31",
        status: "Active",
      },
    ],
  },
  {
    id: 2,
    name: "EcoTextiles Inc.",
    category: "Textile",
    location: "Portland, OR",
    score: "A",
    lastUpdated: "June 10, 2023",
    description:
      "EcoTextiles Inc. produces sustainable clothing materials using organic fibers and eco-friendly dyes. They have implemented water recycling systems and reduced their carbon footprint by 40% over the past five years.",
    emissions: [
      { period: "Q1 2023", amount: "210 tons", change: "-12%" },
      { period: "Q4 2022", amount: "239 tons", change: "-7%" },
      { period: "Q3 2022", amount: "257 tons", change: "-4%" },
      { period: "Q2 2022", amount: "268 tons", change: "-2%" },
    ],
    certificates: [
      {
        name: "Global Organic Textile Standard",
        issuer: "GOTS International",
        validUntil: "2024-09-30",
        status: "Active",
      },
      {
        name: "Fair Trade Certification",
        issuer: "Fair Trade USA",
        validUntil: "2024-06-30",
        status: "Active",
      },
      {
        name: "OEKO-TEX Standard 100",
        issuer: "OEKO-TEX Association",
        validUntil: "2023-12-31",
        status: "Active",
      },
    ],
  },
  {
    id: 3,
    name: "SunPower Energy",
    category: "Energy",
    location: "Phoenix, AZ",
    score: "A+",
    lastUpdated: "June 12, 2023",
    description:
      "SunPower Energy is a solar power company that provides clean energy solutions to residential and commercial clients. They have significantly reduced carbon emissions through advanced solar panel technology and large-scale grid solar farms.",
    emissions: [
      { period: "Q1 2023", amount: "98 tons", change: "-18%" },
      { period: "Q4 2022", amount: "119 tons", change: "-10%" },
      { period: "Q3 2022", amount: "132 tons", change: "-6%" },
      { period: "Q2 2022", amount: "140 tons", change: "-4%" },
    ],
    certificates: [
      {
        name: "Renewable Energy Certificate",
        issuer: "US Energy Department",
        validUntil: "2025-01-31",
        status: "Active",
      },
      {
        name: "Solar Power Excellence Award",
        issuer: "National Solar Association",
        validUntil: "2024-08-31",
        status: "Active",
      },
      {
        name: "Green Business Certification",
        issuer: "Green Council",
        validUntil: "2023-11-30",
        status: "Active",
      },
    ],
  },
];
export default data;