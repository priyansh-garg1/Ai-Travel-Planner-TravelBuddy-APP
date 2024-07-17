export const GetPhotoRef = async (placeName) => {
  //   const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='+placeName+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY
  const uri =
    "https://maps.googleapis.com/maps/api/place/textsearch/json" +
    "?query=" +
    placeName +
    "&key=" +
    process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY;
  const resp = await fetch(uri);
  const result = await resp.json();
  return result;
};
