// Country data with tip-to-tip points (southernmost to northernmost)
// Distances are approximate road distances in km

export const countries = [
  {
    name: 'India',
    code: 'IN',
    tipToTip: {
      start: { name: 'Kanyakumari', lat: 8.0883, lng: 77.5385 },
      end: { name: 'Leh, Ladakh', lat: 34.1526, lng: 77.5771 },
      distanceKm: 3800,
      checkpoints: ['Kanyakumari', 'Bangalore', 'Hyderabad', 'Nagpur', 'Delhi', 'Chandigarh', 'Manali', 'Leh'],
    },
  },
  {
    name: 'Japan',
    code: 'JP',
    tipToTip: {
      start: { name: 'Cape Sata, Kagoshima', lat: 30.9942, lng: 130.6611 },
      end: { name: 'Cape Soya, Hokkaido', lat: 45.5225, lng: 141.9369 },
      distanceKm: 2800,
      checkpoints: ['Cape Sata', 'Kumamoto', 'Hiroshima', 'Osaka', 'Tokyo', 'Sendai', 'Aomori', 'Sapporo', 'Cape Soya'],
    },
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    tipToTip: {
      start: { name: "Land's End, Cornwall", lat: 50.0659, lng: -5.7128 },
      end: { name: "John o' Groats, Scotland", lat: 58.6439, lng: -3.0700 },
      distanceKm: 1400,
      checkpoints: ["Land's End", 'Exeter', 'Bristol', 'Birmingham', 'Manchester', 'Edinburgh', 'Inverness', "John o' Groats"],
    },
  },
  {
    name: 'Italy',
    code: 'IT',
    tipToTip: {
      start: { name: 'Reggio Calabria', lat: 38.1113, lng: 15.6474 },
      end: { name: 'Brenner Pass', lat: 47.0004, lng: 11.5076 },
      distanceKm: 1300,
      checkpoints: ['Reggio Calabria', 'Naples', 'Rome', 'Florence', 'Bologna', 'Verona', 'Brenner Pass'],
    },
  },
  {
    name: 'Vietnam',
    code: 'VN',
    tipToTip: {
      start: { name: 'Ca Mau', lat: 9.1800, lng: 105.1500 },
      end: { name: 'Ha Giang', lat: 22.8333, lng: 104.9833 },
      distanceKm: 2300,
      checkpoints: ['Ca Mau', 'Ho Chi Minh City', 'Nha Trang', 'Da Nang', 'Hue', 'Hanoi', 'Ha Giang'],
    },
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    tipToTip: {
      start: { name: 'Bluff', lat: -46.6000, lng: 168.3500 },
      end: { name: 'Cape Reinga', lat: -34.4286, lng: 172.6797 },
      distanceKm: 2100,
      checkpoints: ['Bluff', 'Queenstown', 'Christchurch', 'Wellington', 'Taupo', 'Auckland', 'Cape Reinga'],
    },
  },
  {
    name: 'Norway',
    code: 'NO',
    tipToTip: {
      start: { name: 'Lindesnes', lat: 57.9826, lng: 7.0479 },
      end: { name: 'Nordkapp', lat: 71.1685, lng: 25.7838 },
      distanceKm: 2500,
      checkpoints: ['Lindesnes', 'Stavanger', 'Bergen', 'Trondheim', 'Bodo', 'Tromso', 'Nordkapp'],
    },
  },
  {
    name: 'Chile',
    code: 'CL',
    tipToTip: {
      start: { name: 'Punta Arenas', lat: -53.1638, lng: -70.9171 },
      end: { name: 'Arica', lat: -18.4783, lng: -70.3126 },
      distanceKm: 4300,
      checkpoints: ['Punta Arenas', 'Puerto Montt', 'Temuco', 'Santiago', 'La Serena', 'Antofagasta', 'Iquique', 'Arica'],
    },
  },
  {
    name: 'Argentina',
    code: 'AR',
    tipToTip: {
      start: { name: 'Ushuaia', lat: -54.8019, lng: -68.3030 },
      end: { name: 'La Quiaca', lat: -22.1044, lng: -65.5933 },
      distanceKm: 5200,
      checkpoints: ['Ushuaia', 'El Calafate', 'Bariloche', 'Mendoza', 'Cordoba', 'Tucuman', 'Salta', 'La Quiaca'],
    },
  },
  {
    name: 'Thailand',
    code: 'TH',
    tipToTip: {
      start: { name: 'Hat Yai', lat: 7.0040, lng: 100.4747 },
      end: { name: 'Chiang Rai', lat: 19.9105, lng: 99.8406 },
      distanceKm: 1800,
      checkpoints: ['Hat Yai', 'Surat Thani', 'Bangkok', 'Ayutthaya', 'Chiang Mai', 'Chiang Rai'],
    },
  },
  {
    name: 'South Africa',
    code: 'ZA',
    tipToTip: {
      start: { name: 'Cape Agulhas', lat: -34.8333, lng: 20.0167 },
      end: { name: 'Musina', lat: -22.3382, lng: 30.0404 },
      distanceKm: 1800,
      checkpoints: ['Cape Agulhas', 'Cape Town', 'Bloemfontein', 'Johannesburg', 'Polokwane', 'Musina'],
    },
  },
  {
    name: 'Peru',
    code: 'PE',
    tipToTip: {
      start: { name: 'Tacna', lat: -18.0146, lng: -70.2536 },
      end: { name: 'Tumbes', lat: -3.5669, lng: -80.4515 },
      distanceKm: 2600,
      checkpoints: ['Tacna', 'Arequipa', 'Cusco', 'Lima', 'Trujillo', 'Chiclayo', 'Tumbes'],
    },
  },
]

// Transport modes with speed, cost per km, and difficulty multiplier
export const transportModes = [
  {
    id: 'motorbike',
    name: 'Motorbike',
    emoji: '\u{1F3CD}\uFE0F',
    kmPerDay: { min: 200, max: 400 },
    costPerKm: 0.08, // USD
    dailyCost: 25, // base daily cost (fuel, minor maintenance)
    difficulty: 2,
    description: 'Fastest, most adventurous, highest cost',
  },
  {
    id: 'bicycle',
    name: 'Bicycle',
    emoji: '\u{1F6B2}',
    kmPerDay: { min: 60, max: 120 },
    costPerKm: 0.01,
    dailyCost: 5,
    difficulty: 4,
    description: 'Slow, cheap, hardcore',
  },
  {
    id: 'public',
    name: 'Public Transport',
    emoji: '\u{1F68C}',
    kmPerDay: { min: 150, max: 300 },
    costPerKm: 0.05,
    dailyCost: 15,
    difficulty: 2,
    description: 'Unpredictable, budget-friendly, social',
  },
  {
    id: 'walking',
    name: 'Walking',
    emoji: '\u{1F6B6}',
    kmPerDay: { min: 20, max: 35 },
    costPerKm: 0.0,
    dailyCost: 3,
    difficulty: 5,
    description: 'Extreme mode, longest time, near zero cost',
  },
]
