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
    img: "https://marveldbg.com/wp-content/uploads/2019/09/black-widow-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["AV"]
    }
  },
   {
    name: "Captain America",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/captain-america-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["AV"]
    }
  },
   {
    name: "Cyclops",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/cyclops-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["XM"]		
    }
  },
   {
    name: "Deadpool (Unaffiliated)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/deadpool-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["UA"]	
    }
  },
   {
    name: "Emma Frost",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/emma-frost-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["XM"]	
    }
  },
   {
    name: "Gambit",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/gambit-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["XM"]	
    }
  },
   {
    name: "Hawkeye",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/hawkeye-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["AV"]	
    }
  },
   {
    name: "Hulk",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/hulk-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["AV"]	
    }
  },
   {
    name: "Iron Man",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/iron-man-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["AV"]	
    }
  },
   {
    name: "Nick Fury",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/nick-fury-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["SH"]	
    }
  },
   {
    name: "Rogue",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/rogue-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["XM"]	
    }
  },
   {
    name: "Spider-Man",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/spider-man-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["SF"]	
    }
  },
   {
    name: "Storm",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/storm-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["XM"]	
    }
  },
   {
    name: "Thor (Avengers)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/thor-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["AV"]	
    }
  },
   {
    name: "Wolverine (X-Men)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/wolverine-01.jpg",
    opts: {
      expansion: ["C"],
	  team: ["XM"]	
    }
  },
   {
    name: "Angel",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/angel-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]	
    }
  },
   {
    name: "Bishop",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/bishop-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]	
    }
  },
   {
    name: "Blade",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/blade-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]	
    }
  },
   {
    name: "Cable",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/cable-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XF"]	
    }
  },
   {
    name: "Colossus",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/colossus-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XF"]	
    }
  },
   {
    name: "Daredevil (Marvel Knights)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/daredevil-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]	
    }
  },
   {
    name: "Domino",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/domino-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XF"]	
    }
  },
   {
    name: "Elektra",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/elektra-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]	
    }
  },
   {
    name: "Forge",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/forge-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XF"]	
    }
  },
   {
    name: "Ghost Rider",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/ghost-rider-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]	
    }
  },
   {
    name: "Iceman",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/iceman-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]	
    }
  },
   {
    name: "Iron Fist",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/iron-fist-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]	
    }
  },
   {
    name: "Jean Grey",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/jean-grey-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]	
    }
  },
   {
    name: "Nightcrawler",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/nightcrawler-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]	
    }
  },
   {
    name: "Professor X",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/professor-x-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XM"]	
    }
  },
   {
    name: "Punisher",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/punisher-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["MK"]	
    }
  },
   {
    name: "Wolverine (X-Force)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/x-force-wolverine-01.jpg",
    opts: {
      expansion: ["DC"],
	  team: ["XF"]	
    }
  },
   {
    name: "Mr. Fantastic",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/mr-fantastic-01.jpg",
    opts: {
      expansion: ["F4"],
	  team: ["F4"]	
    }
  },
   {
    name: "Invisible Woman",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/invisible-woman-01.jpg",
    opts: {
      expansion: ["F4"],
	  team: ["F4"]	
    }
  },
   {
    name: "Human Torch",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/human-torch-01.jpg",
    opts: {
      expansion: ["F4"],
	  team: ["F4"]	
    }
  },
   {
    name: "Thing",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/thing-01.jpg",
    opts: {
      expansion: ["F4"],
	  team: ["F4"]	
    }
  },
   {
    name: "Silver Surfer",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/silver-surfer-01.jpg",
    opts: {
      expansion: ["F4"],
	  team: ["UA"]	
    }
  },
   {
    name: "Black Cat",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/black-cat-01.jpg",
    opts: {
      expansion: ["PTTR"],
	  team: ["SF"]	
    }
  },
   {
    name: "Moon Knight",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/moon-knight-01.jpg",
    opts: {
      expansion: ["PTTR"],
	  team: ["MK"]	
    }
  },
   {
    name: "Scarlet Spider",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/scarlet-spider-01.jpg",
    opts: {
      expansion: ["PTTR"],
	  team: ["SF"]	
    }
  },
   {
    name: "Spider-Woman",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/spider-woman-01.jpg",
    opts: {
      expansion: ["PTTR"],
	  team: ["SF"]	
    }
  },
   {
    name: "Symbiote Spider-Man",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/symbiote-spider-man-01.jpg",
    opts: {
      expansion: ["PTTR"],
	  team: ["SF"]	
    }
  },   
   {
    name: "Bullseye",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/bullseye-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["CS"]	
    }
  }, 
   {
    name: "Dr. Octopus",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/dr-octopus-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["S6"]	
    }
  },      
   {
    name: "Electro",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/electro-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["S6"]	
    }
  },      
   {
    name: "Enchantress",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/enchantress-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["FA"]	
    }
  },      
   {
    name: "Green Goblin",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/green-goblin-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["S6"]	
    }
  },      
   {
    name: "Juggernaut",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/juggernaut-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["BH"]	
    }
  },      
   {
    name: "Kingpin",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/kingpin-01-1.jpg",
    opts: {
      expansion: ["V"],
	  team: ["CS"]	
    }
  },      
   {
    name: "Kraven",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/kraven-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["S6"]	
    }
  },      
   {
    name: "Loki",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/loki-01-1.jpg",
    opts: {
      expansion: ["V"],
	  team: ["FA"]	
    }
  },      
   {
    name: "Magneto",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/magneto-01-1.jpg",
    opts: {
      expansion: ["V"],
	  team: ["BH"]	
    }
  },      
   {
    name: "Mysterio",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/mysterio-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["S6"]	
    }
  },      
   {
    name: "Mystique",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/mystique-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["BH"]	
    }
  },      
   {
    name: "Sabretooth",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/sabretooth-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["BH"]	
    }
  },      
   {
    name: "Ultron",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/ultron-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["UA"]	
    }
  },      
   {
    name: "Venom (Sinister Six)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/venom-01.jpg",
    opts: {
      expansion: ["V"],
	  team: ["S6"]	
    }
  },     
   {
    name: "Star-Lord",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/star-lord-01-1.jpg",
    opts: {
      expansion: ["GG"],
	  team: ["GG"]	
    }
  },         
   {
    name: "Gamora",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/gamora-01.jpg",
    opts: {
      expansion: ["GG"],
	  team: ["GG"]	
    }
  },         
   {
    name: "Drax",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/drax-01.jpg",
    opts: {
      expansion: ["GG"],
	  team: ["GG"]	
    }
  },         
   {
    name: "Rocket Raccoon",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/rocket-01.jpg",
    opts: {
      expansion: ["GG"],
	  team: ["GG"]	
    }
  },         
   {
    name: "Groot",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/groot-01.jpg",
    opts: {
      expansion: ["GG"],
	  team: ["GG"]	
    }
  },      
   {
    name: "Greithoth, Breaker of Wills",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/greithoth-01.jpg",
    opts: {
      expansion: ["FI"],
	  team: ["FA"]	
    }
  },         
   {
    name: "Kuurth, Breaker of Stone",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/kuurth-01.jpg",
    opts: {
      expansion: ["FI"],
	  team: ["FA"]	
    }
  },         
   {
    name: "Nerkkod, Breaker of Oceans",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/nerkkod-01.jpg",
    opts: {
      expansion: ["FI"],
	  team: ["FA"]	
    }
  },         
   {
    name: "Nul, Breaker of Worlds",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/nul-01.jpg",
    opts: {
      expansion: ["FI"],
	  team: ["FA"]	
    }
  },         
   {
    name: "Skirn, Breaker of Men",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/skirn-01.jpg",
    opts: {
      expansion: ["FI"],
	  team: ["FA"]	
    }
  },         
   {
    name: "Skadi",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/skadi-01.jpg",
    opts: {
      expansion: ["FI"],
	  team: ["HY"]	
    }
  },         
   {
    name: "Apocalyptic Kitty Pryde",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/apocalyptic-kitty-pryde-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Black Bolt (Illuminati)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/black-bolt-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["IL"]	
    }
  },         
   {
    name: "Black Panther",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/black-panther-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["IL"]	
    }
  },         
   {
    name: "Captain Marvel",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/captain-marvel-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Dr. Strange",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/dr-strange-01-1.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["IL"]	
    }
  },         
   {
    name: "Lady Thor",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/lady-thor-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Magik",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/magik-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Maximus",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/maximus-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["CB"]	
    }
  },         
   {
    name: "Namor, the Sub-Mariner",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/namor-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["CB"]	
    }
  },         
   {
    name: "Old Man Logan",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/old-man-logan-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Proxima Midnight",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/proxima-midnight-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["CB"]	
    }
  },         
   {
    name: "Superior Iron Man",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/superior-iron-man-01.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["IL"]	
    }
  },         
   {
    name: "Thanos",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/thanos-01-1.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["CB"]	
    }
  },         
   {
    name: "Ultimate Spider-Man",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/ultimate-spider-man-05.jpg",
    opts: {
      expansion: ["SW1"],
	  team: ["SF"]	
    }
  },         
   {
    name: "Agent Venom",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/agent-venom-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["SF"]	
    }
  },         
   {
    name: "Arkon the Magnificent",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/arkon-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["UA"]	
    }
  },         
   {
    name: "Beast (Illuminati)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/beast-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["IL"]	
    }
  },         
   {
    name: "Black Swan",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/black-swan-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["CB"]	
    }
  },         
   {
    name: "Captain Britain",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/captain-britain-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["IL"]	
    }
  },         
   {
    name: "Corvus Glaive",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/corvus-glaive-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["CB"]	
    }
  },         
   {
    name: "Dr. Punisher, Soldier Supreme",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/dr-punisher-soldier-supreme-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["MK"]	
    }
  },         
   {
    name: "Elsa Bloodstone",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/elsa-bloodstone-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["SH"]	
    }
  },         
   {
    name: "Phoenix Force Cyclops",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/phoenix-force-cyclops-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Ruby Summers",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/ruby-summers-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Shang-Chi",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/shang-chi-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["MK"]	
    }
  },         
   {
    name: "Silk",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/silk-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["SF"]	
    }
  },         
   {
    name: "Soulsword Colossus",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/soulsword-colossus-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Spider-Gwen",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/spider-gwen-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["SF"]	
    }
  },         
   {
    name: "The Captain & the Devil",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/captain-and-the-devil-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Time-Traveling Jean Grey",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/time-traveling-jean-grey-01.jpg",
    opts: {
      expansion: ["SW2"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Agent X-13",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/agent-x-13-01.jpg",
    opts: {
      expansion: ["CA"],
	  team: ["SH"]	
    }
  },         
   {
    name: "Captain America 1941",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/captain-america-1941-01.jpg",
    opts: {
      expansion: ["CA"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Captain America (Falcon)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/falcon-01.jpg",
    opts: {
      expansion: ["CA"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Steve Rogers, Director of S.H.I.E.L.D.",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/steve-rogers-01.jpg",
    opts: {
      expansion: ["CA"],
	  team: ["SH"]	
    }
  },         
   {
    name: "Winter Soldier",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/winter-soldier-01.jpg",
    opts: {
      expansion: ["CA"],
	  team: ["UA"]	
    }
  },         
   {
    name: "Bob, Agent of HYDRA",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/bob-01.jpg",
    opts: {
      expansion: ["DP"],
	  team: ["HY"]	
    }
  },         
   {
    name: "Deadpool (Mercs for Money)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/deadpool-01-1.jpg",
    opts: {
      expansion: ["DP"],
	  team: ["MM"]	
    }
  },         
   {
    name: "Solo",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/solo-01.jpg",
    opts: {
      expansion: ["DP"],
	  team: ["MM"]	
    }
  },         
   {
    name: "Stingray",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/stingray-01.jpg",
    opts: {
      expansion: ["DP"],
	  team: ["MM"]	
    }
  },         
   {
    name: "Slapstick",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/slapstick-01.jpg",
    opts: {
      expansion: ["DP"],
	  team: ["MM"]	
    }
  },         
   {
    name: "Captain America, Secret Avenger",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/captain-america-secret-avenger-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Cloak & Dagger",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/cloak-and-dagger-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV","MK"]	
    }
  },         
   {
    name: "Daredevil (Avengers)",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/daredevil-01-1.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV","MK"]	
    }
  },         
   {
    name: "Falcon",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/falcon-01-1.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Goliath",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/goliath-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Hercules",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/hercules-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV","UA"]	
    }
  },         
   {
    name: "Hulkling",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/hulkling-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Luke Cage",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/luke-cage-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV","MK"]	
    }
  },         
   {
    name: "Patriot",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/patriot-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Peter Parker",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/peter-parker-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV","SF"]	
    }
  },         
   {
    name: "Speedball",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/speedball-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["NW"]	
    }
  },         
   {
    name: "Stature",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/stature-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Storm & Black Panther",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/black-panther-and-storm-01-1.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV","XM"]	
    }
  },         
   {
    name: "Tigra",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/tigra-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Vision",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/vision-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Wiccan",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/wiccan-01.jpg",
    opts: {
      expansion: ["CW"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Angel Noir",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/angel-noir-01.jpg",
    opts: {
      expansion: ["NOIR"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Daredevil Noir",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/daredevil-01-2.jpg",
    opts: {
      expansion: ["NOIR"],
	  team: ["MK"]	
    }
  },         
   {
    name: "Iron Man Noir",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/iron-man-noir-01.jpg",
    opts: {
      expansion: ["NOIR"],
	  team: ["AV"]	
    }
  },         
   {
    name: "Luke Cage Noir",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/luke-cage-noir-01.jpg",
    opts: {
      expansion: ["NOIR"],
	  team: ["MK"]	
    }
  },         
   {
    name: "Spider-Man Noir",
    img: "https://marveldbg.com/wp-content/uploads/2019/09/spider-man-noir-01.jpg",
    opts: {
      expansion: ["NOIR"],
	  team: ["SF"]	
    }
  },         
   {
    name: "Aurora & Northstar",
    img: "https://i.imgur.com/X5GNPPd.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Banshee",
    img: "https://i.imgur.com/EunCbtJ.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Beast (X-Men)",
    img: "https://i.imgur.com/vbRD2io.png.jpg",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Cannonball",
    img: "https://i.imgur.com/tolduBu.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Colossus & Wolverine",
    img: "https://i.imgur.com/lRt7HQo.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Dazzler",
    img: "https://i.imgur.com/Wgj3tOM.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Havok",
    img: "https://i.imgur.com/LTC36Wx.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Jubilee",
    img: "https://i.imgur.com/9wbpO2M.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Kitty Pryde",
    img: "https://i.imgur.com/YbzMZG1.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Legion",
    img: "https://i.imgur.com/TNZRPx4.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Longshot",
    img: "https://i.imgur.com/UMkU0vO.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Phoenix",
    img: "https://i.imgur.com/hWyxhoB.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Polaris",
    img: "https://i.imgur.com/5fwZbYI.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "Psylocke",
    img: "https://i.imgur.com/NjfCD1c.png",
    opts: {
      expansion: ["XM"],
	  team: ["XM"]	
    }
  },         
   {
    name: "X-23",
    img: "https://i.imgur.com/AufdbKP.png",
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

