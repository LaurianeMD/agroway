import { Search, Filter, MapPin, Star, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import cropsImage from '@/assets/crops-variety.jpg';

export function Marketplace() {
  const listings = [
    {
      id: 1,
      crop: 'Tomates Fraîches',
      farmer: 'Aminata Diallo',
      location: 'Région de Thiès',
      price: '500 CFA/kg',
      quantity: '500kg disponibles',
      rating: 4.8,
      trend: 'up',
      image: cropsImage,
      quality: 'Premium',
      harvest: 'il y a 2 jours'
    },
    {
      id: 2,
      crop: 'Mil Biologique',
      farmer: 'Ousmane Ba',
      location: 'Région de Kaolack',
      price: '280 CFA/kg',
      quantity: '1.2 tonnes disponibles',
      rating: 4.9,
      trend: 'up',
      image: cropsImage,
      quality: 'Bio',
      harvest: 'il y a 1 jour'
    },
    {
      id: 3,
      crop: 'Oignons Verts',
      farmer: 'Fatou Seck',
      location: 'Vallée du Fleuve',
      price: '350 CFA/kg',
      quantity: '200kg disponibles',
      rating: 4.7,
      trend: 'down',
      image: cropsImage,
      quality: 'Frais',
      harvest: 'il y a 4 heures'
    }
  ];

  const categories = ['Tout', 'Légumes', 'Céréales', 'Fruits', 'Herbes', 'Bio'];

  return (
    <div className="pb-20 px-4 pt-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Marché</h1>
        <p className="text-muted-foreground text-sm">Trouvez des produits frais d'agriculteurs locaux</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Rechercher cultures, agriculteurs, localisation..." 
            className="pl-10 h-12 border-border/50 focus:border-primary transition-smooth"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2 border-primary/20">
            <Filter className="h-4 w-4" />
            Filtres
          </Button>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === 'Tout' ? 'default' : 'outline'}
                size="sm"
                className={cat === 'Tout' ? 'bg-primary' : 'border-border/50'}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Market Trends */}
      <Card className="mb-6 shadow-soft">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Tendances du Marché</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <TrendingUp className="h-4 w-4 text-market-up mr-1" />
                <span className="text-sm font-medium text-market-up">+12%</span>
              </div>
              <p className="text-xs text-muted-foreground">Tomates</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <TrendingUp className="h-4 w-4 text-market-up mr-1" />
                <span className="text-sm font-medium text-market-up">+8%</span>
              </div>
              <p className="text-xs text-muted-foreground">Mil</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <TrendingDown className="h-4 w-4 text-market-down mr-1" />
                <span className="text-sm font-medium text-market-down">-3%</span>
              </div>
              <p className="text-xs text-muted-foreground">Oignons</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Listings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Produits Disponibles</h2>
          <span className="text-sm text-muted-foreground">{listings.length} annonces</span>
        </div>
        
        {listings.map((listing) => (
          <Card key={listing.id} className="shadow-soft hover:shadow-medium transition-smooth">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <img 
                  src={listing.image} 
                  alt={listing.crop}
                  className="w-20 h-20 rounded-lg object-cover bg-muted"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-base text-foreground truncate">
                        {listing.crop}
                      </h3>
                      <p className="text-sm text-muted-foreground">par {listing.farmer}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {listing.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-market-up" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-market-down" />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {listing.quality}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-warning text-warning" />
                      <span className="text-xs text-muted-foreground">{listing.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {listing.location} • Récolté {listing.harvest}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-primary">{listing.price}</p>
                      <p className="text-xs text-muted-foreground">{listing.quantity}</p>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary-dark transition-smooth">
                      Contacter
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Post Harvest CTA */}
      <Card className="mt-6 bg-gradient-primary text-white shadow-glow">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Vous avez des produits frais à vendre?</h3>
          <p className="text-sm opacity-90 mb-4">Connectez-vous directement avec les acheteurs de votre région</p>
          <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Publier Votre Récolte
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}