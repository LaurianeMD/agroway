import { Cloud, Sun, CloudRain, Wind, Eye, Thermometer, Droplets, Gauge } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Weather() {
  const currentWeather = {
    location: 'Nairobi, Kenya',
    temperature: 26,
    condition: 'Partly Cloudy',
    humidity: 68,
    windSpeed: 12,
    visibility: 10,
    pressure: 1013,
    uvIndex: 6,
    feelsLike: 28
  };

  const hourlyForecast = [
    { time: '12:00', temp: 26, condition: 'sunny', icon: Sun },
    { time: '13:00', temp: 28, condition: 'sunny', icon: Sun },
    { time: '14:00', temp: 29, condition: 'cloudy', icon: Cloud },
    { time: '15:00', temp: 27, condition: 'rainy', icon: CloudRain },
    { time: '16:00', temp: 25, condition: 'rainy', icon: CloudRain },
  ];

  const weeklyForecast = [
    { day: 'Today', high: 29, low: 22, condition: 'Partly Cloudy', icon: Cloud, humidity: 68 },
    { day: 'Tomorrow', high: 31, low: 24, condition: 'Sunny', icon: Sun, humidity: 55 },
    { day: 'Wednesday', high: 27, low: 20, condition: 'Rainy', icon: CloudRain, humidity: 85 },
    { day: 'Thursday', high: 28, low: 21, condition: 'Cloudy', icon: Cloud, humidity: 72 },
    { day: 'Friday', high: 30, low: 23, condition: 'Sunny', icon: Sun, humidity: 58 },
  ];

  const farmingAlerts = [
    { type: 'warning', message: 'Light rain expected this afternoon - good for irrigation', priority: 'medium' },
    { type: 'info', message: 'Optimal conditions for planting next week', priority: 'low' },
    { type: 'success', message: 'Perfect humidity levels for crop growth', priority: 'high' },
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'warning': return 'text-warning';
      case 'success': return 'text-success';
      default: return 'text-primary';
    }
  };

  return (
    <div className="pb-20 px-4 pt-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Weather & Climate</h1>
        <p className="text-muted-foreground text-sm">Track conditions for better farming decisions</p>
      </div>

      {/* Current Weather */}
      <Card className="mb-6 shadow-medium bg-gradient-hero text-white">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center mb-2">
              <Cloud className="h-16 w-16 text-white/90" />
            </div>
            <h2 className="text-4xl font-bold mb-1">{currentWeather.temperature}°C</h2>
            <p className="text-lg opacity-90">{currentWeather.condition}</p>
            <p className="text-sm opacity-75">{currentWeather.location}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-semibold">{currentWeather.feelsLike}°C</p>
              <p className="text-sm opacity-75">Feels like</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold">{currentWeather.humidity}%</p>
              <p className="text-sm opacity-75">Humidity</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Farming Alerts */}
      <Card className="mb-6 shadow-soft">
        <CardHeader>
          <CardTitle className="text-base">Farming Alerts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {farmingAlerts.map((alert, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <div className={`w-2 h-2 rounded-full mt-2 ${getAlertColor(alert.type)} bg-current`} />
              <div className="flex-1">
                <p className="text-sm text-foreground">{alert.message}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {alert.priority}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Hourly Forecast */}
      <Card className="mb-6 shadow-soft">
        <CardHeader>
          <CardTitle className="text-base">Today's Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {hourlyForecast.map((hour, index) => (
              <div key={index} className="flex flex-col items-center min-w-16 text-center">
                <p className="text-xs text-muted-foreground mb-2">{hour.time}</p>
                <hour.icon className="h-6 w-6 mb-2 text-primary" />
                <p className="text-sm font-medium">{hour.temp}°</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics */}
      <Card className="mb-6 shadow-soft">
        <CardHeader>
          <CardTitle className="text-base">Detailed Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Wind className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{currentWeather.windSpeed} km/h</p>
                <p className="text-xs text-muted-foreground">Wind Speed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{currentWeather.visibility} km</p>
                <p className="text-xs text-muted-foreground">Visibility</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Gauge className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{currentWeather.pressure} hPa</p>
                <p className="text-xs text-muted-foreground">Pressure</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sun className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">UV {currentWeather.uvIndex}</p>
                <p className="text-xs text-muted-foreground">UV Index</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 5-Day Forecast */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-base">5-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {weeklyForecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-smooth">
              <div className="flex items-center gap-3">
                <day.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">{day.day}</p>
                  <p className="text-xs text-muted-foreground">{day.condition}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Droplets className="h-3 w-3 text-weather-rainy" />
                  <span className="text-xs text-muted-foreground">{day.humidity}%</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{day.high}°/{day.low}°</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}