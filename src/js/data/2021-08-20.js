dataSetVersion = "2021-08-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Expansion",
    key: "expansion",
    tooltip: "Check this to restrict to specific expansions.",
    checked: true,
    sub: [
      { name: "Core", key: "C" },
      { name: "Dark City", key: "DC" },
      { name: "Fantastic Four", key: "F4" },
	  { name: "Paint the Town Red", key: "PTTR" },
	  { name: "Villains", key: "V" },
	  { name: "Guardians of the Galaxy", key: "GG" },
	  { name: "Fear Itself", key: "FI" },
	  { name: "Secret Wars, Volume 1", key: "SW1" },
	  { name: "Secret Wars, Volume 2", key: "SW2" },
	  { name: "Captain America 75th", key: "CA" },
	  { name: "Civil War", key: "CW" },
	  { name: "Deadpool", key: "DP" },
	  { name: "Noir", key: "NOIR" },
	  { name: "X-Men", key: "XM" },
	  { name: "Spider-Man Homecoming", key: "SMH" },
	  { name: "Champions", key: "CHP" },
	  { name: "World War Hulk", key: "WWH" },
	  { name: "Ant-Man", key: "AM" },
	  { name: "Venom", key: "VN" },
	  { name: "Dimensions", key: "DM" },
	  { name: "Revelations", key: "RV" },
	  { name: "S.H.I.E.L.D.", key: "S" },
	  { name: "Heroes of Asgard", key: "HOA" },
	  { name: "The New Mutants", key: "NM" },
	  { name: "Into the Cosmos", key: "ITC" },
	  { name: "Realm of Kings", key: "ROK" }
    ]
  },
    {
    name: "Filter by Team",
    key: "team",
    tooltip: "Check this to restrict to characters with a specific team affiliation.",
    checked: true,
    sub: [ { name: "Avengers", key: "AV" , checked:false}, { name: "Brotherhood", key: "BH" , checked:false}, { name: "Cabal", key: "CB" , checked:false}, { name: "Champions", key: "CH" , checked:false}, { name: "Crime Syndicate", key: "CS" , checked:false}, { name: "Fantastic Four", key: "F4" , checked:false}, { name: "Foes of Asgard", key: "FA" , checked:false}, { name: "Guardians of the Galaxy", key: "GG" , checked:false}, { name: "Heroes of Asgard", key: "HA" , checked:false}, { name: "HYDRA", key: "HY" , checked:false}, { name: "Illuminati", key: "IL" , checked:false}, { name: "Inhumans", key: "IH" , checked:false}, { name: "Marvel Knights", key: "MK" , checked:false}, { name: "Mercs for Money", key: "MM" , checked:false}, { name: "New Warriors", key: "NW" , checked:false}, { name: "S.H.I.E.L.D.", key: "SH" , checked:false}, { name: "Sinister Six", key: "S6" , checked:false}, { name: "Spider Friends", key: "SF" , checked:false}, { name: "Unaffiliated", key: "UA" , checked:false}, { name: "Venomverse", key: "VV" , checked:false}, { name: "Warbound", key: "WB" , checked:false}, { name: "X-Force", key: "XF" , checked:false}, { name: "X-Men", key: "XM" , checked:false}
    ]
  }
  ];

dataSet[dataSetVersion].characterData = [
  {
    name: "Black Widow",
    img: "https://i.imgur.com/nWxbsmZ.png",
    opts: {
      expansion: ["C"],
	  team: ["AV"]
    }
  },
   {
    name: "Captain America",
    img: "https://i.imgur.com/imfF8UP.png",
    opts: {
      expansion: ["C"],
	  team: ["AV"]
    }
  },
   {
    name: "Cyclops",
    img: "https://i.imgur.com/2JDUdWk.png",
    opts: {
      expansion: ["C"],
	  team: ["XM"]
    }
  },
   {
    name: "Deadpool (Unaffiliated)",
    img: "https://i.imgur.com/Wuf9S5S.png",
    opts: {
      expansion: ["C"],
	  team: ["UA"]
    }
  },
   {
    name: "Emma Frost",
    img: "https://i.imgur.com/fPU1i4x.png",
    opts: {
      expansion: ["C"],
	  team: ["XM"]
    }
  },
   {
    name: "Gambit",
    img: "https://i.imgur.com/NH8JPhZ.png",
    opts: {
      expansion: ["C"],
	  team: ["XM"]
    }
  },
   {
    name: "Hawkeye",
    img: "https://i.imgur.com/FRHHoCM.png",
    opts: {
      expansion: ["C"],
	  team: ["AV"]
    }
  },
   {
    name: "Hulk",
    img: "https://i.imgur.com/v63ipHt.png",
    opts: {
      expansion: ["C"],
	  team: ["AV"]
    }
  },
   {
    name: "Iron Man",
    img: "https://i.imgur.com/jTztaoK.png",
    opts: {
      expansion: ["C"],
	  team: ["AV"]
    }
  },
   {
    name: "Nick Fury",
    img: "https://i.imgur.com/YTdd0sE.png",
    opts: {
      expansion: ["C"],
	  team: ["SH"]
    }
  },
   {
    name: "Rogue",
    img: "https://i.imgur.com/XD53Bhs.png",
    opts: {
      expansion: ["C"],
	  team: ["XM"]
    }
  },
   {
    name: "Spider-Man",
    img: "https://i.imgur.com/DpIkr8J.png",
    opts: {
      expansion: ["C"],
	  team: ["SF"]
    }
  },
   {
    name: "Storm",
    img: "https://i.imgur.com/S1kk7zc.png",
    opts: {
      expansion: ["C"],
	  team: ["XM"]
    }
  },
   {
    name: "Thor (Avengers)",
    img: "https://i.imgur.com/kt92IQv.png",
    opts: {
      expansion: ["C"],
	  team: ["AV"]
    }
  },
   {
    name: "Wolverine (X-Men)",
    img: "https://i.imgur.com/yVdft9k.png",
    opts: {
      expansion: ["C"],
	  team: ["XM"]
    }
  },
   {
    name: "Angel",
    img: "https://i.imgur.com/Rmz6Mxg.png",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]
    }
  },
   {
    name: "Bishop",
    img: "https://i.imgur.com/Uy3xT0g.png",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]
    }
  },
   {
    name: "Blade",
    img: "https://i.imgur.com/X5rFSCj.png",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]
    }
  },
   {
    name: "Cable",
    img: "https://i.imgur.com/w0ra0ln.png",
    opts: {
      expansion: ["DC"],
	  team: ["XF"]
    }
  },
   {
    name: "Colossus",
    img: "https://i.imgur.com/nBS9UJo.png",
    opts: {
      expansion: ["DC"],
	  team: ["XF"]
    }
  },
   {
    name: "Daredevil (Marvel Knights)",
    img: "https://i.imgur.com/eRZQO95.png",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]
    }
  },
   {
    name: "Domino",
    img: "https://i.imgur.com/RIX1vbo.png",
    opts: {
      expansion: ["DC"],
	  team: ["XF"]
    }
  },
   {
    name: "Elektra",
    img: "https://i.imgur.com/oG6D0gA.png",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]
    }
  },
   {
    name: "Forge",
    img: "https://i.imgur.com/lpqJvQA.png",
    opts: {
      expansion: ["DC"],
	  team: ["XF"]
    }
  },
   {
    name: "Ghost Rider",
    img: "https://i.imgur.com/r1fQARX.png",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]
    }
  },
   {
    name: "Iceman",
    img: "https://i.imgur.com/DZ1BlYi.png",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]
    }
  },
   {
    name: "Iron Fist",
    img: "https://i.imgur.com/L4qmz51.png",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]
    }
  },
   {
    name: "Jean Grey",
    img: "https://i.imgur.com/6G3ZxJt.pngg",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]
    }
  },
   {
    name: "Nightcrawler",
    img: "https://i.imgur.com/XthtqQW.png",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]
    }
  },
   {
    name: "Professor X",
    img: "https://i.imgur.com/7ZWMjO8.png",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]
    }
  },
   {
    name: "Punisher",
    img: "https://i.imgur.com/dhSHHWs.png",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]
    }
  },
   {
    name: "Wolverine (X-Force)",
    img: "https://i.imgur.com/rCNLnrt.png",
    opts: {
      expansion: ["DC"],
	  team: ["XF"]
    }
  },
   {
    name: "Mr. Fantastic",
    img: "https://i.imgur.com/pIApunW.png",
    opts: {
      expansion: ["F4"],
	  team: ["F4"]
    }
  },
   {
    name: "Invisible Woman",
    img: "https://i.imgur.com/0c1zBBj.png",
    opts: {
      expansion: ["F4"],
	  team: ["F4"]
    }
  },
   {
    name: "Human Torch",
    img: "https://i.imgur.com/45Yxwma.png",
    opts: {
      expansion: ["F4"],
	  team: ["F4"]
    }
  },
   {
    name: "Thing",
    img: "https://i.imgur.com/0zY5ibZ.png",
    opts: {
      expansion: ["F4"],
	  team: ["F4"]
    }
  },
   {
    name: "Silver Surfer",
    img: "https://i.imgur.com/fgWKCfc.png",
    opts: {
      expansion: ["F4"],
	  team: ["UA"]
    }
  },
   {
    name: "Black Cat",
    img: "https://i.imgur.com/Dzv2dul.png",
    opts: {
      expansion: ["PTTR"],
	  team: ["SF"]
    }
  },
   {
    name: "Moon Knight",
    img: "https://i.imgur.com/4F2ByVS.png",
    opts: {
      expansion: ["PTTR"],
	  team: ["MK"]
    }
  },
   {
    name: "Scarlet Spider",
    img: "https://i.imgur.com/zoCYScJ.png",
    opts: {
      expansion: ["PTTR"],
	  team: ["SF"]
    }
  },
   {
    name: "Spider-Woman",
    img: "https://i.imgur.com/Dzv2dul.png",
    opts: {
      expansion: ["PTTR"],
	  team: ["SF"]
    }
  },
   {
    name: "Symbiote Spider-Man",
    img: "https://i.imgur.com/Z4Diynv.png",
    opts: {
      expansion: ["PTTR"],
	  team: ["SF"]
    }
  },
   {
    name: "Bullseye",
    img: "https://i.imgur.com/23X9Zsz.png",
    opts: {
      expansion: ["V"],
	  team: ["CS"]
    }
  },
   {
    name: "Dr. Octopus",
    img: "https://i.imgur.com/iW3sNNB.png",
    opts: {
      expansion: ["V"],
	  team: ["S6"]
    }
  },
   {
    name: "Electro",
    img: "https://i.imgur.com/XO4fkYj.png",
    opts: {
      expansion: ["V"],
	  team: ["S6"]
    }
  },
   {
    name: "Enchantress",
    img: "https://i.imgur.com/NyFJzNL.png",
    opts: {
      expansion: ["V"],
	  team: ["FA"]
    }
  },
   {
    name: "Green Goblin",
    img: "https://i.imgur.com/9EGNhaC.png",
    opts: {
      expansion: ["V"],
	  team: ["S6"]
    }
  },
   {
    name: "Juggernaut",
    img: "https://i.imgur.com/xc140p1.png",
    opts: {
      expansion: ["V"],
	  team: ["BH"]
    }
  },
   {
    name: "Kingpin",
    img: "https://i.imgur.com/j4Yzuon.png",
    opts: {
      expansion: ["V"],
	  team: ["CS"]
    }
  },
   {
    name: "Kraven",
    img: "https://i.imgur.com/SvxYtdw.png",
    opts: {
      expansion: ["V"],
	  team: ["S6"]
    }
  },
   {
    name: "Loki",
    img: "https://i.imgur.com/gaJGSWb.png",
    opts: {
      expansion: ["V"],
	  team: ["FA"]
    }
  },
   {
    name: "Magneto",
    img: "https://i.imgur.com/6x8421V.png",
    opts: {
      expansion: ["V"],
	  team: ["BH"]
    }
  },
   {
    name: "Mysterio",
    img: "https://i.imgur.com/g4L98FQ.png",
    opts: {
      expansion: ["V"],
	  team: ["S6"]
    }
  },
   {
    name: "Mystique",
    img: "https://i.imgur.com/IxrkcHD.png",
    opts: {
      expansion: ["V"],
	  team: ["BH"]
    }
  },
   {
    name: "Sabretooth",
    img: "https://i.imgur.com/9Xbfr3k.png",
    opts: {
      expansion: ["V"],
	  team: ["BH"]
    }
  },
   {
    name: "Ultron",
    img: "https://i.imgur.com/s2AUnUk.png",
    opts: {
      expansion: ["V"],
	  team: ["UA"]
    }
  },
   {
    name: "Venom (Sinister Six)",
    img: "https://i.imgur.com/SfPUubm.png",
    opts: {
      expansion: ["V"],
	  team: ["S6"]
    }
  },
   {
    name: "Star-Lord",
    img: "https://i.imgur.com/XtWJlmD.png",
    opts: {
      expansion: ["GG"],
	  team: ["GG"]
    }
  },
   {
    name: "Gamora",
    img: "https://i.imgur.com/PpqFlND.png",
    opts: {
      expansion: ["GG"],
	  team: ["GG"]
    }
  },
   {
    name: "Drax",
    img: "https://i.imgur.com/bhyMdC6.png",
    opts: {
      expansion: ["GG"],
	  team: ["GG"]
    }
  },
   {
    name: "Rocket Raccoon",
    img: "https://i.imgur.com/a0wTENt.png",
    opts: {
      expansion: ["GG"],
	  team: ["GG"]
    }
  },
   {
    name: "Groot",
    img: "https://i.imgur.com/ct5xH2V.png",
    opts: {
      expansion: ["GG"],
	  team: ["GG"]
    }
  },
   {
    name: "Greithoth, Breaker of Wills",
    img: "https://i.imgur.com/PqRcXK7.png",
    opts: {
      expansion: ["FI"],
	  team: ["FA"]
    }
  },
   {
    name: "Kuurth, Breaker of Stone",
    img: "https://i.imgur.com/wfj36Jf.png",
    opts: {
      expansion: ["FI"],
	  team: ["FA"]
    }
  },
   {
    name: "Nerkkod, Breaker of Oceans",
    img: "https://i.imgur.com/HHpqmMg.png",
    opts: {
      expansion: ["FI"],
	  team: ["FA"]
    }
  },
   {
    name: "Nul, Breaker of Worlds",
    img: "https://i.imgur.com/NnRS5fG.png",
    opts: {
      expansion: ["FI"],
	  team: ["FA"]
    }
  },
   {
    name: "Skirn, Breaker of Men",
    img: "https://i.imgur.com/9WlmJCL.png",
    opts: {
      expansion: ["FI"],
	  team: ["FA"]
    }
  },
   {
    name: "Skadi",
    img: "https://i.imgur.com/rjnimK9.png",
    opts: {
      expansion: ["FI"],
	  team: ["HY"]
    }
  },
   {
    name: "Apocalyptic Kitty Pryde",
    img: "https://i.imgur.com/Ee2yzDJ.png",
    opts: {
      expansion: ["SW1"],
	  team: ["XM"]
    }
  },
   {
    name: "Black Bolt (Illuminati)",
    img: "https://i.imgur.com/Hxfz72s.png",
    opts: {
      expansion: ["SW1"],
	  team: ["IL"]
    }
  },
   {
    name: "Black Panther",
    img: "https://i.imgur.com/cvvgCoK.png",
    opts: {
      expansion: ["SW1"],
	  team: ["IL"]
    }
  },
   {
    name: "Captain Marvel",
    img: "https://i.imgur.com/nT00WZp.png",
    opts: {
      expansion: ["SW1"],
	  team: ["AV"]
    }
  },
   {
    name: "Dr. Strange",
    img: "https://i.imgur.com/45K5CMt.png",
    opts: {
      expansion: ["SW1"],
	  team: ["IL"]
    }
  },
   {
    name: "Lady Thor",
    img: "https://i.imgur.com/yfPd95F.png",
    opts: {
      expansion: ["SW1"],
	  team: ["AV"]
    }
  },
   {
    name: "Magik",
    img: "https://i.imgur.com/rQCT1Ku.png",
    opts: {
      expansion: ["SW1"],
	  team: ["XM"]
    }
  },
   {
    name: "Maximus",
    img: "https://i.imgur.com/PwkUTYH.png",
    opts: {
      expansion: ["SW1"],
	  team: ["CB"]
    }
  },
   {
    name: "Namor, the Sub-Mariner",
    img: "https://i.imgur.com/qqso5cw.png",
    opts: {
      expansion: ["SW1"],
	  team: ["CB"]
    }
  },
   {
    name: "Old Man Logan",
    img: "https://i.imgur.com/4eQZuIk.png",
    opts: {
      expansion: ["SW1"],
	  team: ["XM"]
    }
  },
   {
    name: "Proxima Midnight",
    img: "https://i.imgur.com/1ib8uva.png",
    opts: {
      expansion: ["SW1"],
	  team: ["CB"]
    }
  },
   {
    name: "Superior Iron Man",
    img: "https://i.imgur.com/ktPQJAG.png",
    opts: {
      expansion: ["SW1"],
	  team: ["IL"]
    }
  },
   {
    name: "Thanos",
    img: "https://i.imgur.com/yfPd95F.png",
    opts: {
      expansion: ["SW1"],
	  team: ["CB"]
    }
  },
   {
    name: "Ultimate Spider-Man",
    img: "https://i.imgur.com/Dgcrf4K.png",
    opts: {
      expansion: ["SW1"],
	  team: ["SF"]
    }
  },
   {
    name: "Agent Venom",
    img: "https://i.imgur.com/QaHGFEP.png",
    opts: {
      expansion: ["SW2"],
	  team: ["SF"]
    }
  },
   {
    name: "Arkon the Magnificent",
    img: "https://i.imgur.com/CiZEC1t.png",
    opts: {
      expansion: ["SW2"],
	  team: ["UA"]
    }
  },
   {
    name: "Beast (Illuminati)",
    img: "https://i.imgur.com/OLOFnRu.png",
    opts: {
      expansion: ["SW2"],
	  team: ["IL"]
    }
  },
   {
    name: "Black Swan",
    img: "https://i.imgur.com/e7nmUz8.png",
    opts: {
      expansion: ["SW2"],
	  team: ["CB"]
    }
  },
   {
    name: "Captain Britain",
    img: "https://i.imgur.com/mg7VBBa.png",
    opts: {
      expansion: ["SW2"],
	  team: ["IL"]
    }
  },
   {
    name: "Corvus Glaive",
    img: "https://i.imgur.com/P9K347G.png",
    opts: {
      expansion: ["SW2"],
	  team: ["CB"]
    }
  },
   {
    name: "Dr. Punisher, Soldier Supreme",
    img: "https://i.imgur.com/uZ4hhsp.png",
    opts: {
      expansion: ["SW2"],
	  team: ["MK"]
    }
  },
   {
    name: "Elsa Bloodstone",
    img: "https://i.imgur.com/uuaLmzS.png",
    opts: {
      expansion: ["SW2"],
	  team: ["SH"]
    }
  },
   {
    name: "Phoenix Force Cyclops",
    img: "https://i.imgur.com/tSlyci8.png",
    opts: {
      expansion: ["SW2"],
	  team: ["XM"]
    }
  },
   {
    name: "Ruby Summers",
    img: "https://i.imgur.com/jY3iEl6.png",
    opts: {
      expansion: ["SW2"],
	  team: ["XM"]
    }
  },
   {
    name: "Shang-Chi",
    img: "https://i.imgur.com/eQRyiQs.png",
    opts: {
      expansion: ["SW2"],
	  team: ["MK"]
    }
  },
   {
    name: "Silk",
    img: "https://i.imgur.com/YGYtw1U.png",
    opts: {
      expansion: ["SW2"],
	  team: ["SF"]
    }
  },
   {
    name: "Soulsword Colossus",
    img: "https://i.imgur.com/Pbe9rLR.png",
    opts: {
      expansion: ["SW2"],
	  team: ["XM"]
    }
  },
   {
    name: "Spider-Gwen",
    img: "https://i.imgur.com/OGAC7Pb.png",
    opts: {
      expansion: ["SW2"],
	  team: ["SF"]
    }
  },
   {
    name: "The Captain & the Devil",
    img: "https://i.imgur.com/26yprFh.png",
    opts: {
      expansion: ["SW2"],
	  team: ["AV"]
    }
  },
   {
    name: "Time-Traveling Jean Grey",
    img: "https://i.imgur.com/aeMyB94.png",
    opts: {
      expansion: ["SW2"],
	  team: ["XM"]
    }
  },
   {
    name: "Agent X-13",
    img: "https://i.imgur.com/st3njKj.png",
    opts: {
      expansion: ["CA"],
	  team: ["SH"]
    }
  },
   {
    name: "Captain America 1941",
    img: "https://i.imgur.com/YOSyJn7.png",
    opts: {
      expansion: ["CA"],
	  team: ["AV"]
    }
  },
   {
    name: "Captain America (Falcon)",
    img: "https://i.imgur.com/2I3z9aT.png",
    opts: {
      expansion: ["CA"],
	  team: ["AV"]
    }
  },
   {
    name: "Steve Rogers, Director of S.H.I.E.L.D.",
    img: "https://i.imgur.com/Z0MgyNa.png",
    opts: {
      expansion: ["CA"],
	  team: ["SH"]
    }
  },
   {
    name: "Winter Soldier",
    img: "https://i.imgur.com/DdDLjy2.png",
    opts: {
      expansion: ["CA"],
	  team: ["UA"]
    }
  },
   {
    name: "Bob, Agent of HYDRA",
    img: "https://i.imgur.com/WeS4m3e.png",
    opts: {
      expansion: ["DP"],
	  team: ["HY"]
    }
  },
   {
    name: "Deadpool (Mercs for Money)",
    img: "https://i.imgur.com/YD93Rnt.png",
    opts: {
      expansion: ["DP"],
	  team: ["MM"]
    }
  },
   {
    name: "Solo",
    img: "https://i.imgur.com/PUAVxw6.png",
    opts: {
      expansion: ["DP"],
	  team: ["MM"]
    }
  },
   {
    name: "Stingray",
    img: "https://i.imgur.com/LUsHRAM.png",
    opts: {
      expansion: ["DP"],
	  team: ["MM"]
    }
  },
   {
    name: "Slapstick",
    img: "https://i.imgur.com/K5rfyWE.png",
    opts: {
      expansion: ["DP"],
	  team: ["MM"]
    }
  },
   {
    name: "Captain America, Secret Avenger",
    img: "https://i.imgur.com/QJxPBcf.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]
    }
  },
   {
    name: "Cloak & Dagger",
    img: "https://i.imgur.com/iAOGTlq.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV","MK"]
    }
  },
   {
    name: "Daredevil (Avengers)",
    img: "https://i.imgur.com/TY2Qm8O.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV","MK"]
    }
  },
   {
    name: "Falcon",
    img: "https://i.imgur.com/P4MAlpw.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]
    }
  },
   {
    name: "Goliath",
    img: "https://i.imgur.com/c5oBa4B.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]
    }
  },
   {
    name: "Hercules",
    img: "https://i.imgur.com/H2I5kQz.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV","UA"]
    }
  },
   {
    name: "Hulkling",
    img: "https://i.imgur.com/abj28Nw.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]
    }
  },
   {
    name: "Luke Cage",
    img: "https://i.imgur.com/3QknIzG.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV","MK"]
    }
  },
   {
    name: "Patriot",
    img: "https://i.imgur.com/lTQG2BH.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]
    }
  },
   {
    name: "Peter Parker",
    img: "https://i.imgur.com/vjzyubl.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV","SF"]
    }
  },
   {
    name: "Speedball",
    img: "https://i.imgur.com/sOWkcMd.png",
    opts: {
      expansion: ["CW"],
	  team: ["NW"]
    }
  },
   {
    name: "Stature",
    img: "https://i.imgur.com/gi5r5j2.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]
    }
  },
   {
    name: "Storm & Black Panther",
    img: "https://i.imgur.com/sU9GoGW.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV","XM"]
    }
  },
   {
    name: "Tigra",
    img: "https://i.imgur.com/qg9FoZw.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]
    }
  },
   {
    name: "Vision",
    img: "https://i.imgur.com/RRiRbo2.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]
    }
  },
   {
    name: "Wiccan",
    img: "https://i.imgur.com/mfsQwTg.png",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]
    }
  },
   {
    name: "Angel Noir",
    img: "https://i.imgur.com/JNKFfj3.png",
    opts: {
      expansion: ["NOIR"],
	  team: ["XM"]
    }
  },
   {
    name: "Daredevil Noir",
    img: "https://i.imgur.com/Sa8tX8q.png",
    opts: {
      expansion: ["NOIR"],
	  team: ["MK"]
    }
  },
   {
    name: "Iron Man Noir",
    img: "https://i.imgur.com/ObZ30FH.png",
    opts: {
      expansion: ["NOIR"],
	  team: ["AV"]
    }
  },
   {
    name: "Luke Cage Noir",
    img: "https://i.imgur.com/JrHXe6I.png",
    opts: {
      expansion: ["NOIR"],
	  team: ["MK"]
    }
  },
   {
    name: "Spider-Man Noir",
    img: "https://i.imgur.com/2FuuyD1.png",
    opts: {
      expansion: ["NOIR"],
	  team: ["SF"]
    }
  },
   {
    name: "Aurora & Northstar",
    img: "https://i.imgur.com/JCQl5PS.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Banshee",
    img: "https://i.imgur.com/qzlnTWt.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Beast (X-Men)",
    img: "https://i.imgur.com/W2T4t2X.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Cannonball",
    img: "https://i.imgur.com/q0IsBQT.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Colossus & Wolverine",
    img: "https://i.imgur.com/QHwpZvl.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Dazzler",
    img: "https://i.imgur.com/7KkkWAQ.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Havok",
    img: "https://i.imgur.com/fBvAYUw.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Jubilee",
    img: "https://i.imgur.com/G4sb9cc.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Kitty Pryde",
    img: "https://i.imgur.com/8iDNNwZ.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Legion",
    img: "https://i.imgur.com/Ed06dQM.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Longshot",
    img: "https://i.imgur.com/kN4uFZD.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Phoenix",
    img: "https://i.imgur.com/8iDNNwZ.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Polaris",
    img: "https://i.imgur.com/WJiag6p.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Psylocke",
    img: "https://i.imgur.com/sfKk2L7.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "X-23",
    img: "https://i.imgur.com/1i5EoPi.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]
    }
  },
   {
    name: "Happy Hogan",
    img: "https://i.imgur.com/5HOIsEG.png",
    opts: {
      expansion: ["SMH"],
	  team: ["UA"]
    }
  },
   {
    name: "High Tech Spider-Man",
    img: "https://i.imgur.com/3rgh4hQ.png",
    opts: {
      expansion: ["SMH"],
	  team: ["SF"]
    }
  },
   {
    name: "Peter Parker, Homecoming",
    img: "https://i.imgur.com/KqblvIj.png",
    opts: {
      expansion: ["SMH"],
	  team: ["SF"]
    }
  },
   {
    name: "Peter's Allies",
    img: "https://i.imgur.com/YgYgLxh.png",
    opts: {
      expansion: ["SMH"],
	  team: ["SF"]
    }
  },
   {
    name: "Tony Stark",
    img: "https://i.imgur.com/4lQpGUO.png",
    opts: {
      expansion: ["SMH"],
	  team: ["AV"]
    }
  },
   {
    name: "Gwenpool",
    img: "https://i.imgur.com/NdDnPia.png",
    opts: {
      expansion: ["CHP"],
	  team: ["CH"]
    }
  },
   {
    name: "Ms. Marvel",
    img: "https://i.imgur.com/dv1sfCr.png",
    opts: {
      expansion: ["CHP"],
	  team: ["CH"]
    }
  },
   {
    name: "Nova (Champions)",
    img: "https://i.imgur.com/wRJHwMM.png",
    opts: {
      expansion: ["CHP"],
	  team: ["CH"]
    }
  },
   {
    name: "Totally Awesome Hulk",
    img: "https://i.imgur.com/8PLuiVG.png",
    opts: {
      expansion: ["CHP"],
	  team: ["CH"]
    }
  },
   {
    name: "Viv Vision",
    img: "https://i.imgur.com/U9hlkfI.png",
    opts: {
      expansion: ["CHP"],
	  team: ["CH"]
    }
  },
   {
    name: "Amadeus Cho",
    img: "https://i.imgur.com/4QsCmb1.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["CH"]
    }
  },
   {
    name: "No-Name, Brood Queen",
    img: "https://i.imgur.com/3JPsq0N.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["WB"]
    }
  },
   {
    name: "Bruce Banner",
    img: "https://i.imgur.com/ozZhPgF.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["AV"]
    }
  },
   {
    name: "Caiera",
    img: "https://i.imgur.com/hIhIq2c.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["WB"]
    }
  },
   {
    name: "Gladiator Hulk",
    img: "https://i.imgur.com/uN8fBNT.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["WB"]
    }
  },
   {
    name: "Hiroim",
    img: "https://i.imgur.com/O9sWkIL.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["WB"]
    }
  },
   {
    name: "Hulkbuster Iron Man",
    img: "https://i.imgur.com/PxOdKio.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["AV"]
    }
  },
   {
    name: "Joe Fixit, Grey Hulk",
    img: "https://i.imgur.com/l4RrxYn.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["CS"]
    }
  },
   {
    name: "Korg",
    img: "https://i.imgur.com/JZaXYUU.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["WB"]
    }
  },
   {
    name: "Miek, The Unhived",
    img: "https://i.imgur.com/6rjtbEj.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["WB"]
    }
  },
   {
    name: "Namora",
    img: "https://i.imgur.com/veeypHz.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["CH"]
    }
  },
   {
    name: "Rick Jones",
    img: "https://i.imgur.com/LGtqvzT.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["AV", "SH","UA"]
    }
  },
   {
    name: "Sentry",
    img: "https://i.imgur.com/0U8czAo.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["AV","UA"]
    }
  },
   {
    name: "She-Hulk",
    img: "https://i.imgur.com/l6phoLu.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["AV"]
    }
  },
   {
    name: "Skaar, Son of Hulk",
    img: "https://i.imgur.com/MzmJGu6.jpg",
    opts: {
      expansion: ["WWH"],
	  team: ["AV"]
    }
  },
   {
    name: "Ant-Man",
    img: "https://i.imgur.com/JnK3dnT.png",
    opts: {
      expansion: ["AM"],
	  team: ["AV"]
    }
  },
   {
    name: "Black Knight",
    img: "https://i.imgur.com/vs7Oi9w.png",
    opts: {
      expansion: ["AM"],
	  team: ["AV"]
    }
  },
   {
    name: "Jocasta",
    img: "https://i.imgur.com/z9gacc8.png",
    opts: {
      expansion: ["AM"],
	  team: ["AV"]
    }
  },
   {
    name: "Wasp",
    img: "https://i.imgur.com/wg7HNY7.png",
    opts: {
      expansion: ["AM"],
	  team: ["AV"]
    }
  },
   {
    name: "Wonder Man",
    img: "https://i.imgur.com/orPhXWV.png",
    opts: {
      expansion: ["AM"],
	  team: ["AV"]
    }
  },
   {
    name: "Carnage",
    img: "https://i.imgur.com/4fc1aGe.png",
    opts: {
      expansion: ["VN"],
	  team: ["VV"]
    }
  },
   {
    name: "Venom (Venomverse)",
    img: "https://i.imgur.com/F4ERUnt.png",
    opts: {
      expansion: ["VN"],
	  team: ["VV"]
    }
  },
   {
    name: "Venomized Dr. Strange",
    img: "https://i.imgur.com/nTdSc79.png",
    opts: {
      expansion: ["VN"],
	  team: ["VV"]
    }
  },
   {
    name: "Venompool",
    img: "https://i.imgur.com/eNjnuGl.png",
    opts: {
      expansion: ["VN"],
	  team: ["VV"]
    }
  },
   {
    name: "Venom Rocket",
    img: "https://i.imgur.com/Xoqx0By.jpg",
    opts: {
      expansion: ["VN"],
	  team: ["VV"]
    }
  },
   {
    name: "Howard the Duck",
    img: "https://i.imgur.com/sUeJNHs.png",
    opts: {
      expansion: ["DM"],
	  team: ["UA"]
    }
  },
   {
    name: "Jessica Jones",
    img: "https://i.imgur.com/r7DVc36.png",
    opts: {
      expansion: ["DM"],
	  team: ["MK"]
    }
  },
   {
    name: "Man-Thing",
    img: "https://i.imgur.com/Gv82Sqz.png",
    opts: {
      expansion: ["DM"],
	  team: ["UA"]
    }
  },
   {
    name: "Ms. America",
    img: "https://i.imgur.com/sHwSPYT.png",
    opts: {
      expansion: ["DM"],
	  team: ["AV"]
    }
  },
   {
    name: "Squirrel Girl",
    img: "https://i.imgur.com/32DUyzh.png",
    opts: {
      expansion: ["DM"],
	  team: ["AV"]
    }
  },
   {
    name: "Captain Marvel, Agent of S.H.I.E.L.D.",
    img: "https://i.imgur.com/KBmfJ0P.jpg",
    opts: {
      expansion: ["RV"],
	  team: ["SH"]
    }
  },
   {
    name: "Darkhawk",
    img: "https://i.imgur.com/dfisSLr.jpg",
    opts: {
      expansion: ["RV"],
	  team: ["AV"]
    }
  },
   {
    name: "Hellcat",
    img: "https://i.imgur.com/nc1UG6H.jpg",
    opts: {
      expansion: ["RV"],
	  team: ["AV"]
    }
  },
   {
    name: "Photon",
    img: "https://i.imgur.com/8UAUuU3.jpg",
    opts: {
      expansion: ["RV"],
	  team: ["AV"]
    }
  },
   {
    name: "Quicksilver",
    img: "https://i.imgur.com/seL6LUx.jpg",
    opts: {
      expansion: ["RV"],
	  team: ["AV"]
    }
  },
   {
    name: "Ronin",
    img: "https://i.imgur.com/OnWVkYn.jpg",
    opts: {
      expansion: ["RV"],
	  team: ["AV"]
    }
  },
   {
    name: "Scarlet Witch",
    img: "https://i.imgur.com/Dg2RznS.jpg",
    opts: {
      expansion: ["RV"],
	  team: ["AV"]
    }
  },
   {
    name: "Speed",
    img: "https://i.imgur.com/cN8Rc15.jpg",
    opts: {
      expansion: ["RV"],
	  team: ["AV"]
    }
  },
   {
    name: "War Machine",
    img: "https://i.imgur.com/rtK7WOw.jpg",
    opts: {
      expansion: ["RV"],
	  team: ["AV"]
    }
  },
   {
    name: "Agent Phil Coulson",
    img: "https://i.imgur.com/ln86wnu.jpg",
    opts: {
      expansion: ["S"],
	  team: ["SH"]
    }
  },
   {
    name: "Deathlok",
    img: "https://i.imgur.com/nh696WJ.jpg",
    opts: {
      expansion: ["S"],
	  team: ["SH"]
    }
  },
   {
    name: "Mockingbird",
    img: "https://i.imgur.com/W1NGjd4.jpg",
    opts: {
      expansion: ["S"],
	  team: ["SH"]
    }
  },
   {
    name: "Quake",
    img: "https://i.imgur.com/Wko3gRN.jpg",
    opts: {
      expansion: ["S"],
	  team: ["SH"]
    }
  },
   {
    name: "Beta Ray Bill",
    img: "https://i.imgur.com/uFhUkI1.jpg",
    opts: {
      expansion: ["HOA"],
	  team: ["HA"]
    }
  },
   {
    name: "Lady Sif",
    img: "https://i.imgur.com/YTSVYqp.jpg",
    opts: {
      expansion: ["HOA"],
	  team: ["HA"]
    }
  },
   {
    name: "The Warriors Three",
    img: "https://i.imgur.com/SYQ41NI.jpg",
    opts: {
      expansion: ["HOA"],
	  team: ["HA"]
    }
  },
   {
    name: "Thor (Heroes of Asgard)",
    img: "https://i.imgur.com/0swtiHd.jpg",
    opts: {
      expansion: ["HOA"],
	  team: ["HA"]
    }
  },
   {
    name: "Valkyrie",
    img: "https://i.imgur.com/FRrKCjK.jpg",
    opts: {
      expansion: ["HOA"],
	  team: ["HA"]
    }
  },
   {
    name: "Karma",
    img: "https://i.imgur.com/1dIg69Q.jpg",
    opts: {
      expansion: ["NM"],
	  team: ["XM"]
    }
  },
   {
    name: "Mirage",
    img: "https://i.imgur.com/RYegWbK.jpg",
    opts: {
      expansion: ["NM"],
	  team: ["XM"]
    }
  },
   {
    name: "Sunspot",
    img: "https://i.imgur.com/xVA1wHu.jpg",
    opts: {
      expansion: ["NM"],
	  team: ["XM"]
    }
  },
   {
    name: "Warlock",
    img: "https://i.imgur.com/8U3ig7F.jpg",
    opts: {
      expansion: ["NM"],
	  team: ["XM"]
    }
  },
   {
    name: "Wolfsbane",
    img: "https://i.imgur.com/HjNW57y.jpg",
    opts: {
      expansion: ["NM"],
	  team: ["XM"]
    }
  },
   {
    name: "Adam Warlock",
    img: "https://i.imgur.com/hpUDkD9.jpg",
    opts: {
      expansion: ["ITC"],
	  team: ["AV"]
    }
  },
   {
    name: "Captain Mar-Vell",
    img: "https://i.imgur.com/cB1AtkF.jpg",
    opts: {
      expansion: ["ITC"],
	  team: ["AV"]
    }
  },
   {
    name: "Moondragon",
    img: "https://i.imgur.com/kxTPc9n.jpg",
    opts: {
      expansion: ["ITC"],
	  team: ["AV"]
    }
  },
   {
    name: "Nebula",
    img: "https://i.imgur.com/KEm0w0r.jpg",
    opts: {
      expansion: ["ITC"],
	  team: ["GG"]
    }
  },
   {
    name: "Nova (Avengers)",
    img: "https://i.imgur.com/bsNEs3F.jpg",
    opts: {
      expansion: ["ITC"],
	  team: ["AV"]
    }
  },
   {
    name: "Phyla-Vell",
    img: "https://i.imgur.com/B4cKYpq.jpg",
    opts: {
      expansion: ["ITC"],
	  team: ["GG"]
    }
  },
   {
    name: "Quasar",
    img: "https://i.imgur.com/ZBnxxUg.jpg",
    opts: {
      expansion: ["ITC"],
	  team: ["AV"]
    }
  },
   {
    name: "Ronan the Accuser",
    img: "https://i.imgur.com/OfPzSss.jpg",
    opts: {
      expansion: ["ITC"],
	  team: ["UA"]
    }
  },
   {
    name: "Yondu",
    img: "https://i.imgur.com/LxdA58Q.jpg",
    opts: {
      expansion: ["ITC"],
	  team: ["GG"]
    }
  },
   {
    name: "Black Bolt (Inhumans)",
    img: "https://i.imgur.com/bhd4517.png",
    opts: {
      expansion: ["ROK"],
	  team: ["IH"]
    }
  },
   {
    name: "Medusa",
    img: "https://i.imgur.com/MC0Go9N.png",
    opts: {
      expansion: ["ROK"],
	  team: ["IH"]
    }
  },
   {
    name: "Karnak",
    img: "https://i.imgur.com/E1rUWbS.png",
    opts: {
      expansion: ["ROK"],
	  team: ["IH"]
    }
  },
   {
    name: "Gorgon",
    img: "https://i.imgur.com/3vG0jzI.png",
    opts: {
      expansion: ["ROK"],
	  team: ["IH"]
    }
  },
   {
    name: "Crystal",
    img: "https://i.imgur.com/tO4wiII.png",
    opts: {
      expansion: ["ROK"],
	  team: ["IH"]
    }
  },

];
