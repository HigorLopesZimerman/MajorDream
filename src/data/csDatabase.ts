import { HistoricalTeam, Player, PlayerAttributes } from '../types';

export function computePlayerOvr(attr: PlayerAttributes): number {
  return Math.round(
    (attr.aim + attr.imp + attr.clu + attr.con + attr.gs + attr.uti + attr.mov) / 7
  );
}

interface RawTeam {
  id: string;
  name: string;
  shortName: string;
  year: number;
  logoText: string;
  accentColor: string;
  tags: string[];
  roster: Array<Omit<Player, 'ovr'> & { ovr?: number }>;
}

const RAW_CS_DATABASE: RawTeam[] = [
  // ==========================================
  //  ANO 2014 (3 times)
  // ==========================================

  // 1. Ninjas in Pyjamas (2014)
  {
    id: "nip-2014",
    name: "Ninjas in Pyjamas",
    shortName: "NiP",
    year: 2014,
    logoText: "NiP",
    accentColor: "#EAB308",
    tags: ["EU", "2014", "SE"],
    roster: [
      {
        id: "fiff-2014", nickname: "Fifflaren", country: "SE", role: "support", teamId: "nip-2014", teamName: "Ninjas in Pyjamas",
        attributes: { aim: 77, imp: 77, clu: 82, con: 83, gs: 83, uti: 87, mov: 78 }
      },
      {
        id: "f0rest-2014", nickname: "f0rest", country: "SE", role: "rifler", teamId: "nip-2014", teamName: "Ninjas in Pyjamas",
        attributes: { aim: 99, imp: 98, clu: 96, con: 98, gs: 96, uti: 92, mov: 93 }
      },
      {
        id: "get_right-2014", nickname: "GeT_RiGhT", country: "SE", role: "lurker", teamId: "nip-2014", teamName: "Ninjas in Pyjamas",
        attributes: { aim: 98, imp: 98, clu: 99, con: 99, gs: 99, uti: 91, mov: 92 }
      },
      {
        id: "xizt-2014", nickname: "Xizt", country: "SE", role: "igl", teamId: "nip-2014", teamName: "Ninjas in Pyjamas",
        attributes: { aim: 83, imp: 85, clu: 87, con: 89, gs: 94, uti: 93, mov: 85 }
      },
      {
        id: "friberg-2014", nickname: "friberg", country: "SE", role: "entry", teamId: "nip-2014", teamName: "Ninjas in Pyjamas",
        attributes: { aim: 93, imp: 95, clu: 87, con: 88, gs: 89, uti: 91, mov: 94 }
      }
    ]
  },

  // 2. Virtus.pro (2014)
  {
    id: "vp-2014",
    name: "Virtus.pro",
    shortName: "VP",
    year: 2014,
    logoText: "VP",
    accentColor: "#F97316",
    tags: ["EU", "2014", "PL"],
    roster: [
      {
        id: "taz-2014", nickname: "TaZ", country: "PL", role: "igl", teamId: "vp-2014", teamName: "Virtus.pro",
        attributes: { aim: 83, imp: 85, clu: 87, con: 89, gs: 94, uti: 93, mov: 85 }
      },
      {
        id: "neo-2014", nickname: "NEO", country: "PL", role: "support", teamId: "vp-2014", teamName: "Virtus.pro",
        attributes: { aim: 88, imp: 88, clu: 93, con: 94, gs: 94, uti: 98, mov: 89 }
      },
      {
        id: "snax-2014", nickname: "Snax", country: "PL", role: "lurker", teamId: "vp-2014", teamName: "Virtus.pro",
        attributes: { aim: 97, imp: 97, clu: 99, con: 98, gs: 99, uti: 90, mov: 91 }
      },
      {
        id: "byali-2014", nickname: "byali", country: "PL", role: "rifler", teamId: "vp-2014", teamName: "Virtus.pro",
        attributes: { aim: 95, imp: 94, clu: 92, con: 94, gs: 92, uti: 88, mov: 89 }
      },
      {
        id: "paszabiceps-2014", nickname: "pashaBiceps", country: "PL", role: "awp", teamId: "vp-2014", teamName: "Virtus.pro",
        attributes: { aim: 98, imp: 98, clu: 96, con: 96, gs: 95, uti: 90, mov: 92 }
      }
    ]
  },

  // 3. Copenhagen Wolves (2014)
  {
    id: "copenhagen-2014",
    name: "Copenhagen Wolves",
    shortName: "CPHW",
    year: 2014,
    logoText: "CW",
    accentColor: "#EAB308",
    tags: ["EU", "2014", "DK"],
    roster: [
      {
        id: "gla1ve-2014", nickname: "gla1ve", country: "DK", role: "igl", teamId: "copenhagen-2014", teamName: "Copenhagen Wolves",
        attributes: { aim: 81, imp: 83, clu: 85, con: 87, gs: 92, uti: 91, mov: 83 }
      },
      {
        id: "pimp-2014", nickname: "Pimp", country: "DK", role: "rifler", teamId: "copenhagen-2014", teamName: "Copenhagen Wolves",
        attributes: { aim: 91, imp: 90, clu: 88, con: 90, gs: 88, uti: 84, mov: 85 }
      },
      {
        id: "kjaerbye-2014", nickname: "Kjaerbye", country: "DK", role: "entry", teamId: "copenhagen-2014", teamName: "Copenhagen Wolves",
        attributes: { aim: 89, imp: 91, clu: 83, con: 84, gs: 85, uti: 87, mov: 90 }
      },
      {
        id: "cajunb-2014", nickname: "cajunb", country: "DK", role: "awp", teamId: "copenhagen-2014", teamName: "Copenhagen Wolves",
        attributes: { aim: 92, imp: 92, clu: 90, con: 90, gs: 89, uti: 84, mov: 86 }
      },
      {
        id: "nico-2014", nickname: "Nico", country: "DK", role: "support", teamId: "copenhagen-2014", teamName: "Copenhagen Wolves",
        attributes: { aim: 79, imp: 79, clu: 84, con: 85, gs: 85, uti: 89, mov: 80 }
      }
    ]
  },

  // ==========================================
  //  ANO 2015 (3 times)
  // ==========================================

  // 4. Fnatic (2015)
  {
    id: "fnatic-2015",
    name: "Fnatic",
    shortName: "FNC",
    year: 2015,
    logoText: "FNC",
    accentColor: "#FF6B00",
    tags: ["EU", "2015", "SE"],
    roster: [
      {
        id: "pronax-2015", nickname: "pronax", country: "SE", role: "igl", teamId: "fnatic-2015", teamName: "Fnatic",
        attributes: { aim: 82, imp: 84, clu: 86, con: 88, gs: 93, uti: 92, mov: 84 }
      },
      {
        id: "olofmeister-2015", nickname: "olofmeister", country: "SE", role: "rifler", teamId: "fnatic-2015", teamName: "Fnatic",
        attributes: { aim: 99, imp: 99, clu: 97, con: 99, gs: 97, uti: 93, mov: 94 }
      },
      {
        id: "flusha-2015", nickname: "flusha", country: "SE", role: "lurker", teamId: "fnatic-2015", teamName: "Fnatic",
        attributes: { aim: 96, imp: 96, clu: 99, con: 97, gs: 98, uti: 89, mov: 90 }
      },
      {
        id: "jw-2015", nickname: "JW", country: "SE", role: "awp", teamId: "fnatic-2015", teamName: "Fnatic",
        attributes: { aim: 95, imp: 95, clu: 93, con: 93, gs: 92, uti: 87, mov: 89 }
      },
      {
        id: "krimz-2015", nickname: "KRIMZ", country: "SE", role: "support", teamId: "fnatic-2015", teamName: "Fnatic",
        attributes: { aim: 89, imp: 89, clu: 94, con: 95, gs: 95, uti: 99, mov: 90 }
      }
    ]
  },

  // 5. Team EnVyUs (2015)
  {
    id: "envy-2015",
    name: "Team EnVyUs",
    shortName: "nV",
    year: 2015,
    logoText: "nV",
    accentColor: "#1E3A8A",
    tags: ["EU", "2015", "FR"],
    roster: [
      {
        id: "happy-2015", nickname: "Happy", country: "FR", role: "igl", teamId: "envy-2015", teamName: "Team EnVyUs",
        attributes: { aim: 86, imp: 88, clu: 90, con: 92, gs: 97, uti: 96, mov: 88 }
      },
      {
        id: "kennys-2015", nickname: "kennyS", country: "FR", role: "awp", teamId: "envy-2015", teamName: "Team EnVyUs",
        attributes: { aim: 99, imp: 99, clu: 98, con: 98, gs: 97, uti: 92, mov: 94 }
      },
      {
        id: "apex-2015", nickname: "apEX", country: "FR", role: "entry", teamId: "envy-2015", teamName: "Team EnVyUs",
        attributes: { aim: 94, imp: 96, clu: 88, con: 89, gs: 90, uti: 92, mov: 95 }
      },
      {
        id: "nbk-2015", nickname: "NBK-", country: "FR", role: "support", teamId: "envy-2015", teamName: "Team EnVyUs",
        attributes: { aim: 86, imp: 86, clu: 91, con: 92, gs: 92, uti: 96, mov: 87 }
      },
      {
        id: "kioshima-2015", nickname: "kioShiMa", country: "FR", role: "rifler", teamId: "envy-2015", teamName: "Team EnVyUs",
        attributes: { aim: 92, imp: 91, clu: 89, con: 91, gs: 89, uti: 85, mov: 86 }
      }
    ]
  },

  // 6. Counter Logic Gaming (2015)
  {
    id: "clg-2015",
    name: "Counter Logic Gaming",
    shortName: "CLG",
    year: 2015,
    logoText: "CLG",
    accentColor: "#00A3E0",
    tags: ["NA", "2015", "US"],
    roster: [
      {
        id: "tarik-2015", nickname: "tarik", country: "US", role: "entry", teamId: "clg-2015", teamName: "Counter Logic Gaming",
        attributes: { aim: 91, imp: 93, clu: 85, con: 86, gs: 87, uti: 89, mov: 92 }
      },
      {
        id: "jdm64-2015", nickname: "jdm64", country: "US", role: "awp", teamId: "clg-2015", teamName: "Counter Logic Gaming",
        attributes: { aim: 92, imp: 92, clu: 90, con: 90, gs: 89, uti: 84, mov: 86 }
      },
      {
        id: "reltuC-2015", nickname: "reltuC", country: "US", role: "support", teamId: "clg-2015", teamName: "Counter Logic Gaming",
        attributes: { aim: 79, imp: 79, clu: 84, con: 85, gs: 85, uti: 89, mov: 80 }
      },
      {
        id: "hazed-2015", nickname: "hazed", country: "US", role: "rifler", teamId: "clg-2015", teamName: "Counter Logic Gaming",
        attributes: { aim: 88, imp: 87, clu: 85, con: 87, gs: 85, uti: 81, mov: 82 }
      },
      {
        id: "fns-2015", nickname: "FNS", country: "CA", role: "igl", teamId: "clg-2015", teamName: "Counter Logic Gaming",
        attributes: { aim: 77, imp: 79, clu: 81, con: 83, gs: 88, uti: 87, mov: 79 }
      }
    ]
  },

  // ==========================================
  //  ANO 2016 (2 times)
  // ==========================================

  // 7. Luminosity Gaming (2016)
  {
    id: "lg-2016",
    name: "Luminosity Gaming",
    shortName: "LG",
    year: 2016,
    logoText: "LG",
    accentColor: "#00A3E0",
    tags: ["SA", "2016", "BR"],
    roster: [
      {
        id: "fallen-2016", nickname: "FalleN", country: "BR", role: "igl", teamId: "lg-2016", teamName: "Luminosity Gaming",
        attributes: { aim: 88, imp: 90, clu: 92, con: 94, gs: 99, uti: 98, mov: 90 }
      },
      {
        id: "coldzera-2016", nickname: "coldzera", country: "BR", role: "lurker", teamId: "lg-2016", teamName: "Luminosity Gaming",
        attributes: { aim: 99, imp: 99, clu: 99, con: 99, gs: 99, uti: 92, mov: 93 }
      },
      {
        id: "fer-2016", nickname: "fer", country: "BR", role: "entry", teamId: "lg-2016", teamName: "Luminosity Gaming",
        attributes: { aim: 94, imp: 96, clu: 88, con: 89, gs: 90, uti: 92, mov: 95 }
      },
      {
        id: "fnx-2016", nickname: "fnx", country: "BR", role: "support", teamId: "lg-2016", teamName: "Luminosity Gaming",
        attributes: { aim: 84, imp: 84, clu: 89, con: 90, gs: 90, uti: 94, mov: 85 }
      },
      {
        id: "taco-2016", nickname: "TACO", country: "BR", role: "entry", teamId: "lg-2016", teamName: "Luminosity Gaming",
        attributes: { aim: 86, imp: 88, clu: 80, con: 81, gs: 82, uti: 84, mov: 87 }
      }
    ]
  },

  // 8. Team Dignitas (2016)
  {
    id: "dignitas-2016",
    name: "Team Dignitas",
    shortName: "DIG",
    year: 2016,
    logoText: "DIG",
    accentColor: "#FACC15",
    tags: ["EU", "2016", "DK"],
    roster: [
      {
        id: "msl-2016", nickname: "MSL", country: "DK", role: "igl", teamId: "dignitas-2016", teamName: "Team Dignitas",
        attributes: { aim: 81, imp: 83, clu: 85, con: 87, gs: 92, uti: 91, mov: 83 }
      },
      {
        id: "k0nfig-2016", nickname: "k0nfig", country: "DK", role: "entry", teamId: "dignitas-2016", teamName: "Team Dignitas",
        attributes: { aim: 95, imp: 97, clu: 89, con: 90, gs: 91, uti: 93, mov: 96 }
      },
      {
        id: "cajunb-2016", nickname: "cajunb", country: "DK", role: "awp", teamId: "dignitas-2016", teamName: "Team Dignitas",
        attributes: { aim: 92, imp: 92, clu: 90, con: 90, gs: 89, uti: 84, mov: 86 }
      },
      {
        id: "magisk-2016", nickname: "Magiskb0Y", country: "DK", role: "rifler", teamId: "dignitas-2016", teamName: "Team Dignitas",
        attributes: { aim: 97, imp: 96, clu: 94, con: 96, gs: 94, uti: 90, mov: 91 }
      },
      {
        id: "rubino-2016", nickname: "RUBINO", country: "NO", role: "support", teamId: "dignitas-2016", teamName: "Team Dignitas",
        attributes: { aim: 82, imp: 82, clu: 87, con: 88, gs: 88, uti: 92, mov: 83 }
      }
    ]
  },

  // ==========================================
  //  ANO 2017 (3 times)
  // ==========================================

  // 9. SK Gaming (2017)
  {
    id: "sk-2017",
    name: "SK Gaming",
    shortName: "SK",
    year: 2017,
    logoText: "SK",
    accentColor: "#002B49",
    tags: ["SA", "2017", "BR"],
    roster: [
      {
        id: "fallen-2017", nickname: "FalleN", country: "BR", role: "igl", teamId: "sk-2017", teamName: "SK Gaming",
        attributes: { aim: 89, imp: 91, clu: 93, con: 95, gs: 99, uti: 99, mov: 91 }
      },
      {
        id: "coldzera-2017", nickname: "coldzera", country: "BR", role: "rifler", teamId: "sk-2017", teamName: "SK Gaming",
        attributes: { aim: 99, imp: 99, clu: 97, con: 99, gs: 97, uti: 93, mov: 94 }
      },
      {
        id: "fer-2017", nickname: "fer", country: "BR", role: "entry", teamId: "sk-2017", teamName: "SK Gaming",
        attributes: { aim: 97, imp: 99, clu: 91, con: 92, gs: 93, uti: 95, mov: 98 }
      },
      {
        id: "taco-2017", nickname: "TACO", country: "BR", role: "support", teamId: "sk-2017", teamName: "SK Gaming",
        attributes: { aim: 79, imp: 79, clu: 84, con: 85, gs: 85, uti: 89, mov: 80 }
      },
      {
        id: "felps-2017", nickname: "felps", country: "BR", role: "lurker", teamId: "sk-2017", teamName: "SK Gaming",
        attributes: { aim: 88, imp: 88, clu: 91, con: 89, gs: 90, uti: 81, mov: 82 }
      }
    ]
  },

  // 10. Gambit Esports (2017)
  {
    id: "gambit-2017",
    name: "Gambit Esports",
    shortName: "GMB",
    year: 2017,
    logoText: "GMB",
    accentColor: "#DC2626",
    tags: ["CIS", "2017", "KZ"],
    roster: [
      {
        id: "zeus-2017", nickname: "Zeus", country: "UA", role: "igl", teamId: "gambit-2017", teamName: "Gambit Esports",
        attributes: { aim: 83, imp: 85, clu: 87, con: 89, gs: 94, uti: 93, mov: 85 }
      },
      {
        id: "dosia-2017", nickname: "Dosia", country: "RU", role: "support", teamId: "gambit-2017", teamName: "Gambit Esports",
        attributes: { aim: 82, imp: 82, clu: 87, con: 88, gs: 88, uti: 92, mov: 83 }
      },
      {
        id: "adren-2017", nickname: "AdreN", country: "KZ", role: "rifler", teamId: "gambit-2017", teamName: "Gambit Esports",
        attributes: { aim: 97, imp: 96, clu: 94, con: 96, gs: 94, uti: 90, mov: 91 }
      },
      {
        id: "hobbit-2017", nickname: "HObbit", country: "KZ", role: "entry", teamId: "gambit-2017", teamName: "Gambit Esports",
        attributes: { aim: 94, imp: 96, clu: 88, con: 89, gs: 90, uti: 92, mov: 95 }
      },
      {
        id: "mou-2017", nickname: "mou", country: "KZ", role: "awp", teamId: "gambit-2017", teamName: "Gambit Esports",
        attributes: { aim: 92, imp: 92, clu: 90, con: 90, gs: 89, uti: 84, mov: 86 }
      }
    ]
  },

  // 11. Astralis (2017)
  {
    id: "astralis-2017",
    name: "Astralis",
    shortName: "AST",
    year: 2017,
    logoText: "AST",
    accentColor: "#EF4444",
    tags: ["EU", "2017", "DK"],
    roster: [
      {
        id: "gla1ve-2017", nickname: "gla1ve", country: "DK", role: "igl", teamId: "astralis-2017", teamName: "Astralis",
        attributes: { aim: 86, imp: 88, clu: 90, con: 92, gs: 97, uti: 96, mov: 88 }
      },
      {
        id: "dev1ce-2017", nickname: "dev1ce", country: "DK", role: "awp", teamId: "astralis-2017", teamName: "Astralis",
        attributes: { aim: 99, imp: 99, clu: 97, con: 97, gs: 96, uti: 91, mov: 93 }
      },
      {
        id: "dupreeh-2017", nickname: "dupreeh", country: "DK", role: "entry", teamId: "astralis-2017", teamName: "Astralis",
        attributes: { aim: 94, imp: 96, clu: 88, con: 89, gs: 90, uti: 92, mov: 95 }
      },
      {
        id: "kjaerbye-2017", nickname: "Kjaerbye", country: "DK", role: "rifler", teamId: "astralis-2017", teamName: "Astralis",
        attributes: { aim: 96, imp: 95, clu: 93, con: 95, gs: 93, uti: 89, mov: 90 }
      },
      {
        id: "xyp9x-2017", nickname: "Xyp9x", country: "DK", role: "support", teamId: "astralis-2017", teamName: "Astralis",
        attributes: { aim: 87, imp: 87, clu: 92, con: 93, gs: 93, uti: 97, mov: 88 }
      }
    ]
  },

  // ==========================================
  //  ANO 2018 (4 times)
  // ==========================================

  // 12. Astralis (2018)
  {
    id: "astralis-2018",
    name: "Astralis",
    shortName: "AST",
    year: 2018,
    logoText: "AST",
    accentColor: "#EF4444",
    tags: ["EU", "2018", "DK"],
    roster: [
      {
        id: "gla1ve-2018", nickname: "gla1ve", country: "DK", role: "igl", teamId: "astralis-2018", teamName: "Astralis",
        attributes: { aim: 87, imp: 89, clu: 91, con: 93, gs: 98, uti: 97, mov: 89 }
      },
      {
        id: "dev1ce-2018", nickname: "dev1ce", country: "DK", role: "awp", teamId: "astralis-2018", teamName: "Astralis",
        attributes: { aim: 99, imp: 99, clu: 98, con: 98, gs: 97, uti: 92, mov: 94 }
      },
      {
        id: "dupreeh-2018", nickname: "dupreeh", country: "DK", role: "entry", teamId: "astralis-2018", teamName: "Astralis",
        attributes: { aim: 95, imp: 97, clu: 89, con: 90, gs: 91, uti: 93, mov: 96 }
      },
      {
        id: "magisk-2018", nickname: "Magisk", country: "DK", role: "rifler", teamId: "astralis-2018", teamName: "Astralis",
        attributes: { aim: 97, imp: 96, clu: 94, con: 96, gs: 94, uti: 90, mov: 91 }
      },
      {
        id: "xyp9x-2018", nickname: "Xyp9x", country: "DK", role: "support", teamId: "astralis-2018", teamName: "Astralis",
        attributes: { aim: 86, imp: 86, clu: 91, con: 92, gs: 92, uti: 96, mov: 87 }
      }
    ]
  },

  // 13. Cloud9 (2018)
  {
    id: "c9-2018",
    name: "Cloud9",
    shortName: "C9",
    year: 2018,
    logoText: "C9",
    accentColor: "#00AEEF",
    tags: ["NA", "2018", "US"],
    roster: [
      {
        id: "tarik-2018", nickname: "tarik", country: "US", role: "igl", teamId: "c9-2018", teamName: "Cloud9",
        attributes: { aim: 89, imp: 91, clu: 93, con: 95, gs: 99, uti: 99, mov: 91 }
      },
      {
        id: "stewie2k-2018", nickname: "Stewie2K", country: "US", role: "entry", teamId: "c9-2018", teamName: "Cloud9",
        attributes: { aim: 94, imp: 96, clu: 88, con: 89, gs: 90, uti: 92, mov: 95 }
      },
      {
        id: "autimatic-2018", nickname: "autimatic", country: "US", role: "lurker", teamId: "c9-2018", teamName: "Cloud9",
        attributes: { aim: 94, imp: 94, clu: 97, con: 95, gs: 96, uti: 87, mov: 88 }
      },
      {
        id: "rush-2018", nickname: "RUSH", country: "US", role: "support", teamId: "c9-2018", teamName: "Cloud9",
        attributes: { aim: 83, imp: 83, clu: 88, con: 89, gs: 89, uti: 93, mov: 84 }
      },
      {
        id: "ska-2018", nickname: "Skadoodle", country: "US", role: "awp", teamId: "c9-2018", teamName: "Cloud9",
        attributes: { aim: 94, imp: 94, clu: 92, con: 92, gs: 91, uti: 86, mov: 88 }
      }
    ]
  },

  // 14. MOUZ (2018)
  {
    id: "mouz-2018",
    name: "MOUZ",
    shortName: "MOUZ",
    year: 2018,
    logoText: "MOUZ",
    accentColor: "#E11D48",
    tags: ["EU", "2018", "DE"],
    roster: [
      {
        id: "chrisj-2018", nickname: "chrisJ", country: "NL", role: "igl", teamId: "mouz-2018", teamName: "MOUZ",
        attributes: { aim: 84, imp: 86, clu: 88, con: 90, gs: 95, uti: 94, mov: 86 }
      },
      {
        id: "oskar-2018", nickname: "oskar", country: "CZ", role: "awp", teamId: "mouz-2018", teamName: "MOUZ",
        attributes: { aim: 97, imp: 97, clu: 95, con: 95, gs: 94, uti: 89, mov: 91 }
      },
      {
        id: "ropz-2018", nickname: "ropz", country: "EE", role: "lurker", teamId: "mouz-2018", teamName: "MOUZ",
        attributes: { aim: 94, imp: 94, clu: 97, con: 95, gs: 96, uti: 87, mov: 88 }
      },
      {
        id: "suNny-2018", nickname: "suNny", country: "FI", role: "entry", teamId: "mouz-2018", teamName: "MOUZ",
        attributes: { aim: 95, imp: 97, clu: 89, con: 90, gs: 91, uti: 93, mov: 96 }
      },
      {
        id: "styko-2018", nickname: "STYKO", country: "SK", role: "support", teamId: "mouz-2018", teamName: "MOUZ",
        attributes: { aim: 80, imp: 80, clu: 85, con: 86, gs: 86, uti: 90, mov: 81 }
      }
    ]
  },

  // 15. TyLoo (2018)
  {
    id: "tyloo-2018",
    name: "TyLoo",
    shortName: "TYL",
    year: 2018,
    logoText: "TYL",
    accentColor: "#DC2626",
    tags: ["ASIA", "2018", "CN"],
    roster: [
      {
        id: "captainmo-2018", nickname: "CaptainMo", country: "CN", role: "igl", teamId: "tyloo-2018", teamName: "TyLoo",
        attributes: { aim: 80, imp: 82, clu: 84, con: 86, gs: 91, uti: 90, mov: 82 }
      },
      {
        id: "somebody-2018", nickname: "somebody", country: "CN", role: "entry", teamId: "tyloo-2018", teamName: "TyLoo",
        attributes: { aim: 91, imp: 93, clu: 85, con: 86, gs: 87, uti: 89, mov: 92 }
      },
      {
        id: "bnteT-2018", nickname: "BnTeT", country: "ID", role: "rifler", teamId: "tyloo-2018", teamName: "TyLoo",
        attributes: { aim: 96, imp: 95, clu: 93, con: 95, gs: 93, uti: 89, mov: 90 }
      },
      {
        id: "xccurate-2018", nickname: "xccurate", country: "ID", role: "awp", teamId: "tyloo-2018", teamName: "TyLoo",
        attributes: { aim: 93, imp: 93, clu: 91, con: 91, gs: 90, uti: 85, mov: 87 }
      },
      {
        id: "dd-2018", nickname: "DD", country: "CN", role: "support", teamId: "tyloo-2018", teamName: "TyLoo",
        attributes: { aim: 80, imp: 80, clu: 85, con: 86, gs: 86, uti: 90, mov: 81 }
      }
    ]
  },

  // ==========================================
  //  ANO 2019 (5 times)
  // ==========================================

  // 16. Team Liquid (2019)
  {
    id: "liquid-2019",
    name: "Team Liquid",
    shortName: "TL",
    year: 2019,
    logoText: "TL",
    accentColor: "#0EA5E9",
    tags: ["NA", "2019", "US"],
    roster: [
      {
        id: "nitr0-2019", nickname: "nitr0", country: "US", role: "igl", teamId: "liquid-2019", teamName: "Team Liquid",
        attributes: { aim: 86, imp: 88, clu: 90, con: 92, gs: 97, uti: 96, mov: 88 }
      },
      {
        id: "elige-2019", nickname: "EliGE", country: "US", role: "entry", teamId: "liquid-2019", teamName: "Team Liquid",
        attributes: { aim: 98, imp: 99, clu: 92, con: 93, gs: 94, uti: 96, mov: 99 }
      },
      {
        id: "twistzz-2019", nickname: "Twistzz", country: "CA", role: "rifler", teamId: "liquid-2019", teamName: "Team Liquid",
        attributes: { aim: 98, imp: 97, clu: 95, con: 97, gs: 95, uti: 91, mov: 92 }
      },
      {
        id: "nafe-2019", nickname: "NAF", country: "CA", role: "lurker", teamId: "liquid-2019", teamName: "Team Liquid",
        attributes: { aim: 95, imp: 95, clu: 98, con: 96, gs: 97, uti: 88, mov: 89 }
      },
      {
        id: "stewie2k-2019", nickname: "Stewie2K", country: "US", role: "support", teamId: "liquid-2019", teamName: "Team Liquid",
        attributes: { aim: 86, imp: 86, clu: 91, con: 92, gs: 92, uti: 96, mov: 87 }
      }
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
    tags: ["SA", "2019", "BR", "CSGO", "MAJOR", "BERLIN_2019"],
    roster: [
      {
        id: "arT-2019", nickname: "arT", country: "BR", role: "igl", teamId: "furia-2019", teamName: "FURIA Esports",
        attributes: { aim: 88, imp: 94, clu: 81, con: 79, gs: 89, uti: 86, mov: 94 }
      },
      {
        id: "yuurih-2019", nickname: "yuurih", country: "BR", role: "rifler", teamId: "furia-2019", teamName: "FURIA Esports",
        attributes: { aim: 91, imp: 89, clu: 86, con: 90, gs: 88, uti: 82, mov: 90 }
      },
      {
        id: "kscerato-2019", nickname: "KSCERATO", country: "BR", role: "lurker", teamId: "furia-2019", teamName: "FURIA Esports",
        attributes: { aim: 92, imp: 91, clu: 87, con: 91, gs: 88, uti: 80, mov: 89 }
      },
      {
        id: "vini-2019", nickname: "VINI", country: "BR", role: "support", teamId: "furia-2019", teamName: "FURIA Esports",
        attributes: { aim: 84, imp: 82, clu: 79, con: 84, gs: 85, uti: 88, mov: 83 }
      },
      {
        id: "ablej-2019", nickname: "ableJ", country: "BR", role: "entry", teamId: "furia-2019", teamName: "FURIA Esports",
        attributes: { aim: 81, imp: 78, clu: 76, con: 77, gs: 79, uti: 80, mov: 82 }
      }
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
    tags: ["OCE", "2019", "AU"],
    roster: [
      {
        id: "dexter-2019", nickname: "AZR", country: "AU", role: "igl", teamId: "renegades-2019", teamName: "Renegades",
        attributes: { aim: 81, imp: 83, clu: 85, con: 87, gs: 92, uti: 91, mov: 83 }
      },
      {
        id: "jks-2019", nickname: "jks", country: "AU", role: "rifler", teamId: "renegades-2019", teamName: "Renegades",
        attributes: { aim: 97, imp: 96, clu: 94, con: 96, gs: 94, uti: 90, mov: 91 }
      },
      {
        id: "liazz-2019", nickname: "Liazz", country: "AU", role: "support", teamId: "renegades-2019", teamName: "Renegades",
        attributes: { aim: 81, imp: 81, clu: 86, con: 87, gs: 87, uti: 91, mov: 82 }
      },
      {
        id: "grat-2019", nickname: "Gratisfaction", country: "NZ", role: "awp", teamId: "renegades-2019", teamName: "Renegades",
        attributes: { aim: 90, imp: 90, clu: 88, con: 88, gs: 87, uti: 82, mov: 84 }
      },
      {
        id: "jkaem-2019", nickname: "jkaem", country: "NO", role: "entry", teamId: "renegades-2019", teamName: "Renegades",
        attributes: { aim: 93, imp: 95, clu: 87, con: 88, gs: 89, uti: 91, mov: 94 }
      }
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
    tags: ["NA", "2019", "US"],
    roster: [
      {
        id: "stanislaw-2019", nickname: "stanislaw", country: "CA", role: "igl", teamId: "nrg-2019", teamName: "NRG Esports",
        attributes: { aim: 83, imp: 85, clu: 87, con: 89, gs: 94, uti: 93, mov: 85 }
      },
      {
        id: "tarik-2019", nickname: "tarik", country: "US", role: "entry", teamId: "nrg-2019", teamName: "NRG Esports",
        attributes: { aim: 93, imp: 95, clu: 87, con: 88, gs: 89, uti: 91, mov: 94 }
      },
      {
        id: "brehze-2019", nickname: "Brehze", country: "US", role: "rifler", teamId: "nrg-2019", teamName: "NRG Esports",
        attributes: { aim: 97, imp: 96, clu: 94, con: 96, gs: 94, uti: 90, mov: 91 }
      },
      {
        id: "ethan-2019", nickname: "Ethan", country: "US", role: "support", teamId: "nrg-2019", teamName: "NRG Esports",
        attributes: { aim: 86, imp: 86, clu: 91, con: 92, gs: 92, uti: 96, mov: 87 }
      },
      {
        id: "cerq-2019", nickname: "CeRq", country: "BG", role: "awp", teamId: "nrg-2019", teamName: "NRG Esports",
        attributes: { aim: 96, imp: 96, clu: 94, con: 94, gs: 93, uti: 88, mov: 90 }
      }
    ]
  },

  // 20. ENCE (2019)
  {
    id: "ence-2019",
    name: "ENCE",
    shortName: "ENCE",
    year: 2019,
    logoText: "ENCE",
    accentColor: "#85144b",
    tags: ["EU", "2019", "FI"],
    roster: [
      {
        id: "aleksib-2019", nickname: "Aleksib", country: "FI", role: "igl", teamId: "ence-2019", teamName: "ENCE",
        attributes: { aim: 86, imp: 88, clu: 90, con: 92, gs: 97, uti: 96, mov: 88 }
      },
      {
        id: "allu-2019", nickname: "allu", country: "FI", role: "awp", teamId: "ence-2019", teamName: "ENCE",
        attributes: { aim: 95, imp: 95, clu: 93, con: 93, gs: 92, uti: 87, mov: 89 }
      },
      {
        id: "sergej-2019", nickname: "sergej", country: "FI", role: "rifler", teamId: "ence-2019", teamName: "ENCE",
        attributes: { aim: 96, imp: 95, clu: 93, con: 95, gs: 93, uti: 89, mov: 90 }
      },
      {
        id: "aerial-2019", nickname: "Aerial", country: "FI", role: "entry", teamId: "ence-2019", teamName: "ENCE",
        attributes: { aim: 91, imp: 93, clu: 85, con: 86, gs: 87, uti: 89, mov: 92 }
      },
      {
        id: "xseven-2019", nickname: "xseveN", country: "FI", role: "support", teamId: "ence-2019", teamName: "ENCE",
        attributes: { aim: 82, imp: 82, clu: 87, con: 88, gs: 88, uti: 92, mov: 83 }
      }
    ]
  },

  // ==========================================
  //  ANO 2020 (1 time)
  // ==========================================

  // 21. Complexity Gaming (2020)
  {
    id: "col-2020",
    name: "Complexity Gaming",
    shortName: "COL",
    year: 2020,
    logoText: "COL",
    accentColor: "#002B49",
    tags: ["EU", "2020", "US"],
    roster: [
      {
        id: "blamef-2020", nickname: "blameF", country: "DK", role: "igl", teamId: "col-2020", teamName: "Complexity Gaming",
        attributes: { aim: 89, imp: 91, clu: 93, con: 95, gs: 99, uti: 99, mov: 91 }
      },
      {
        id: "k0nfig-2020", nickname: "k0nfig", country: "DK", role: "entry", teamId: "col-2020", teamName: "Complexity Gaming",
        attributes: { aim: 94, imp: 96, clu: 88, con: 89, gs: 90, uti: 92, mov: 95 }
      },
      {
        id: "poizon-2020", nickname: "poizon", country: "BG", role: "awp", teamId: "col-2020", teamName: "Complexity Gaming",
        attributes: { aim: 92, imp: 92, clu: 90, con: 90, gs: 89, uti: 84, mov: 86 }
      },
      {
        id: "jks-2020", nickname: "jks", country: "AU", role: "lurker", teamId: "col-2020", teamName: "Complexity Gaming",
        attributes: { aim: 92, imp: 92, clu: 95, con: 93, gs: 94, uti: 85, mov: 86 }
      },
      {
        id: "rush-2020", nickname: "RUSH", country: "US", role: "support", teamId: "col-2020", teamName: "Complexity Gaming",
        attributes: { aim: 81, imp: 81, clu: 86, con: 87, gs: 87, uti: 91, mov: 82 }
      }
    ]
  },

  // ==========================================
  //  ANO 2021 (1 time)
  // ==========================================

  // 22. Natus Vincere (2021)
  {
    id: "navi-2021",
    name: "Natus Vincere",
    shortName: "NAVI",
    year: 2021,
    logoText: "NAVI",
    accentColor: "#FACC15",
    tags: ["CIS", "2021", "UA"],
    roster: [
      {
        id: "s1mple-2021", nickname: "s1mple", country: "UA", role: "awp", teamId: "navi-2021", teamName: "Natus Vincere",
        attributes: { aim: 99, imp: 99, clu: 99, con: 99, gs: 99, uti: 94, mov: 96 }
      },
      {
        id: "electronic-2021", nickname: "electronic", country: "RU", role: "rifler", teamId: "navi-2021", teamName: "Natus Vincere",
        attributes: { aim: 97, imp: 96, clu: 94, con: 96, gs: 94, uti: 90, mov: 91 }
      },
      {
        id: "b1t-2021", nickname: "b1t", country: "UA", role: "entry", teamId: "navi-2021", teamName: "Natus Vincere",
        attributes: { aim: 93, imp: 95, clu: 87, con: 88, gs: 89, uti: 91, mov: 94 }
      },
      {
        id: "boombl4-2021", nickname: "Boombl4", country: "RU", role: "igl", teamId: "navi-2021", teamName: "Natus Vincere",
        attributes: { aim: 81, imp: 83, clu: 85, con: 87, gs: 92, uti: 91, mov: 83 }
      },
      {
        id: "perfecto-2021", nickname: "Perfecto", country: "RU", role: "support", teamId: "navi-2021", teamName: "Natus Vincere",
        attributes: { aim: 84, imp: 84, clu: 89, con: 90, gs: 90, uti: 94, mov: 85 }
      }
    ]
  },

  // ==========================================
  //  ANO 2022 (4 times)
  // ==========================================

  // 23. FaZe Clan (2022)
  {
    id: "faze-2022",
    name: "FaZe Clan",
    shortName: "FaZe",
    year: 2022,
    logoText: "FAZE",
    accentColor: "#E11D48",
    tags: ["EU", "2022", "INT"],
    roster: [
      {
        id: "karrigan-2022", nickname: "karrigan", country: "DK", role: "igl", teamId: "faze-2022", teamName: "FaZe Clan",
        attributes: { aim: 86, imp: 88, clu: 90, con: 92, gs: 97, uti: 96, mov: 88 }
      },
      {
        id: "rain-2022", nickname: "rain", country: "NO", role: "entry", teamId: "faze-2022", teamName: "FaZe Clan",
        attributes: { aim: 95, imp: 97, clu: 89, con: 90, gs: 91, uti: 93, mov: 96 }
      },
      {
        id: "broky-2022", nickname: "broky", country: "LV", role: "awp", teamId: "faze-2022", teamName: "FaZe Clan",
        attributes: { aim: 97, imp: 97, clu: 95, con: 95, gs: 94, uti: 89, mov: 91 }
      },
      {
        id: "twistzz-2022", nickname: "Twistzz", country: "CA", role: "rifler", teamId: "faze-2022", teamName: "FaZe Clan",
        attributes: { aim: 98, imp: 97, clu: 95, con: 97, gs: 95, uti: 91, mov: 92 }
      },
      {
        id: "ropz-2022", nickname: "ropz", country: "EE", role: "lurker", teamId: "faze-2022", teamName: "FaZe Clan",
        attributes: { aim: 97, imp: 97, clu: 99, con: 98, gs: 99, uti: 90, mov: 91 }
      }
    ]
  },

  // 24. Heroic (2022)
  {
    id: "heroic-2022",
    name: "Heroic",
    shortName: "HER",
    year: 2022,
    logoText: "HER",
    accentColor: "#EF4444",
    tags: ["EU", "2022", "DK"],
    roster: [
      {
        id: "cadiaN-2022", nickname: "cadiaN", country: "DK", role: "igl", teamId: "heroic-2022", teamName: "Heroic",
        attributes: { aim: 87, imp: 89, clu: 91, con: 93, gs: 98, uti: 97, mov: 89 }
      },
      {
        id: "stavn-2022", nickname: "stavn", country: "DK", role: "rifler", teamId: "heroic-2022", teamName: "Heroic",
        attributes: { aim: 98, imp: 97, clu: 95, con: 97, gs: 95, uti: 91, mov: 92 }
      },
      {
        id: "teses-2022", nickname: "TeSeS", country: "DK", role: "entry", teamId: "heroic-2022", teamName: "Heroic",
        attributes: { aim: 91, imp: 93, clu: 85, con: 86, gs: 87, uti: 89, mov: 92 }
      },
      {
        id: "sjuush-2022", nickname: "sjuush", country: "DK", role: "support", teamId: "heroic-2022", teamName: "Heroic",
        attributes: { aim: 86, imp: 86, clu: 91, con: 92, gs: 92, uti: 96, mov: 87 }
      },
      {
        id: "jabbi-2022", nickname: "jabbi", country: "DK", role: "lurker", teamId: "heroic-2022", teamName: "Heroic",
        attributes: { aim: 92, imp: 92, clu: 95, con: 93, gs: 94, uti: 85, mov: 86 }
      }
    ]
  },

  // 25. Outsiders (2022)
  {
    id: "outsiders-2022",
    name: "Outsiders",
    shortName: "OUT",
    year: 2022,
    logoText: "OUT",
    accentColor: "#F97316",
    tags: ["CIS", "2022", "RU"],
    roster: [
      {
        id: "jame-2022", nickname: "Jame", country: "RU", role: "igl", teamId: "outsiders-2022", teamName: "Outsiders",
        attributes: { aim: 90, imp: 92, clu: 94, con: 96, gs: 99, uti: 99, mov: 92 }
      },
      {
        id: "fl1t-2022", nickname: "FL1T", country: "RU", role: "rifler", teamId: "outsiders-2022", teamName: "Outsiders",
        attributes: { aim: 96, imp: 95, clu: 93, con: 95, gs: 93, uti: 89, mov: 90 }
      },
      {
        id: "fame-2022", nickname: "fame", country: "RU", role: "entry", teamId: "outsiders-2022", teamName: "Outsiders",
        attributes: { aim: 93, imp: 95, clu: 87, con: 88, gs: 89, uti: 91, mov: 94 }
      },
      {
        id: "qikert-2022", nickname: "Qikert", country: "KZ", role: "support", teamId: "outsiders-2022", teamName: "Outsiders",
        attributes: { aim: 83, imp: 83, clu: 88, con: 89, gs: 89, uti: 93, mov: 84 }
      },
      {
        id: "n0rb3r7-2022", nickname: "n0rb3r7", country: "RU", role: "lurker", teamId: "outsiders-2022", teamName: "Outsiders",
        attributes: { aim: 89, imp: 89, clu: 92, con: 90, gs: 91, uti: 82, mov: 83 }
      }
    ]
  },

  // 26. Imperial Esports (2022)
  {
    id: "imperial-2022",
    name: "Imperial Esports",
    shortName: "IMP",
    year: 2022,
    logoText: "IMP",
    accentColor: "#10B981",
    tags: ["SA", "2022", "BR"],
    roster: [
      {
        id: "fallen-2022", nickname: "FalleN", country: "BR", role: "igl", teamId: "imperial-2022", teamName: "Imperial Esports",
        attributes: { aim: 86, imp: 88, clu: 90, con: 92, gs: 97, uti: 96, mov: 88 }
      },
      {
        id: "fer-2022", nickname: "fer", country: "BR", role: "entry", teamId: "imperial-2022", teamName: "Imperial Esports",
        attributes: { aim: 95, imp: 97, clu: 89, con: 90, gs: 91, uti: 93, mov: 96 }
      },
      {
        id: "fnx-2022", nickname: "fnx", country: "BR", role: "support", teamId: "imperial-2022", teamName: "Imperial Esports",
        attributes: { aim: 80, imp: 80, clu: 85, con: 86, gs: 86, uti: 90, mov: 81 }
      },
      {
        id: "boltz-2022", nickname: "boltz", country: "BR", role: "rifler", teamId: "imperial-2022", teamName: "Imperial Esports",
        attributes: { aim: 91, imp: 90, clu: 88, con: 90, gs: 88, uti: 84, mov: 85 }
      },
      {
        id: "vini-2022", nickname: "VINI", country: "BR", role: "lurker", teamId: "imperial-2022", teamName: "Imperial Esports",
        attributes: { aim: 90, imp: 90, clu: 93, con: 91, gs: 92, uti: 83, mov: 84 }
      }
    ]
  },

  // ==========================================
  //  ANO 2023 (3 times)
  // ==========================================

  // 27. Team Vitality (2023)
  {
    id: "vitality-2023",
    name: "Team Vitality",
    shortName: "VIT",
    year: 2023,
    logoText: "VIT",
    accentColor: "#FACC15",
    tags: ["EU", "2023", "FR"],
    roster: [
      {
        id: "zywoo-2023", nickname: "ZywOo", country: "FR", role: "awp", teamId: "vitality-2023", teamName: "Team Vitality",
        attributes: { aim: 99, imp: 99, clu: 99, con: 99, gs: 99, uti: 94, mov: 96 }
      },
      {
        id: "apex-2023", nickname: "apEX", country: "FR", role: "igl", teamId: "vitality-2023", teamName: "Team Vitality",
        attributes: { aim: 84, imp: 86, clu: 88, con: 90, gs: 95, uti: 94, mov: 86 }
      },
      {
        id: "spinx-2023", nickname: "Spinx", country: "IL", role: "lurker", teamId: "vitality-2023", teamName: "Team Vitality",
        attributes: { aim: 94, imp: 94, clu: 97, con: 95, gs: 96, uti: 87, mov: 88 }
      },
      {
        id: "magisk-2023", nickname: "Magisk", country: "DK", role: "rifler", teamId: "vitality-2023", teamName: "Team Vitality",
        attributes: { aim: 95, imp: 94, clu: 92, con: 94, gs: 92, uti: 88, mov: 89 }
      },
      {
        id: "dupreeh-2023", nickname: "dupreeh", country: "DK", role: "entry", teamId: "vitality-2023", teamName: "Team Vitality",
        attributes: { aim: 92, imp: 94, clu: 86, con: 87, gs: 88, uti: 90, mov: 93 }
      }
    ]
  },

  // 28. G2 Esports (2023)
  {
    id: "g2-2023",
    name: "G2 Esports",
    shortName: "G2",
    year: 2023,
    logoText: "G2",
    accentColor: "#EF4444",
    tags: ["EU", "2023", "INT"],
    roster: [
      {
        id: "hoxxi-2023", nickname: "HooXi", country: "DK", role: "igl", teamId: "g2-2023", teamName: "G2 Esports",
        attributes: { aim: 81, imp: 83, clu: 85, con: 87, gs: 92, uti: 91, mov: 83 }
      },
      {
        id: "niko-2023", nickname: "NiKo", country: "BA", role: "entry", teamId: "g2-2023", teamName: "G2 Esports",
        attributes: { aim: 99, imp: 99, clu: 93, con: 94, gs: 95, uti: 97, mov: 99 }
      },
      {
        id: "m0nesy-2023", nickname: "m0NESY", country: "RU", role: "awp", teamId: "g2-2023", teamName: "G2 Esports",
        attributes: { aim: 99, imp: 99, clu: 97, con: 97, gs: 96, uti: 91, mov: 93 }
      },
      {
        id: "hunter-2023", nickname: "huNter-", country: "BA", role: "rifler", teamId: "g2-2023", teamName: "G2 Esports",
        attributes: { aim: 95, imp: 94, clu: 92, con: 94, gs: 92, uti: 88, mov: 89 }
      },
      {
        id: "jks-2023", nickname: "jks", country: "AU", role: "support", teamId: "g2-2023", teamName: "G2 Esports",
        attributes: { aim: 85, imp: 85, clu: 90, con: 91, gs: 91, uti: 95, mov: 86 }
      }
    ]
  },

  // 29. ENCE (2023)
  {
    id: "ence-2023",
    name: "ENCE",
    shortName: "ENCE",
    year: 2023,
    logoText: "ENCE",
    accentColor: "#85144b",
    tags: ["EU", "2023", "FI"],
    roster: [
      {
        id: "snappi-2023", nickname: "Snappi", country: "DK", role: "igl", teamId: "ence-2023", teamName: "ENCE",
        attributes: { aim: 84, imp: 86, clu: 88, con: 90, gs: 95, uti: 94, mov: 86 }
      },
      {
        id: "sunpayus-2023", nickname: "SunPayus", country: "ES", role: "awp", teamId: "ence-2023", teamName: "ENCE",
        attributes: { aim: 97, imp: 97, clu: 95, con: 95, gs: 94, uti: 89, mov: 91 }
      },
      {
        id: "dycha-2023", nickname: "dycha", country: "PL", role: "rifler", teamId: "ence-2023", teamName: "ENCE",
        attributes: { aim: 93, imp: 92, clu: 90, con: 92, gs: 90, uti: 86, mov: 87 }
      },
      {
        id: "maden-2023", nickname: "Maden", country: "ME", role: "entry", teamId: "ence-2023", teamName: "ENCE",
        attributes: { aim: 91, imp: 93, clu: 85, con: 86, gs: 87, uti: 89, mov: 92 }
      },
      {
        id: "nertZ-2023", nickname: "NertZ", country: "IL", role: "lurker", teamId: "ence-2023", teamName: "ENCE",
        attributes: { aim: 94, imp: 94, clu: 97, con: 95, gs: 96, uti: 87, mov: 88 }
      }
    ]
  },

  // ==========================================
  //  ANO 2024 (3 times)
  // ==========================================

  // 30. Natus Vincere (2024)
  {
    id: "navi-2024",
    name: "Natus Vincere",
    shortName: "NAVI",
    year: 2024,
    logoText: "NAVI",
    accentColor: "#FACC15",
    tags: ["EU", "2024", "UA"],
    roster: [
      {
        id: "aleksib-2024", nickname: "Aleksib", country: "FI", role: "igl", teamId: "navi-2024", teamName: "Natus Vincere",
        attributes: { aim: 85, imp: 87, clu: 89, con: 91, gs: 96, uti: 95, mov: 87 }
      },
      {
        id: "jl-2024", nickname: "jL", country: "LT", role: "entry", teamId: "navi-2024", teamName: "Natus Vincere",
        attributes: { aim: 97, imp: 99, clu: 91, con: 92, gs: 93, uti: 95, mov: 98 }
      },
      {
        id: "w0nderful-2024", nickname: "w0nderful", country: "UA", role: "awp", teamId: "navi-2024", teamName: "Natus Vincere",
        attributes: { aim: 95, imp: 95, clu: 93, con: 93, gs: 92, uti: 87, mov: 89 }
      },
      {
        id: "im-2024", nickname: "iM", country: "RO", role: "rifler", teamId: "navi-2024", teamName: "Natus Vincere",
        attributes: { aim: 93, imp: 92, clu: 90, con: 92, gs: 90, uti: 86, mov: 87 }
      },
      {
        id: "b1t-2024", nickname: "b1t", country: "UA", role: "lurker", teamId: "navi-2024", teamName: "Natus Vincere",
        attributes: { aim: 94, imp: 94, clu: 97, con: 95, gs: 96, uti: 87, mov: 88 }
      }
    ]
  },

  // 31. Team Spirit (2024)
  {
    id: "spirit-2024",
    name: "Team Spirit",
    shortName: "Spirit",
    year: 2024,
    logoText: "TS",
    accentColor: "#10B981",
    tags: ["CIS", "2024", "RU"],
    roster: [
      {
        id: "chopper-2024", nickname: "chopper", country: "RU", role: "igl", teamId: "spirit-2024", teamName: "Team Spirit",
        attributes: { aim: 83, imp: 85, clu: 87, con: 89, gs: 94, uti: 93, mov: 85 }
      },
      {
        id: "donk-2024", nickname: "donk", country: "RU", role: "entry", teamId: "spirit-2024", teamName: "Team Spirit",
        attributes: { aim: 99, imp: 99, clu: 94, con: 95, gs: 96, uti: 98, mov: 99 }
      },
      {
        id: "sh1ro-2024", nickname: "sh1ro", country: "RU", role: "awp", teamId: "spirit-2024", teamName: "Team Spirit",
        attributes: { aim: 99, imp: 99, clu: 97, con: 97, gs: 96, uti: 91, mov: 93 }
      },
      {
        id: "magixx-2024", nickname: "magixx", country: "RU", role: "support", teamId: "spirit-2024", teamName: "Team Spirit",
        attributes: { aim: 83, imp: 83, clu: 88, con: 89, gs: 89, uti: 93, mov: 84 }
      },
      {
        id: "zont1x-2024", nickname: "zont1x", country: "UA", role: "lurker", teamId: "spirit-2024", teamName: "Team Spirit",
        attributes: { aim: 90, imp: 90, clu: 93, con: 91, gs: 92, uti: 83, mov: 84 }
      }
    ]
  },

  // 32. The MongolZ (2024)
  {
    id: "mongolz-2024",
    name: "The MongolZ",
    shortName: "MGLZ",
    year: 2024,
    logoText: "MGLZ",
    accentColor: "#B45309",
    tags: ["ASIA", "2024", "MN"],
    roster: [
      {
        id: "bzking-2024", nickname: "bzking", country: "MN", role: "igl", teamId: "mongolz-2024", teamName: "The MongolZ",
        attributes: { aim: 84, imp: 86, clu: 88, con: 90, gs: 95, uti: 94, mov: 86 }
      },
      {
        id: "senzu-2024", nickname: "Senzu", country: "MN", role: "rifler", teamId: "mongolz-2024", teamName: "The MongolZ",
        attributes: { aim: 96, imp: 95, clu: 93, con: 95, gs: 93, uti: 89, mov: 90 }
      },
      {
        id: "mzinho-2024", nickname: "mzinho", country: "MN", role: "entry", teamId: "mongolz-2024", teamName: "The MongolZ",
        attributes: { aim: 93, imp: 95, clu: 87, con: 88, gs: 89, uti: 91, mov: 94 }
      },
      {
        id: "910-2024", nickname: "910", country: "MN", role: "awp", teamId: "mongolz-2024", teamName: "The MongolZ",
        attributes: { aim: 94, imp: 94, clu: 92, con: 92, gs: 91, uti: 86, mov: 88 }
      },
      {
        id: "techno4k-2024", nickname: "Techno4K", country: "MN", role: "support", teamId: "mongolz-2024", teamName: "The MongolZ",
        attributes: { aim: 84, imp: 84, clu: 89, con: 90, gs: 90, uti: 94, mov: 85 }
      }
    ]
  }
];

export const CS_DATABASE: HistoricalTeam[] = RAW_CS_DATABASE.map(team => ({
  ...team,
  roster: team.roster.map(player => ({
    ...player,
    ovr: computePlayerOvr(player.attributes)
  }))
}));

export const ALL_DATABASE_PLAYERS: Player[] = CS_DATABASE.flatMap(t => t.roster);
