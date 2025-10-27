export type SeasonalHighlight = {
  id: string;
  season: string;
  title: string;
  description: string;
  image: string;
  idealFor: string;
  experiences: string[];
};

export type CuratedItinerary = {
  id: string;
  title: string;
  duration: string;
  focus: string;
  summary: string;
  anchorDestination: string;
  highlights: string[];
  tempo: "slow" | "balanced" | "fast";
};

export type TravelTip = {
  title: string;
  body: string;
  category: string;
  action: string;
};

export type TravelStat = {
  label: string;
  value: string;
  context: string;
};

export const seasonalHighlights: SeasonalHighlight[] = [
  {
    id: "spring-hanami",
    season: "March – April",
    title: "Spring Hanami Trails",
    description:
      "Chase sakura blooms along Kyoto's Philosopher's Path before venturing to Arashiyama's bamboo groves at dawn.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    idealFor: "Mindful wanderers & cultural connoisseurs",
    experiences: [
      "Tea ceremony at a machiya townhouse",
      "Lantern-lit evening stroll through Gion",
      "Seasonal kaiseki tasting with sake pairing"
    ]
  },
  {
    id: "summer-algarve",
    season: "June – August",
    title: "Atlantic Coast Slow Living",
    description:
      "Savor golden hour picnics on Lisbon's city beaches before retreating to Comporta's barefoot luxury hideaways.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    idealFor: "Sun-seekers & design-loving couples",
    experiences: [
      "Catamaran sail to Arrábida's secret coves",
      "Architect-led walk through Belém cultural district",
      "Sunset rooftop session with live fado"
    ]
  },
  {
    id: "winter-alps",
    season: "July – September",
    title: "Southern Alps & Fiordland",
    description:
      "Pair heli-hiking in Queenstown with Fiordland star-gazing lodges and cool-climate Pinot Noir tastings.",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
    idealFor: "Adventure duos & alpine dreamers",
    experiences: [
      "Private heli drop on The Remarkables",
      "Milford Sound small-group expedition",
      "Onsen hot pools under southern skies"
    ]
  }
];

export const curatedItineraries: CuratedItinerary[] = [
  {
    id: "kyoto-72h",
    title: "Kyoto in 72 Hours",
    duration: "3 days",
    focus: "Culture & craftsmanship",
    summary:
      "A mindful triad of zen gardens, artisan encounters, and culinary rituals designed for travelers who move with intention.",
    anchorDestination: "Kyoto",
    highlights: [
      "Sunrise meditation at Nanzen-ji temple",
      "Kintsugi restoration workshop",
      "Nightfall tea pairing in Gion"
    ],
    tempo: "slow"
  },
  {
    id: "lisbon-urban-coast",
    title: "Lisbon & Coastline Retreat",
    duration: "5 days",
    focus: "City flair meets barefoot beaches",
    summary:
      "Split time between Lisbon's creative quarters and Comporta's serene sands with curated dining and design-forward stays.",
    anchorDestination: "Lisbon",
    highlights: [
      "Chef-led seafood crawl in Mercado da Ribeira",
      "Design hotel stay on Comporta dunes",
      "Sunset sailing beneath Ponte 25 de Abril"
    ],
    tempo: "balanced"
  },
  {
    id: "cape-town-wineland",
    title: "Cape Town Epicurean Escape",
    duration: "6 days",
    focus: "Coastal energy & wine country",
    summary:
      "Immerse in Cape Town's design scene before decanting into Stellenbosch's vineyards for jazz-infused tastings.",
    anchorDestination: "Cape Town",
    highlights: [
      "Sunrise cableway over Table Mountain",
      "Penguin paddle at Boulders Beach",
      "Biodynamic wine pairing dinner"
    ],
    tempo: "balanced"
  }
];

export const travelTips: TravelTip[] = [
  {
    title: "Master the micro-season",
    body: "Check Japan's 72 kō (micro-season) calendar to align temple visits with bloom, foliage, or snowfall peak moments.",
    category: "Kyoto Insight",
    action: "Download the 72 kō calendar"
  },
  {
    title: "Tap into Lisbon's locals",
    body: "Reserve a mesa at neighborhood tascas by messaging via Instagram or WhatsApp—most independents confirm within hours.",
    category: "Lisbon Strategy",
    action: "Browse our tasca contact list"
  },
  {
    title: "Pack for Cape winds",
    body: "Layer with lightweight merino and add a windproof outer shell—the Cape Doctor breeze can shift temperatures quickly.",
    category: "Cape Town Prep",
    action: "See the capsule packing list"
  }
];

export const travelStats: TravelStat[] = [
  {
    label: "Curated experiences vetted",
    value: "180+",
    context: "Hand-selected encounters across four continents"
  },
  {
    label: "Average traveler rating",
    value: "4.9/5",
    context: "Feedback from the past 12 months"
  },
  {
    label: "Sustainable partners",
    value: "82%",
    context: "Vetted for community and environmental impact"
  },
  {
    label: "Response time",
    value: "<6h",
    context: "Concierge replies to itinerary tweaks"
  }
];
