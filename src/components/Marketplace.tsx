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
      crop: 'Fresh Tomatoes',
      farmer: 'Mary Wanjiku',
      location: 'Kiambu County',
      price: 'KSh 80/kg',
      quantity: '500kg available',
      rating: 4.8,
      trend: 'up',
      image: cropsImage,
      quality: 'Premium',
      harvest: '2 days ago'
    },
    {
      id: 2,
      crop: 'Organic Corn',
      farmer: 'James Mwangi',
      location: 'Nakuru County',
      price: 'KSh 45/kg',
      quantity: '1.2 tons available',
      rating: 4.9,
      trend: 'up',
      image: cropsImage,
      quality: 'Organic',
      harvest: '1 day ago'
    },
    {
      id: 3,
      crop: 'Green Lettuce',
      farmer: 'Sarah Achieng',
      location: 'Kisumu County',
      price: 'KSh 60/kg',
      quantity: '200kg available',
      rating: 4.7,
      trend: 'down',
      image: cropsImage,
      quality: 'Fresh',
      harvest: '4 hours ago'
    }
  ];

  const categories = ['All', 'Vegetables', 'Grains', 'Fruits', 'Herbs', 'Organic'];

  return (
    <div className="pb-20 px-4 pt-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Marketplace</h1>
        <p className="text-muted-foreground text-sm">Find fresh produce from local farmers</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search crops, farmers, location..." 
            className="pl-10 h-12 border-border/50 focus:border-primary transition-smooth"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2 border-primary/20">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === 'All' ? 'default' : 'outline'}
                size="sm"
                className={cat === 'All' ? 'bg-primary' : 'border-border/50'}
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
          <CardTitle className="text-base">Market Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <TrendingUp className="h-4 w-4 text-market-up mr-1" />
                <span className="text-sm font-medium text-market-up">+12%</span>
              </div>
              <p className="text-xs text-muted-foreground">Tomatoes</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <TrendingUp className="h-4 w-4 text-market-up mr-1" />
                <span className="text-sm font-medium text-market-up">+8%</span>
              </div>
              <p className="text-xs text-muted-foreground">Corn</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <TrendingDown className="h-4 w-4 text-market-down mr-1" />
                <span className="text-sm font-medium text-market-down">-3%</span>
              </div>
              <p className="text-xs text-muted-foreground">Lettuce</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Listings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Available Produce</h2>
          <span className="text-sm text-muted-foreground">{listings.length} listings</span>
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
                      <p className="text-sm text-muted-foreground">by {listing.farmer}</p>
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
                    {listing.location} • Harvested {listing.harvest}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-primary">{listing.price}</p>
                      <p className="text-xs text-muted-foreground">{listing.quantity}</p>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary-dark transition-smooth">
                      Contact
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
          <h3 className="text-lg font-semibold mb-2">Got fresh produce to sell?</h3>
          <p className="text-sm opacity-90 mb-4">Connect directly with buyers in your region</p>
          <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Post Your Harvest
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}