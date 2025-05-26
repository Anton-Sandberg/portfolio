import { useEffect, useState } from "react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

const WeatherForecast = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      },
      () => {
        setError("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  }, []);

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }&units=metric&lang=sv`
      );
      if (!res.ok) throw new Error("Weather data fetch failed.");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Laddar...</p>;
  if (error) return <p className="text-error">{error}</p>;
  if (!weather) return null;

  return (
    <div className="text-sm inline-block pl-20">
      <div className="flex items-center gap-2">
        <p>{weather.name}</p>
        <p>{Math.round(weather.main.temp)}°C</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="size-10"
        />
      </div>
    </div>
  );
};

export default WeatherForecast;
