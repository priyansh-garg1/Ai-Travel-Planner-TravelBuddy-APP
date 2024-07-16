export const SelectTravlersList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole travelers in exploration",
    icon: "🛩",
    pepole: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "🥂",
    pepole: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventure",
    icon: "🏡",
    pepole: "3 to 5",
  },
  {
    id: 4,
    title: "Freinds",
    desc: "A bunch of thrill-seekes",
    icon: "🏝",
    pepole: "5-10",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location}, for {totalDay} Days and {totalNight} Night for {traveler} with a {budget} budget with a flight details , Flight Price with Booking url, Hotels options list with Hotel Name, Hotel Address, Price, Hotel Image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket pricing, Time to travel each of the location for {totalDay} days and {totalNight} night with each day plan with best time to visit and also in key add one locationdetails key which contains an object about location details of {location} along with image link with correct source image url in JSON format.";
