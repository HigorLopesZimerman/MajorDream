import { HistoricalTeam } from '../types';

export const CS_DATABASE: HistoricalTeam[] = [
  // 1. Luminosity Gaming (2016)
  {
    id: "lg-2016",
    name: "Luminosity Gaming",
    shortName: "LG",
    year: 2016,
    logoText: "LG",
    accentColor: "#00A3E0",
    roster: [
      { id: "fallen-2016", nickname: "FalleN", country: "BR", role: "igl", ovr: 93, teamId: "lg-2016", teamName: "Luminosity Gaming" },
      { id: "coldzera-2016", nickname: "coldzera", country: "BR", role: "lurker", ovr: 98, teamId: "lg-2016", teamName: "Luminosity Gaming" },
      { id: "fer-2016", nickname: "fer", country: "BR", role: "entry", ovr: 92, teamId: "lg-2016", teamName: "Luminosity Gaming" },
      { id: "fnx-2016", nickname: "fnx", country: "BR", role: "support", ovr: 88, teamId: "lg-2016", teamName: "Luminosity Gaming" },
      { id: "taco-2016", nickname: "TACO", country: "BR", role: "entry", ovr: 84, teamId: "lg-2016", teamName: "Luminosity Gaming" }
    ]
  },
  // 2. SK Gaming (2017)
  {
    id: "sk-2017",
    name: "SK Gaming",
    shortName: "SK",
    year: 2017,
    logoText: "SK",
    accentColor: "#002B49",
    roster: [
      { id: "fallen-2017", nickname: "FalleN", country: "BR", role: "igl", ovr: 94, teamId: "sk-2017", teamName: "SK Gaming" },
      { id: "coldzera-2017", nickname: "coldzera", country: "BR", role: "rifler", ovr: 97, teamId: "sk-2017", teamName: "SK Gaming" },
      { id: "fer-2017", nickname: "fer", country: "BR", role: "entry", ovr: 95, teamId: "sk-2017", teamName: "SK Gaming" },
      { id: "taco-2017", nickname: "TACO", country: "BR", role: "support", ovr: 83, teamId: "sk-2017", teamName: "SK Gaming" },
      { id: "felps-2017", nickname: "felps", country: "BR", role: "lurker", ovr: 87, teamId: "sk-2017", teamName: "SK Gaming" }
    ]
  },
  // 3. Astralis (2018)
  {
    id: "astralis-2018",
    name: "Astralis",
    shortName: "AST",
    year: 2018,
    logoText: "AST",
    accentColor: "#EF4444",
    roster: [
      { id: "gla1ve-2018", nickname: "gla1ve", country: "DK", role: "igl", ovr: 92, teamId: "astralis-2018", teamName: "Astralis" },
      { id: "dev1ce-2018", nickname: "dev1ce", country: "DK", role: "awp", ovr: 97, teamId: "astralis-2018", teamName: "Astralis" },
      { id: "dupreeh-2018", nickname: "dupreeh", country: "DK", role: "entry", ovr: 93, teamId: "astralis-2018", teamName: "Astralis" },
      { id: "magisk-2018", nickname: "Magisk", country: "DK", role: "rifler", ovr: 94, teamId: "astralis-2018", teamName: "Astralis" },
      { id: "xyp9x-2018", nickname: "Xyp9x", country: "DK", role: "support", ovr: 90, teamId: "astralis-2018", teamName: "Astralis" }
    ]
  },
  // 4. Natus Vincere (2021)
  {
    id: "navi-2021",
    name: "Natus Vincere",
    shortName: "NAVI",
    year: 2021,
    logoText: "NAVI",
    accentColor: "#FACC15",
    roster: [
      { id: "s1mple-2021", nickname: "s1mple", country: "UA", role: "awp", ovr: 99, teamId: "navi-2021", teamName: "Natus Vincere" },
      { id: "electronic-2021", nickname: "electronic", country: "RU", role: "rifler", ovr: 94, teamId: "navi-2021", teamName: "Natus Vincere" },
      { id: "b1t-2021", nickname: "b1t", country: "UA", role: "entry", ovr: 91, teamId: "navi-2021", teamName: "Natus Vincere" },
      { id: "boombl4-2021", nickname: "Boombl4", country: "RU", role: "igl", ovr: 86, teamId: "navi-2021", teamName: "Natus Vincere" },
      { id: "perfecto-2021", nickname: "Perfecto", country: "RU", role: "support", ovr: 88, teamId: "navi-2021", teamName: "Natus Vincere" }
    ]
  },
  // 5. FaZe Clan (2022)
  {
    id: "faze-2022",
    name: "FaZe Clan",
    shortName: "FaZe",
    year: 2022,
    logoText: "FAZE",
    accentColor: "#E11D48",
    roster: [
      { id: "karrigan-2022", nickname: "karrigan", country: "DK", role: "igl", ovr: 91, teamId: "faze-2022", teamName: "FaZe Clan" },
      { id: "rain-2022", nickname: "rain", country: "NO", role: "entry", ovr: 93, teamId: "faze-2022", teamName: "FaZe Clan" },
      { id: "broky-2022", nickname: "broky", country: "LV", role: "awp", ovr: 94, teamId: "faze-2022", teamName: "FaZe Clan" },
      { id: "twistzz-2022", nickname: "Twistzz", country: "CA", role: "rifler", ovr: 95, teamId: "faze-2022", teamName: "FaZe Clan" },
      { id: "ropz-2022", nickname: "ropz", country: "EE", role: "lurker", ovr: 96, teamId: "faze-2022", teamName: "FaZe Clan" }
    ]
  },
  // 6. Fnatic (2015)
  {
    id: "fnatic-2015",
    name: "Fnatic",
    shortName: "FNC",
    year: 2015,
    logoText: "FNC",
    accentColor: "#FF6B00",
    roster: [
      { id: "pronax-2015", nickname: "pronax", country: "SE", role: "igl", ovr: 87, teamId: "fnatic-2015", teamName: "Fnatic" },
      { id: "olofmeister-2015", nickname: "olofmeister", country: "SE", role: "rifler", ovr: 97, teamId: "fnatic-2015", teamName: "Fnatic" },
      { id: "flusha-2015", nickname: "flusha", country: "SE", role: "lurker", ovr: 95, teamId: "fnatic-2015", teamName: "Fnatic" },
      { id: "jw-2015", nickname: "JW", country: "SE", role: "awp", ovr: 92, teamId: "fnatic-2015", teamName: "Fnatic" },
      { id: "krimz-2015", nickname: "KRIMZ", country: "SE", role: "support", ovr: 93, teamId: "fnatic-2015", teamName: "Fnatic" }
    ]
  },
  // 7. Ninjas in Pyjamas (2014)
  {
    id: "nip-2014",
    name: "Ninjas in Pyjamas",
    shortName: "NiP",
    year: 2014,
    logoText: "NiP",
    accentColor: "#EAB308",
    roster: [
      { id: "fiff-2014", nickname: "Fifflaren", country: "SE", role: "support", ovr: 81, teamId: "nip-2014", teamName: "Ninjas in Pyjamas" },
      { id: "f0rest-2014", nickname: "f0rest", country: "SE", role: "rifler", ovr: 96, teamId: "nip-2014", teamName: "Ninjas in Pyjamas" },
      { id: "get_right-2014", nickname: "GeT_RiGhT", country: "SE", role: "lurker", ovr: 97, teamId: "nip-2014", teamName: "Ninjas in Pyjamas" },
      { id: "xizt-2014", nickname: "Xizt", country: "SE", role: "igl", ovr: 88, teamId: "nip-2014", teamName: "Ninjas in Pyjamas" },
      { id: "friberg-2014", nickname: "friberg", country: "SE", role: "entry", ovr: 91, teamId: "nip-2014", teamName: "Ninjas in Pyjamas" }
    ]
  },
  // 8. Team Vitality (2023)
  {
    id: "vitality-2023",
    name: "Team Vitality",
    shortName: "VIT",
    year: 2023,
    logoText: "VIT",
    accentColor: "#FACC15",
    roster: [
      { id: "zywoo-2023", nickname: "ZywOo", country: "FR", role: "awp", ovr: 99, teamId: "vitality-2023", teamName: "Team Vitality" },
      { id: "apex-2023", nickname: "apEX", country: "FR", role: "igl", ovr: 89, teamId: "vitality-2023", teamName: "Team Vitality" },
      { id: "spinx-2023", nickname: "Spinx", country: "IL", role: "lurker", ovr: 93, teamId: "vitality-2023", teamName: "Team Vitality" },
      { id: "magisk-2023", nickname: "Magisk", country: "DK", role: "rifler", ovr: 92, teamId: "vitality-2023", teamName: "Team Vitality" },
      { id: "dupreeh-2023", nickname: "dupreeh", country: "DK", role: "entry", ovr: 90, teamId: "vitality-2023", teamName: "Team Vitality" }
    ]
  },
  // 9. Virtus.pro (2014)
  {
    id: "vp-2014",
    name: "Virtus.pro",
    shortName: "VP",
    year: 2014,
    logoText: "VP",
    accentColor: "#F97316",
    roster: [
      { id: "taz-2014", nickname: "TaZ", country: "PL", role: "igl", ovr: 88, teamId: "vp-2014", teamName: "Virtus.pro" },
      { id: "neo-2014", nickname: "NEO", country: "PL", role: "support", ovr: 92, teamId: "vp-2014", teamName: "Virtus.pro" },
      { id: "snax-2014", nickname: "Snax", country: "PL", role: "lurker", ovr: 96, teamId: "vp-2014", teamName: "Virtus.pro" },
      { id: "byali-2014", nickname: "byali", country: "PL", role: "rifler", ovr: 92, teamId: "vp-2014", teamName: "Virtus.pro" },
      { id: "paszabiceps-2014", nickname: "pashaBiceps", country: "PL", role: "awp", ovr: 95, teamId: "vp-2014", teamName: "Virtus.pro" }
    ]
  },
  // 10. Natus Vincere (2024)
  {
    id: "navi-2024",
    name: "Natus Vincere",
    shortName: "NAVI",
    year: 2024,
    logoText: "NAVI",
    accentColor: "#FACC15",
    roster: [
      { id: "aleksib-2024", nickname: "Aleksib", country: "FI", role: "igl", ovr: 90, teamId: "navi-2024", teamName: "Natus Vincere" },
      { id: "jl-2024", nickname: "jL", country: "LT", role: "entry", ovr: 95, teamId: "navi-2024", teamName: "Natus Vincere" },
      { id: "w0nderful-2024", nickname: "w0nderful", country: "UA", role: "awp", ovr: 92, teamId: "navi-2024", teamName: "Natus Vincere" },
      { id: "im-2024", nickname: "iM", country: "RO", role: "rifler", ovr: 90, teamId: "navi-2024", teamName: "Natus Vincere" },
      { id: "b1t-2024", nickname: "b1t", country: "UA", role: "lurker", ovr: 93, teamId: "navi-2024", teamName: "Natus Vincere" }
    ]
  },
  // 11. Team Spirit (2024)
  {
    id: "spirit-2024",
    name: "Team Spirit",
    shortName: "Spirit",
    year: 2024,
    logoText: "TS",
    accentColor: "#10B981",
    roster: [
      { id: "chopper-2024", nickname: "chopper", country: "RU", role: "igl", ovr: 88, teamId: "spirit-2024", teamName: "Team Spirit" },
      { id: "donk-2024", nickname: "donk", country: "RU", role: "entry", ovr: 98, teamId: "spirit-2024", teamName: "Team Spirit" },
      { id: "sh1ro-2024", nickname: "sh1ro", country: "RU", role: "awp", ovr: 96, teamId: "spirit-2024", teamName: "Team Spirit" },
      { id: "magixx-2024", nickname: "magixx", country: "RU", role: "support", ovr: 87, teamId: "spirit-2024", teamName: "Team Spirit" },
      { id: "zont1x-2024", nickname: "zont1x", country: "UA", role: "lurker", ovr: 89, teamId: "spirit-2024", teamName: "Team Spirit" }
    ]
  },
  // 12. G2 Esports (2023)
  {
    id: "g2-2023",
    name: "G2 Esports",
    shortName: "G2",
    year: 2023,
    logoText: "G2",
    accentColor: "#EF4444",
    roster: [
      { id: "hoxxi-2023", nickname: "HooXi", country: "DK", role: "igl", ovr: 86, teamId: "g2-2023", teamName: "G2 Esports" },
      { id: "niko-2023", nickname: "NiKo", country: "BA", role: "entry", ovr: 97, teamId: "g2-2023", teamName: "G2 Esports" },
      { id: "m0nesy-2023", nickname: "m0NESY", country: "RU", role: "awp", ovr: 96, teamId: "g2-2023", teamName: "G2 Esports" },
      { id: "hunter-2023", nickname: "huNter-", country: "BA", role: "rifler", ovr: 92, teamId: "g2-2023", teamName: "G2 Esports" },
      { id: "jks-2023", nickname: "jks", country: "AU", role: "support", ovr: 89, teamId: "g2-2023", teamName: "G2 Esports" }
    ]
  },
  // 13. Team Liquid (2019)
  {
    id: "liquid-2019",
    name: "Team Liquid",
    shortName: "TL",
    year: 2019,
    logoText: "TL",
    accentColor: "#0EA5E9",
    roster: [
      { id: "nitr0-2019", nickname: "nitr0", country: "US", role: "igl", ovr: 91, teamId: "liquid-2019", teamName: "Team Liquid" },
      { id: "elige-2019", nickname: "EliGE", country: "US", role: "entry", ovr: 96, teamId: "liquid-2019", teamName: "Team Liquid" },
      { id: "twistzz-2019", nickname: "Twistzz", country: "CA", role: "rifler", ovr: 95, teamId: "liquid-2019", teamName: "Team Liquid" },
      { id: "nafe-2019", nickname: "NAF", country: "CA", role: "lurker", ovr: 94, teamId: "liquid-2019", teamName: "Team Liquid" },
      { id: "stewie2k-2019", nickname: "Stewie2K", country: "US", role: "support", ovr: 90, teamId: "liquid-2019", teamName: "Team Liquid" }
    ]
  },
  // 14. Cloud9 (2018)
  {
    id: "c9-2018",
    name: "Cloud9",
    shortName: "C9",
    year: 2018,
    logoText: "C9",
    accentColor: "#00AEEF",
    roster: [
      { id: "tarik-2018", nickname: "tarik", country: "US", role: "igl", ovr: 94, teamId: "c9-2018", teamName: "Cloud9" },
      { id: "stewie2k-2018", nickname: "Stewie2K", country: "US", role: "entry", ovr: 92, teamId: "c9-2018", teamName: "Cloud9" },
      { id: "autimatic-2018", nickname: "autimatic", country: "US", role: "lurker", ovr: 93, teamId: "c9-2018", teamName: "Cloud9" },
      { id: "rush-2018", nickname: "RUSH", country: "US", role: "support", ovr: 87, teamId: "c9-2018", teamName: "Cloud9" },
      { id: "ska-2018", nickname: "Skadoodle", country: "US", role: "awp", ovr: 91, teamId: "c9-2018", teamName: "Cloud9" }
    ]
  },
  // 15. Team EnVyUs (2015)
  {
    id: "envy-2015",
    name: "Team EnVyUs",
    shortName: "nV",
    year: 2015,
    logoText: "nV",
    accentColor: "#1E3A8A",
    roster: [
      { id: "happy-2015", nickname: "Happy", country: "FR", role: "igl", ovr: 91, teamId: "envy-2015", teamName: "Team EnVyUs" },
      { id: "kennys-2015", nickname: "kennyS", country: "FR", role: "awp", ovr: 97, teamId: "envy-2015", teamName: "Team EnVyUs" },
      { id: "apex-2015", nickname: "apEX", country: "FR", role: "entry", ovr: 92, teamId: "envy-2015", teamName: "Team EnVyUs" },
      { id: "nbk-2015", nickname: "NBK-", country: "FR", role: "support", ovr: 90, teamId: "envy-2015", teamName: "Team EnVyUs" },
      { id: "kioshima-2015", nickname: "kioShiMa", country: "FR", role: "rifler", ovr: 89, teamId: "envy-2015", teamName: "Team EnVyUs" }
    ]
  },
  // 16. Gambit Esports (2017)
  {
    id: "gambit-2017",
    name: "Gambit Esports",
    shortName: "GMB",
    year: 2017,
    logoText: "GMB",
    accentColor: "#DC2626",
    roster: [
      { id: "zeus-2017", nickname: "Zeus", country: "UA", role: "igl", ovr: 88, teamId: "gambit-2017", teamName: "Gambit Esports" },
      { id: "dosia-2017", nickname: "Dosia", country: "RU", role: "support", ovr: 86, teamId: "gambit-2017", teamName: "Gambit Esports" },
      { id: "adren-2017", nickname: "AdreN", country: "KZ", role: "rifler", ovr: 94, teamId: "gambit-2017", teamName: "Gambit Esports" },
      { id: "hobbit-2017", nickname: "HObbit", country: "KZ", role: "entry", ovr: 92, teamId: "gambit-2017", teamName: "Gambit Esports" },
      { id: "mou-2017", nickname: "mou", country: "KZ", role: "awp", ovr: 89, teamId: "gambit-2017", teamName: "Gambit Esports" }
    ]
  },
  // 17. FURIA Esports (2019)
  {
    id: "furia-2019",
    name: "FURIA Esports",
    shortName: "FURIA",
    year: 2019,
    logoText: "FUR",
    accentColor: "#F59E0B",
    roster: [
      { id: "arT-2019", nickname: "arT", country: "BR", role: "igl", ovr: 90, teamId: "furia-2019", teamName: "FURIA Esports" },
      { id: "yuurih-2019", nickname: "yuurih", country: "BR", role: "rifler", ovr: 93, teamId: "furia-2019", teamName: "FURIA Esports" },
      { id: "kscerato-2019", nickname: "KSCERATO", country: "BR", role: "lurker", ovr: 95, teamId: "furia-2019", teamName: "FURIA Esports" },
      { id: "vini-2019", nickname: "VINI", country: "BR", role: "support", ovr: 86, teamId: "furia-2019", teamName: "FURIA Esports" },
      { id: "ablej-2019", nickname: "ableJ", country: "BR", role: "entry", ovr: 83, teamId: "furia-2019", teamName: "FURIA Esports" }
    ]
  },
  // 18. Renegades (2019)
  {
    id: "renegades-2019",
    name: "Renegades",
    shortName: "RNG",
    year: 2019,
    logoText: "RNG",
    accentColor: "#8B0000",
    roster: [
      { id: "dexter-2019", nickname: "AZR", country: "AU", role: "igl", ovr: 86, teamId: "renegades-2019", teamName: "Renegades" },
      { id: "jks-2019", nickname: "jks", country: "AU", role: "rifler", ovr: 94, teamId: "renegades-2019", teamName: "Renegades" },
      { id: "liazz-2019", nickname: "Liazz", country: "AU", role: "support", ovr: 85, teamId: "renegades-2019", teamName: "Renegades" },
      { id: "grat-2019", nickname: "Gratisfaction", country: "NZ", role: "awp", ovr: 87, teamId: "renegades-2019", teamName: "Renegades" },
      { id: "jkaem-2019", nickname: "jkaem", country: "NO", role: "entry", ovr: 91, teamId: "renegades-2019", teamName: "Renegades" }
    ]
  },
  // 19. NRG Esports (2019)
  {
    id: "nrg-2019",
    name: "NRG Esports",
    shortName: "NRG",
    year: 2019,
    logoText: "NRG",
    accentColor: "#EF4444",
    roster: [
      { id: "stanislaw-2019", nickname: "stanislaw", country: "CA", role: "igl", ovr: 88, teamId: "nrg-2019", teamName: "NRG Esports" },
      { id: "tarik-2019", nickname: "tarik", country: "US", role: "entry", ovr: 91, teamId: "nrg-2019", teamName: "NRG Esports" },
      { id: "brehze-2019", nickname: "Brehze", country: "US", role: "rifler", ovr: 94, teamId: "nrg-2019", teamName: "NRG Esports" },
      { id: "ethan-2019", nickname: "Ethan", country: "US", role: "support", ovr: 90, teamId: "nrg-2019", teamName: "NRG Esports" },
      { id: "cerq-2019", nickname: "CeRq", country: "BG", role: "awp", ovr: 93, teamId: "nrg-2019", teamName: "NRG Esports" }
    ]
  },
  // 20. MOUZ (2018)
  {
    id: "mouz-2018",
    name: "MOUZ",
    shortName: "MOUZ",
    year: 2018,
    logoText: "MOUZ",
    accentColor: "#E11D48",
    roster: [
      { id: "chrisj-2018", nickname: "chrisJ", country: "NL", role: "igl", ovr: 89, teamId: "mouz-2018", teamName: "MOUZ" },
      { id: "oskar-2018", nickname: "oskar", country: "CZ", role: "awp", ovr: 94, teamId: "mouz-2018", teamName: "MOUZ" },
      { id: "ropz-2018", nickname: "ropz", country: "EE", role: "lurker", ovr: 93, teamId: "mouz-2018", teamName: "MOUZ" },
      { id: "suNny-2018", nickname: "suNny", country: "FI", role: "entry", ovr: 93, teamId: "mouz-2018", teamName: "MOUZ" },
      { id: "styko-2018", nickname: "STYKO", country: "SK", role: "support", ovr: 84, teamId: "mouz-2018", teamName: "MOUZ" }
    ]
  },
  // 21. Complexity Gaming (2020)
  {
    id: "col-2020",
    name: "Complexity Gaming",
    shortName: "COL",
    year: 2020,
    logoText: "COL",
    accentColor: "#002B49",
    roster: [
      { id: "blamef-2020", nickname: "blameF", country: "DK", role: "igl", ovr: 94, teamId: "col-2020", teamName: "Complexity Gaming" },
      { id: "k0nfig-2020", nickname: "k0nfig", country: "DK", role: "entry", ovr: 92, teamId: "col-2020", teamName: "Complexity Gaming" },
      { id: "poizon-2020", nickname: "poizon", country: "BG", role: "awp", ovr: 89, teamId: "col-2020", teamName: "Complexity Gaming" },
      { id: "jks-2020", nickname: "jks", country: "AU", role: "lurker", ovr: 91, teamId: "col-2020", teamName: "Complexity Gaming" },
      { id: "rush-2020", nickname: "RUSH", country: "US", role: "support", ovr: 85, teamId: "col-2020", teamName: "Complexity Gaming" }
    ]
  },
  // 22. ENCE (2019)
  {
    id: "ence-2019",
    name: "ENCE",
    shortName: "ENCE",
    year: 2019,
    logoText: "ENCE",
    accentColor: "#85144b",
    roster: [
      { id: "aleksib-2019", nickname: "Aleksib", country: "FI", role: "igl", ovr: 91, teamId: "ence-2019", teamName: "ENCE" },
      { id: "allu-2019", nickname: "allu", country: "FI", role: "awp", ovr: 92, teamId: "ence-2019", teamName: "ENCE" },
      { id: "sergej-2019", nickname: "sergej", country: "FI", role: "rifler", ovr: 93, teamId: "ence-2019", teamName: "ENCE" },
      { id: "aerial-2019", nickname: "Aerial", country: "FI", role: "entry", ovr: 89, teamId: "ence-2019", teamName: "ENCE" },
      { id: "xseven-2019", nickname: "xseveN", country: "FI", role: "support", ovr: 86, teamId: "ence-2019", teamName: "ENCE" }
    ]
  },
  // 23. Heroic (2022)
  {
    id: "heroic-2022",
    name: "Heroic",
    shortName: "HER",
    year: 2022,
    logoText: "HER",
    accentColor: "#EF4444",
    roster: [
      { id: "cadiaN-2022", nickname: "cadiaN", country: "DK", role: "igl", ovr: 92, teamId: "heroic-2022", teamName: "Heroic" },
      { id: "stavn-2022", nickname: "stavn", country: "DK", role: "rifler", ovr: 95, teamId: "heroic-2022", teamName: "Heroic" },
      { id: "teses-2022", nickname: "TeSeS", country: "DK", role: "entry", ovr: 89, teamId: "heroic-2022", teamName: "Heroic" },
      { id: "sjuush-2022", nickname: "sjuush", country: "DK", role: "support", ovr: 90, teamId: "heroic-2022", teamName: "Heroic" },
      { id: "jabbi-2022", nickname: "jabbi", country: "DK", role: "lurker", ovr: 91, teamId: "heroic-2022", teamName: "Heroic" }
    ]
  },
  // 24. Outsiders (2022)
  {
    id: "outsiders-2022",
    name: "Outsiders",
    shortName: "OUT",
    year: 2022,
    logoText: "OUT",
    accentColor: "#F97316",
    roster: [
      { id: "jame-2022", nickname: "Jame", country: "RU", role: "igl", ovr: 95, teamId: "outsiders-2022", teamName: "Outsiders" },
      { id: "fl1t-2022", nickname: "FL1T", country: "RU", role: "rifler", ovr: 93, teamId: "outsiders-2022", teamName: "Outsiders" },
      { id: "fame-2022", nickname: "fame", country: "RU", role: "entry", ovr: 91, teamId: "outsiders-2022", teamName: "Outsiders" },
      { id: "qikert-2022", nickname: "Qikert", country: "KZ", role: "support", ovr: 87, teamId: "outsiders-2022", teamName: "Outsiders" },
      { id: "n0rb3r7-2022", nickname: "n0rb3r7", country: "RU", role: "lurker", ovr: 88, teamId: "outsiders-2022", teamName: "Outsiders" }
    ]
  },
  // 25. Team Dignitas (2016)
  {
    id: "dignitas-2016",
    name: "Team Dignitas",
    shortName: "DIG",
    year: 2016,
    logoText: "DIG",
    accentColor: "#FACC15",
    roster: [
      { id: "msl-2016", nickname: "MSL", country: "DK", role: "igl", ovr: 86, teamId: "dignitas-2016", teamName: "Team Dignitas" },
      { id: "k0nfig-2016", nickname: "k0nfig", country: "DK", role: "entry", ovr: 93, teamId: "dignitas-2016", teamName: "Team Dignitas" },
      { id: "cajunb-2016", nickname: "cajunb", country: "DK", role: "awp", ovr: 89, teamId: "dignitas-2016", teamName: "Team Dignitas" },
      { id: "magisk-2016", nickname: "Magiskb0Y", country: "DK", role: "rifler", ovr: 94, teamId: "dignitas-2016", teamName: "Team Dignitas" },
      { id: "rubino-2016", nickname: "RUBINO", country: "NO", role: "support", ovr: 86, teamId: "dignitas-2016", teamName: "Team Dignitas" }
    ]
  },
  // 26. Copenhagen Wolves (2014)
  {
    id: "copenhagen-2014",
    name: "Copenhagen Wolves",
    shortName: "CPHW",
    year: 2014,
    logoText: "CW",
    accentColor: "#EAB308",
    roster: [
      { id: "gla1ve-2014", nickname: "gla1ve", country: "DK", role: "igl", ovr: 86, teamId: "copenhagen-2014", teamName: "Copenhagen Wolves" },
      { id: "pimp-2014", nickname: "Pimp", country: "DK", role: "rifler", ovr: 88, teamId: "copenhagen-2014", teamName: "Copenhagen Wolves" },
      { id: "kjaerbye-2014", nickname: "Kjaerbye", country: "DK", role: "entry", ovr: 87, teamId: "copenhagen-2014", teamName: "Copenhagen Wolves" },
      { id: "cajunb-2014", nickname: "cajunb", country: "DK", role: "awp", ovr: 89, teamId: "copenhagen-2014", teamName: "Copenhagen Wolves" },
      { id: "nico-2014", nickname: "Nico", country: "DK", role: "support", ovr: 83, teamId: "copenhagen-2014", teamName: "Copenhagen Wolves" }
    ]
  },
  // 27. Counter Logic Gaming (2015)
  {
    id: "clg-2015",
    name: "Counter Logic Gaming",
    shortName: "CLG",
    year: 2015,
    logoText: "CLG",
    accentColor: "#00A3E0",
    roster: [
      { id: "tarik-2015", nickname: "tarik", country: "US", role: "entry", ovr: 89, teamId: "clg-2015", teamName: "Counter Logic Gaming" },
      { id: "jdm64-2015", nickname: "jdm64", country: "US", role: "awp", ovr: 89, teamId: "clg-2015", teamName: "Counter Logic Gaming" },
      { id: "reltuC-2015", nickname: "reltuC", country: "US", role: "support", ovr: 83, teamId: "clg-2015", teamName: "Counter Logic Gaming" },
      { id: "hazed-2015", nickname: "hazed", country: "US", role: "rifler", ovr: 85, teamId: "clg-2015", teamName: "Counter Logic Gaming" },
      { id: "fns-2015", nickname: "FNS", country: "CA", role: "igl", ovr: 82, teamId: "clg-2015", teamName: "Counter Logic Gaming" }
    ]
  },
  // 28. TyLoo (2018)
  {
    id: "tyloo-2018",
    name: "TyLoo",
    shortName: "TYL",
    year: 2018,
    logoText: "TYL",
    accentColor: "#DC2626",
    roster: [
      { id: "captainmo-2018", nickname: "CaptainMo", country: "CN", role: "igl", ovr: 85, teamId: "tyloo-2018", teamName: "TyLoo" },
      { id: "somebody-2018", nickname: "somebody", country: "CN", role: "entry", ovr: 89, teamId: "tyloo-2018", teamName: "TyLoo" },
      { id: "bnteT-2018", nickname: "BnTeT", country: "ID", role: "rifler", ovr: 93, teamId: "tyloo-2018", teamName: "TyLoo" },
      { id: "xccurate-2018", nickname: "xccurate", country: "ID", role: "awp", ovr: 90, teamId: "tyloo-2018", teamName: "TyLoo" },
      { id: "dd-2018", nickname: "DD", country: "CN", role: "support", ovr: 84, teamId: "tyloo-2018", teamName: "TyLoo" }
    ]
  },
  // 29. The MongolZ (2024)
  {
    id: "mongolz-2024",
    name: "The MongolZ",
    shortName: "MGLZ",
    year: 2024,
    logoText: "MGLZ",
    accentColor: "#B45309",
    roster: [
      { id: "bzking-2024", nickname: "bzking", country: "MN", role: "igl", ovr: 89, teamId: "mongolz-2024", teamName: "The MongolZ" },
      { id: "senzu-2024", nickname: "Senzu", country: "MN", role: "rifler", ovr: 93, teamId: "mongolz-2024", teamName: "The MongolZ" },
      { id: "mzinho-2024", nickname: "mzinho", country: "MN", role: "entry", ovr: 91, teamId: "mongolz-2024", teamName: "The MongolZ" },
      { id: "910-2024", nickname: "910", country: "MN", role: "awp", ovr: 91, teamId: "mongolz-2024", teamName: "The MongolZ" },
      { id: "techno4k-2024", nickname: "Techno4K", country: "MN", role: "support", ovr: 88, teamId: "mongolz-2024", teamName: "The MongolZ" }
    ]
  },
  // 30. Imperial Esports (2022)
  {
    id: "imperial-2022",
    name: "Imperial Esports",
    shortName: "IMP",
    year: 2022,
    logoText: "IMP",
    accentColor: "#10B981",
    roster: [
      { id: "fallen-2022", nickname: "FalleN", country: "BR", role: "igl", ovr: 91, teamId: "imperial-2022", teamName: "Imperial Esports" },
      { id: "fer-2022", nickname: "fer", country: "BR", role: "entry", ovr: 93, teamId: "imperial-2022", teamName: "Imperial Esports" },
      { id: "fnx-2022", nickname: "fnx", country: "BR", role: "support", ovr: 84, teamId: "imperial-2022", teamName: "Imperial Esports" },
      { id: "boltz-2022", nickname: "boltz", country: "BR", role: "rifler", ovr: 88, teamId: "imperial-2022", teamName: "Imperial Esports" },
      { id: "vini-2022", nickname: "VINI", country: "BR", role: "lurker", ovr: 89, teamId: "imperial-2022", teamName: "Imperial Esports" }
    ]
  },
  // 31. ENCE (2023)
  {
    id: "ence-2023",
    name: "ENCE",
    shortName: "ENCE",
    year: 2023,
    logoText: "ENCE",
    accentColor: "#85144b",
    roster: [
      { id: "snappi-2023", nickname: "Snappi", country: "DK", role: "igl", ovr: 89, teamId: "ence-2023", teamName: "ENCE" },
      { id: "sunpayus-2023", nickname: "SunPayus", country: "ES", role: "awp", ovr: 94, teamId: "ence-2023", teamName: "ENCE" },
      { id: "dycha-2023", nickname: "dycha", country: "PL", role: "rifler", ovr: 90, teamId: "ence-2023", teamName: "ENCE" },
      { id: "maden-2023", nickname: "Maden", country: "ME", role: "entry", ovr: 89, teamId: "ence-2023", teamName: "ENCE" },
      { id: "nertZ-2023", nickname: "NertZ", country: "IL", role: "lurker", ovr: 93, teamId: "ence-2023", teamName: "ENCE" }
    ]
  },
  // 32. Astralis (2017)
  {
    id: "astralis-2017",
    name: "Astralis",
    shortName: "AST",
    year: 2017,
    logoText: "AST",
    accentColor: "#EF4444",
    roster: [
      { id: "gla1ve-2017", nickname: "gla1ve", country: "DK", role: "igl", ovr: 91, teamId: "astralis-2017", teamName: "Astralis" },
      { id: "dev1ce-2017", nickname: "dev1ce", country: "DK", role: "awp", ovr: 96, teamId: "astralis-2017", teamName: "Astralis" },
      { id: "dupreeh-2017", nickname: "dupreeh", country: "DK", role: "entry", ovr: 92, teamId: "astralis-2017", teamName: "Astralis" },
      { id: "kjaerbye-2017", nickname: "Kjaerbye", country: "DK", role: "rifler", ovr: 93, teamId: "astralis-2017", teamName: "Astralis" },
      { id: "xyp9x-2017", nickname: "Xyp9x", country: "DK", role: "support", ovr: 91, teamId: "astralis-2017", teamName: "Astralis" }
    ]
  }
];

export const ALL_DATABASE_PLAYERS = CS_DATABASE.flatMap(t => t.roster);
