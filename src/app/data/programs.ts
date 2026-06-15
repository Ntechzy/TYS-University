export type Discipline = {
  discipline: string;
  programs: string[];
};

export const disciplines: Discipline[] = [
  {
    discipline: "Faculty of Management",
    programs: ["BBA", "MBA", "PhD"],
  },
  {
    discipline: "Faculty of Engineering and Technology",
    programs: ["B.Tech (CSE)", "B.Tech Honrs", "MTech", "B.Arch"],
  },
  {
    discipline: "Faculty of Agriculture",
    programs: [
      "B.Sc (Honrs) Agriculture",
      "M.Sc in Agriculture - Agronomy",
      "M.Sc in Agriculture - Horticulture",
      "M.Sc in Agriculture - Genetics and Plant Breeding",
      "M.Sc in Agriculture - Soils Science and Soil Chemistry",
      "M.Sc in Agriculture - Agriculture Extension",
    ],
  },
  {
    discipline: "Faculty of Arts",
    programs: [
      "BA",
      "B.Lisc",
      "M.Lisc",
      "MA (Hindi)",
      "MA (Urdu)",
      "MA (English)",
      "MA (Sanskrit)",
      "MA (Political Science)",
      "MA (Economics)",
      "MA (Education)",
      "MA (Home Science)",
      "MA (Medieval and Modern History)",
      "MA (Sociology)",
      "BJMC",
      "MJMC",
      "MSW",
    ],
  },
  {
    discipline: "Faculty of Science",
    programs: [
      "B.Sc",
      "M.Sc (Botany)",
      "M.Sc (Chemistry)",
      "M.Sc (Mathematics)",
      "M.Sc (Physics)",
      "M.Sc (Zoology)",
      "BCA",
      "MCA",
    ],
  },
  {
    discipline: "Faculty of Commerce",
    programs: ["B.Com", "M.Com"],
  },
  {
    discipline: "Faculty of Nursing",
    programs: ["B.Sc Nursing", "GNM"],
  },
  {
    discipline: "School of Pharmacy",
    programs: ["D.Pharma", "B.Pharma"],
  },
  {
    discipline: "Faculty of Law",
    programs: ["BA LLB", "LLB", "LLM"],
  },
  {
    discipline: "Yoga Course",
    programs: ["PG Diploma in Yoga"],
  },
];
