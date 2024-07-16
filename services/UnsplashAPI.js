export const GetImage = async(data) => {
  const url =
    "https://api.unsplash.com/search/photos/?page=1&query=" +
    data +
    "&client_id=" +
    process.env.EXPO_PUBLIC_UNSPLASH_API_KEY;
    const res = await fetch(url)
    const result = await res.json()
    return result?.results[0]?.urls?.full?result?.results[0]?.urls?.full:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzM2NjF8MHwxfHNlYXJjaHwxfHxQYXJpc3xlbnwwfHx8fDE3MjExMzUyMzN8MA&ixlib=rb-4.0.3&q=85";
};
