import type { Source } from "@/lib/tools/types";

/** Every external dataset the tools draw on. Referenced by id from factors. */
export const SOURCES: Record<string, Source> = {
  ember: {
    id: "ember",
    name: "Yearly Electricity Data — emissions intensity of total generation",
    publisher: "Ember",
    url: "https://ember-energy.org/data/yearly-electricity-data/",
    year: "2025 release",
  },
  desnz: {
    id: "desnz",
    name: "Greenhouse gas reporting: conversion factors 2025",
    publisher: "UK Department for Energy Security and Net Zero (DESNZ)",
    url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2025",
    year: "2025",
  },
  cbamReg: {
    id: "cbamReg",
    name: "Regulation (EU) 2023/956 establishing a carbon border adjustment mechanism — Annex I",
    publisher: "European Union",
    url: "https://eur-lex.europa.eu/eli/reg/2023/956/oj",
    year: "2023 (as amended 2025)",
  },
  etsDirective: {
    id: "etsDirective",
    name: "Directive 2003/87/EC Art. 10a(1a) as amended by Directive (EU) 2023/959 — free allocation phase-out for CBAM sectors",
    publisher: "European Union",
    url: "https://eur-lex.europa.eu/eli/dir/2023/959/oj",
    year: "2023",
  },
  etsBenchmarks: {
    id: "etsBenchmarks",
    name: "Commission Implementing Regulation (EU) 2021/447 — EU ETS product benchmarks 2021–2025",
    publisher: "European Commission",
    url: "https://eur-lex.europa.eu/eli/reg_impl/2021/447/oj",
    year: "2021",
  },
  uptime: {
    id: "uptime",
    name: "Global Data Center Survey — average annual PUE",
    publisher: "Uptime Institute",
    url: "https://uptimeinstitute.com/resources/research-and-reports",
    year: "2024",
  },
  globalSolarAtlas: {
    id: "globalSolarAtlas",
    name: "Global Solar Atlas — specific PV yield (PVOUT) for your site",
    publisher: "World Bank Group / Solargis",
    url: "https://globalsolaratlas.info/",
    year: "current",
  },
  userInput: {
    id: "userInput",
    name: "Value you entered",
    publisher: "You",
    url: "",
    year: "—",
  },
  klisusAssumption: {
    id: "klisusAssumption",
    name: "Illustrative assumption set by KliSus — editable, not a forecast",
    publisher: "KliSus",
    url: "",
    year: "2026",
  },
};
