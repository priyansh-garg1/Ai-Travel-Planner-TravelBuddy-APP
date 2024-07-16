/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate Travel Plan for Location : London, for 2 Days and 1 Night for Freinds with a Luxury budget with a flight details , Flight Price with Booking url, Hotels options list with Hotel Name, Hotel Address, Price, Hotel Image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket pricing, Time to travel each of the location for 2 days and 1 night with each day plan with best time to visit and also in  key add one locationdetails key which contains an object about location details  of London along with image link with correct source image url in JSON format."},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"flightDetails\": {\n    \"airline\": \"British Airways\",\n    \"flightNumber\": \"BA123\",\n    \"departureAirport\": \"JFK\",\n    \"arrivalAirport\": \"LHR\",\n    \"departureDate\": \"2023-12-15\",\n    \"departureTime\": \"10:00 AM\",\n    \"arrivalDate\": \"2023-12-15\",\n    \"arrivalTime\": \"04:00 PM\",\n    \"price\": \"$700\",\n    \"bookingUrl\": \"https://www.britishairways.com/en-us/book-flights\"\n  },\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The Ritz London\",\n      \"hotelAddress\": \"150 Piccadilly, London W1J 9BR, United Kingdom\",\n      \"price\": \"$1500 per night\",\n      \"hotelImageUrl\": \"https://www.ritzlondon.com/sites/default/files/styles/hero_image/public/2021-03/ritz-london-hero-image.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 51.5074,\n        \"longitude\": -0.1419\n      },\n      \"rating\": 4.8,\n      \"description\": \"A legendary hotel in the heart of London, known for its exquisite service, opulent interiors, and renowned afternoon tea.\"\n    },\n    {\n      \"hotelName\": \"The Dorchester\",\n      \"hotelAddress\": \"53 Park Ln, Mayfair, London W1K 1QA, United Kingdom\",\n      \"price\": \"$1200 per night\",\n      \"hotelImageUrl\": \"https://www.dorchestercollection.com/media/10886/dorchester-hotel-london-exterior.jpg?anchor=center&mode=crop&width=1600&height=900&rnd=132897635620000000\",\n      \"geoCoordinates\": {\n        \"latitude\": 51.5079,\n        \"longitude\": -0.1484\n      },\n      \"rating\": 4.7,\n      \"description\": \"An iconic hotel with a sophisticated ambiance, offering luxurious accommodations, Michelin-starred dining, and a renowned spa.\"\n    },\n    {\n      \"hotelName\": \"The Savoy\",\n      \"hotelAddress\": \"Strand, London WC2R 0EU, United Kingdom\",\n      \"price\": \"$1000 per night\",\n      \"hotelImageUrl\": \"https://www.thesavoylondon.com/media/2176/savoy-hotel-london-exterior.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 51.5084,\n        \"longitude\": -0.1248\n      },\n      \"rating\": 4.6,\n      \"description\": \"A historic hotel on the Thames, renowned for its elegant architecture, world-class dining, and captivating views.\"\n    }\n  ],\n  \"locationDetails\": {\n    \"locationName\": \"London\",\n    \"locationImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/London_skyline_from_Hammersmith_Bridge.jpg/1280px-London_skyline_from_Hammersmith_Bridge.jpg\",\n    \"locationDescription\": \"London, the capital of England and the United Kingdom, is a 21st-century metropolis with a history spanning 2,000 years. Its iconic landmarks include Buckingham Palace, the Houses of Parliament, and the Tower of London.  London is a global hub for finance, art, and culture, with world-renowned museums such as the British Museum, the National Gallery, and the Tate Modern. It's home to numerous theaters, including the West End, known for its musicals and plays.\"\n  },\n  \"dayPlan\": [\n    {\n      \"day\": \"Day 1\",\n      \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n      \"location\": {\n        \"placeName\": \"Buckingham Palace\",\n        \"placeDetails\": \"The official London residence of the British monarch. Witness the Changing of the Guard ceremony, a historic tradition that takes place daily in the forecourt of the palace.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Buckingham_Palace_from_the_air.jpg/1280px-Buckingham_Palace_from_the_air.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 51.5014,\n          \"longitude\": -0.1419\n        },\n        \"ticketPricing\": \"Free to view the Changing of the Guard ceremony\",\n        \"timeToTravel\": \"1 hour\"\n      }\n    },\n    {\n      \"day\": \"Day 1\",\n      \"time\": \"Afternoon (1:00 PM - 4:00 PM)\",\n      \"location\": {\n        \"placeName\": \"Houses of Parliament\",\n        \"placeDetails\": \"The seat of the British Parliament, home to the House of Commons and the House of Lords. Take a tour of the Palace of Westminster and admire the iconic Clock Tower, also known as Big Ben.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Houses_of_Parliament_from_south_bank.jpg/1280px-Houses_of_Parliament_from_south_bank.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 51.5007,\n          \"longitude\": -0.1245\n        },\n        \"ticketPricing\": \"£25.50 for a tour\",\n        \"timeToTravel\": \"2 hours\"\n      }\n    },\n    {\n      \"day\": \"Day 1\",\n      \"time\": \"Evening (5:00 PM - 8:00 PM)\",\n      \"location\": {\n        \"placeName\": \"Tower of London\",\n        \"placeDetails\": \"A historic castle on the north bank of the River Thames. Explore the Tower's rich history, including its use as a royal palace, prison, and armory.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tower_of_London_from_the_Thames.jpg/1280px-Tower_of_London_from_the_Thames.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 51.5073,\n          \"longitude\": -0.0761\n        },\n        \"ticketPricing\": \"£30 for adults\",\n        \"timeToTravel\": \"3 hours\"\n      }\n    },\n    {\n      \"day\": \"Day 2\",\n      \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n      \"location\": {\n        \"placeName\": \"British Museum\",\n        \"placeDetails\": \"A world-renowned museum with an extensive collection of artifacts from around the globe. Explore exhibits on ancient civilizations, art, and history.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/British_Museum_Reading_Room_with_dome.jpg/1280px-British_Museum_Reading_Room_with_dome.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 51.5199,\n          \"longitude\": -0.1282\n        },\n        \"ticketPricing\": \"Free entry\",\n        \"timeToTravel\": \"3 hours\"\n      }\n    },\n    {\n      \"day\": \"Day 2\",\n      \"time\": \"Afternoon (1:00 PM - 4:00 PM)\",\n      \"location\": {\n        \"placeName\": \"National Gallery\",\n        \"placeDetails\": \"A world-class art gallery featuring a collection of paintings from the 13th to 19th centuries. Admire masterpieces by artists such as Van Gogh, Leonardo da Vinci, and Michelangelo.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/National_Gallery_%28London%29_%282%29.jpg/1280px-National_Gallery_%28London%29_%282%29.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 51.5074,\n          \"longitude\": -0.1278\n        },\n        \"ticketPricing\": \"Free entry\",\n        \"timeToTravel\": \"2 hours\"\n      }\n    },\n    {\n      \"day\": \"Day 2\",\n      \"time\": \"Evening (5:00 PM - 8:00 PM)\",\n      \"location\": {\n        \"placeName\": \"Tate Modern\",\n        \"placeDetails\": \"A modern and contemporary art gallery housed in a former power station. Explore a diverse collection of art, including installations, sculptures, and paintings.\",\n        \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tate_Modern_2012_2.jpg/1280px-Tate_Modern_2012_2.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 51.5041,\n          \"longitude\": -0.1006\n        },\n        \"ticketPricing\": \"Free entry\",\n        \"timeToTravel\": \"2 hours\"\n      }\n    }\n  ]\n}\n```"},
      ],
    },
  ],

});
