import { TrendingUp, MapPin, Thermometer, Droplets, AlertCircle, Leaf, Cloud, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-agriculture.jpg';

export function Dashboard() {
  const recommendations = [
    { crop: 'Tomates', confidence: 92, season: 'Saison Haute', profit: '+15%' },
    { crop: 'Mil', confidence: 87, season: 'Bon Moment', profit: '+8%' },
    { crop: 'Oignons', confidence: 79, season: 'Saison Correcte', profit: '+5%' },
  ];

  const weatherData = {
    temperature: '26°C',
    humidity: '68%',
    rainfall: '12mm',
    forecast: 'Partly Cloudy'
  };

  return (
    <div className="pb-20 px-4 pt-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Bonjour, Agriculteur Mamadou</h1>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">Dakar, Sénégal</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
            <Leaf className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative mb-6 rounded-xl overflow-hidden shadow-medium">
        <img 
          src={heroImage} 
          alt="Agricultural landscape" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-semibold mb-1">Recommandations IA des Cultures</h2>
          <p className="text-sm opacity-90">Basé sur votre localisation et les tendances du marché</p>
        </div>
      </div>

      {/* Quick Weather */}
      <Card className="mb-6 shadow-soft">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center">
            <Cloud className="h-5 w-5 mr-2 text-primary" />
            Météo d'Aujourd'hui
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <Thermometer className="h-5 w-5 mx-auto mb-1 text-weather-sunny" />
              <p className="text-sm font-medium">{weatherData.temperature}</p>
              <p className="text-xs text-muted-foreground">Temp</p>
            </div>
            <div className="text-center">
              <Droplets className="h-5 w-5 mx-auto mb-1 text-weather-rainy" />
              <p className="text-sm font-medium">{weatherData.humidity}</p>
              <p className="text-xs text-muted-foreground">Humidité</p>
            </div>
            <div className="text-center">
              <Cloud className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-sm font-medium">{weatherData.rainfall}</p>
              <p className="text-xs text-muted-foreground">Pluie</p>
            </div>
            <div className="text-center">
              <AlertCircle className="h-5 w-5 mx-auto mb-1 text-primary" />
              <p className="text-sm font-medium">Bien</p>
              <p className="text-xs text-muted-foreground">Conditions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crop Recommendations */}
      <Card className="mb-6 shadow-soft">
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              Cultures Recommandées
            </span>
            <Button variant="ghost" size="sm" className="text-primary">
              Voir Tout
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-sm">{rec.crop}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {rec.confidence}% confiance
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{rec.season}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-crop-healthy">{rec.profit}</p>
                <p className="text-xs text-muted-foreground">profit</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button className="h-16 bg-gradient-primary hover:opacity-90 transition-smooth shadow-soft">
          <div className="text-center">
            <Leaf className="h-6 w-6 mx-auto mb-1" />
            <span className="text-sm">Publier Récolte</span>
          </div>
        </Button>
        <Button variant="outline" className="h-16 border-primary/20 hover:bg-primary/5 transition-smooth">
          <div className="text-center">
            <ShoppingCart className="h-6 w-6 mx-auto mb-1 text-primary" />
            <span className="text-sm">Parcourir Marché</span>
          </div>
        </Button>
      </div>
    </div>
  );
}