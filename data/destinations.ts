export type DestinationExperience = {
  title: string;
  description: string;
  duration: string;
};

export type DailyPlan = {
  day: string;
  focus: string;
  details: string[];
};

export type DestinationGuide = {
  slug: string;
  name: string;
  location: string;
  region: string;
  tagline: string;
  description: string;
  heroImage: string;
  climate: string;
  bestTime: string;
  airport: string;
  languages: string[];
  timeZone: string;
  currency: string;
  highlights: string[];
  experiences: DestinationExperience[];
  dailyPlan: DailyPlan[];
  insiderTips: string[];
};

export const destinations: DestinationGuide[] = [
  {
    slug: "kyoto",
    name: "Kyoto",
    location: "Japan",
    region: "Asia",
    tagline: "Timeless temples, modern tea culture, and ethereal seasonal color.",
    description:
      "Kyoto blends centuries-old tradition with a forward-looking creative scene. Wander through bamboo forests, savor kaiseki in machiya townhouses, and immerse yourself in mindful craftsmanship across the city's artisan quarters.",
    heroImage:
      "https://images.unsplash.com/photo-1504788363733-507549153474?auto=format&fit=crop&w=1600&q=80",
    climate:
      "Humid subtropical with four distinct seasons and vibrant spring cherry blossoms and autumn foliage.",
    bestTime:
      "March-April for blossoms, October-November for foliage, and January for serene winter temples.",
    airport: "Kansai International Airport (KIX) | 75 minutes by express train",
    languages: ["Japanese", "English (widely understood in hospitality)"],
    timeZone: "Japan Standard Time (UTC+9)",
    currency: "Japanese Yen (JPY)",
    highlights: [
      "Sunrise meditation at Nanzen-ji",
      "Tea ceremony workshop in Gion",
      "Fushimi Inari twilight hike",
      "Kintsugi craft lesson with local artisan"
    ],
    experiences: [
      {
        title: "Arashiyama Dawn Walk",
        description:
          "Cross the Katsura River before sunrise and glide through the bamboo groves as the morning light filters in.",
        duration: "3 hours"
      },
      {
        title: "Seasonal Kaiseki Atelier",
        description:
          "Learn plating techniques from a kaiseki chef, then savor an 8-course menu inspired by micro-seasonal produce.",
        duration: "Half-day"
      },
      {
        title: "Zen Garden Photography",
        description:
          "Guided photo session capturing raked gardens and temple reflections with a local storyteller-photographer.",
        duration: "2.5 hours"
      }
    ],
    dailyPlan: [
      {
        day: "Day 1",
        focus: "Eastern Kyoto Classics",
        details: [
          "Sunrise at Kiyomizu-dera viewing platform",
          "Explore Higashiyama alleyways and pottery studios",
          "Lunch at Nishiki Market with seasonal specialties",
          "Sunset tea at Shoren-in temple garden"
        ]
      },
      {
        day: "Day 2",
        focus: "Arashiyama & Craftsmanship",
        details: [
          "Row boat ride along Hozu River Gorge",
          "Private bamboo grove walk with cultural guide",
          "Kintsugi workshop restoring antique ceramics",
          "Evening kaiseki tasting menu"
        ]
      },
      {
        day: "Day 3",
        focus: "Modern Kyoto Inspiration",
        details: [
          "Architectural tour of Tadao Ando designs",
          "Omiyage shopping in Nishijin textile district",
          "Sake pairing dinner in converted machiya"
        ]
      }
    ],
    insiderTips: [
      "Reserve temple visits like Saiho-ji (Moss Temple) a month in advance.",
      "Purchase an IC card (ICOCA) for seamless train and bus travel.",
      "Visit Nishiki Market before 10 AM to avoid crowds and to chat with vendors.",
      "Kyoto's tap water is excellent—carry a reusable bottle to refill at vending machines."
    ]
  },
  {
    slug: "lisbon",
    name: "Lisbon",
    location: "Portugal",
    region: "Europe",
    tagline: "Sun-soaked hills, Atlantic breezes, and a vibrant culinary renaissance.",
    description:
      "Lisbon is a magnetic blend of tiled alleyways, avant-garde architecture, and soulful fado bars overlooking the Tagus River. Explore creative neighborhoods, ride vintage trams, and indulge in the city's flourishing food scene.",
    heroImage:
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=1600&q=80",
    climate:
      "Mediterranean climate with mild winters, warm summers, and abundant sunshine year-round.",
    bestTime: "April-June for festivals, September-October for warm days and thinner crowds.",
    airport: "Humberto Delgado Airport (LIS) | 20 minutes by metro to Baixa",
    languages: ["Portuguese", "English (widely spoken)", "Spanish"],
    timeZone: "Western European Time (UTC+0)",
    currency: "Euro (EUR)",
    highlights: [
      "Sunset miradouros from Bairro Alto terraces",
      "Pastel de nata tasting flight in Belém",
      "Day trip to fairy-tale Sintra palaces",
      "Night of live fado in Alfama wine cellar"
    ],
    experiences: [
      {
        title: "Seven Hills E-Bike Circuit",
        description:
          "Traverse Lisbon's iconic viewpoints and secret alleys with an expert local storyteller leading the way.",
        duration: "4 hours"
      },
      {
        title: "Market-to-Table Tasca Workshop",
        description:
          "Shop Mercado da Ribeira with a chef, then learn to prepare petiscos and seafood cataplana in a modern tasca kitchen.",
        duration: "Half-day"
      },
      {
        title: "Atlantic Sail at Golden Hour",
        description:
          "Set sail under the 25 de Abril Bridge with sparkling vinho verde, learning maritime history along the Tagus.",
        duration: "2 hours"
      }
    ],
    dailyPlan: [
      {
        day: "Day 1",
        focus: "Historic Core & Riverfront",
        details: [
          "Ride Tram 28 to explore Graça and São Vicente",
          "Lunch on petiscos in Time Out Market",
          "Visit MAAT for contemporary art and architecture",
          "Sunset sail on the Tagus River"
        ]
      },
      {
        day: "Day 2",
        focus: "Sintra Day Escape",
        details: [
          "Guided tour of Pena Palace and Moorish Castle",
          "Hike the lush trails of Parque Natural de Sintra",
          "Afternoon tea at a Quinta with vineyard views",
          "Return to Lisbon for fado dinner in Alfama"
        ]
      },
      {
        day: "Day 3",
        focus: "Creative Lisbon",
        details: [
          "Street art safari through LX Factory",
          "Coffee culture crawl in Príncipe Real",
          "Sunset cocktails on a rooftop miradouro"
        ]
      }
    ],
    insiderTips: [
      "Purchase a 24-hour Viva Viagem card to cover trams, ferries, and funiculars.",
      "Book popular Belém attractions with skip-the-line tickets to avoid afternoon queues.",
      "Pair pastéis de nata with cinnamon and powdered sugar for a traditional bite.",
      "Lisbon sidewalks can be slick—pack grippy footwear for the calçada."
    ]
  },
  {
    slug: "cape-town",
    name: "Cape Town",
    location: "South Africa",
    region: "Africa",
    tagline: "Wild coastlines, vineyard afternoons, and iconic mountain panoramas.",
    description:
      "Cape Town is where Table Mountain meets the Atlantic Coast, and design-forward neighborhoods pulse with culinary experimentation. Experience wildlife-rich peninsulas, world-class wines, and rich cultural storytelling.",
    heroImage:
      "https://images.unsplash.com/photo-1501600179700-0e0b1f5a64a3?auto=format&fit=crop&w=1600&q=80",
    climate:
      "Mediterranean climate with dry summers and mild, wetter winters.",
    bestTime:
      "November-March for beach weather, August-September for whale watching and wildflowers.",
    airport: "Cape Town International Airport (CPT) | 25 minutes by car to the V&A Waterfront",
    languages: ["English", "Afrikaans", "isiXhosa"],
    timeZone: "South Africa Standard Time (UTC+2)",
    currency: "South African Rand (ZAR)",
    highlights: [
      "Sunrise cableway ascent of Table Mountain",
      "Penguin encounters at Boulders Beach",
      "Wine tasting along the Constantia Valley",
      "Robben Island heritage tour"
    ],
    experiences: [
      {
        title: "Peninsula Explorer",
        description:
          "Cycle Chapman’s Peak Drive and picnic along the Cape Point Nature Reserve with a naturalist guide.",
        duration: "Full day"
      },
      {
        title: "Cape Malay Culinary Story",
        description:
          "Cook fragrant Cape Malay dishes with Bo-Kaap hosts while learning the neighborhood's vibrant history.",
        duration: "Half-day"
      },
      {
        title: "Winelands Sunset Soirée",
        description:
          "Private tasting of biodynamic wines in Stellenbosch paired with local jazz performance at dusk.",
        duration: "Evening"
      }
    ],
    dailyPlan: [
      {
        day: "Day 1",
        focus: "City & Mountain",
        details: [
          "Morning hike or cable car up Table Mountain",
          "Lunch at the V&A Waterfront food market",
          "Street art walk through Woodstock",
          "Sunset drinks on Signal Hill"
        ]
      },
      {
        day: "Day 2",
        focus: "Cape Peninsula",
        details: [
          "Drive Chapman's Peak and stop at Noordhoek Farm Village",
          "Visit Cape Point and the Two Oceans lookout",
          "Kayak with penguins at Boulders Beach",
          "Seafood dinner in Kalk Bay harbor"
        ]
      },
      {
        day: "Day 3",
        focus: "Winelands & Culture",
        details: [
          "Wine and chocolate pairing in Franschhoek",
          "Cheese tasting at a boutique Stellenbosch farm",
          "Evening storytelling performance at the Zeitz MOCAA"
        ]
      }
    ],
    insiderTips: [
      "Book popular restaurants on weekends at least two weeks in advance.",
      "Carry a light jacket—Cape Town's microclimates can bring sudden wind shifts.",
      "Use ride-hailing apps or trusted taxis after dark for safety.",
      "Purchase a Wild Card for discounted access to national parks if exploring longer."
    ]
  },
  {
    slug: "queenstown",
    name: "Queenstown",
    location: "New Zealand",
    region: "Oceania",
    tagline:
      "Adventure capital framed by alpine lakes, cozy lodges, and Southern hospitality.",
    description:
      "Queenstown delivers adrenaline-fueled adventures alongside serene lakefront retreats. From heli-hikes and Milford Sound cruises to Pinot Noir tastings, the Southern Alps backdrop invites exploration year-round.",
    heroImage:
      "https://images.unsplash.com/photo-1526481280695-3c46973ed6f0?auto=format&fit=crop&w=1600&q=80",
    climate:
      "Oceanic climate with crisp winters perfect for skiing and mild summers ideal for alpine hikes.",
    bestTime:
      "December-February for warm adventures, June-August for snow sports, and April for autumn colors.",
    airport: "Queenstown Airport (ZQN) | 15 minutes by shuttle to town center",
    languages: ["English", "Te Reo Māori (cultural highlights)"],
    timeZone: "New Zealand Standard Time (UTC+12)",
    currency: "New Zealand Dollar (NZD)",
    highlights: [
      "Sunrise cruise on Lake Wakatipu",
      "Fiordland National Park scenic flight",
      "Central Otago wine trail",
      "Skyline gondola and stargazing"
    ],
    experiences: [
      {
        title: "Remarkables Alpine Heli-Hike",
        description:
          "Fly above the Remarkables range, landing on remote ridgelines for a guided hike with panoramic views.",
        duration: "Half-day"
      },
      {
        title: "Milford Sound Serenity Cruise",
        description:
          "Luxury coach and catamaran journey through Fiordland with waterfalls, wildlife, and onboard naturalist talks.",
        duration: "Full day"
      },
      {
        title: "Otago Wine & Dine Trail",
        description:
          "Progressive dinner across three vineyards featuring cool-climate Pinot Noir, artisan cheeses, and chef pairings.",
        duration: "Evening"
      }
    ],
    dailyPlan: [
      {
        day: "Day 1",
        focus: "Lake Adventures",
        details: [
          "Jet boat thrill ride through Shotover River canyons",
          "Lunch at a lakeside bistro in town",
          "Afternoon kayaking on Lake Wakatipu",
          "Sunset gondola ride and skyline dinner"
        ]
      },
      {
        day: "Day 2",
        focus: "Fiordland Expedition",
        details: [
          "Coach transfer to Milford Sound with scenic stops",
          "Catamaran cruise to Stirling Falls and Mitre Peak",
          "Stargazing session back in Queenstown with an astronomer"
        ]
      },
      {
        day: "Day 3",
        focus: "Otago Indulgence",
        details: [
          "Morning bike ride on the Gibbston Valley Trail",
          "Barrel tasting at boutique cellar doors",
          "Winter pampering at Onsen Hot Pools"
        ]
      }
    ],
    insiderTips: [
      "Book adventure activities early in peak season to secure preferred time slots.",
      "Layer clothing—alpine weather shifts quickly even in summer.",
      "Rent a car with snow chains if visiting in winter to access ski fields safely.",
      "Pack insect repellent for sandfly-prone areas near Fiordland."
    ]
  }
];

export const getDestinationBySlug = (slug: string) =>
  destinations.find((destination) => destination.slug === slug);

export const featuredDestinations = destinations.slice(0, 4);
