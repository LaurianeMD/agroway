import { CreditCard, Smartphone, Star, TrendingUp, Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function Payments() {
  const paymentMethods = [
    { id: 1, name: 'M-Pesa', type: 'mobile', number: '***-***-2847', active: true, logo: '💰' },
    { id: 2, name: 'Orange Money', type: 'mobile', number: '***-***-9156', active: true, logo: '🟠' },
    { id: 3, name: 'Wave', type: 'mobile', number: '***-***-3742', active: false, logo: '🌊' },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'received',
      amount: 'KSh 9,600',
      from: 'Sarah Achieng',
      description: 'Payment for 120kg Fresh Lettuce',
      date: '2 hours ago',
      status: 'completed',
      method: 'M-Pesa'
    },
    {
      id: 2,
      type: 'sent',
      amount: 'KSh 4,500',
      to: 'James Mwangi',
      description: 'Payment for 100kg Corn Seeds',
      date: '1 day ago',
      status: 'completed',
      method: 'Orange Money'
    },
    {
      id: 3,
      type: 'received',
      amount: 'KSh 12,800',
      from: 'Mary Wanjiku',
      description: 'Payment for 160kg Premium Tomatoes',
      date: '3 days ago',
      status: 'pending',
      method: 'M-Pesa'
    }
  ];

  const ratings = [
    {
      id: 1,
      name: 'Sarah Achieng',
      avatar: 'SA',
      rating: 5,
      review: 'Excellent quality lettuce, very fresh and delivered on time. Highly recommended farmer!',
      date: '2 days ago',
      transaction: 'Fresh Lettuce Purchase'
    },
    {
      id: 2,
      name: 'Peter Ochieng',
      avatar: 'PO',
      rating: 4,
      review: 'Good quality corn, fair pricing. Delivery was a bit delayed but overall satisfied.',
      date: '1 week ago',
      transaction: 'Corn Seeds Purchase'
    },
    {
      id: 3,
      name: 'Mary Wanjiku',
      avatar: 'MW',
      rating: 5,
      review: 'Amazing tomatoes! Perfect ripeness and excellent packaging. Will buy again.',
      date: '2 weeks ago',
      transaction: 'Premium Tomatoes'
    }
  ];

  const stats = {
    totalEarnings: 'KSh 156,400',
    thisMonth: 'KSh 43,200',
    averageRating: 4.8,
    totalTransactions: 47
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'pending': return 'text-warning';
      case 'failed': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'pending': return Clock;
      case 'failed': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="pb-20 px-4 pt-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Payments & Ratings</h1>
        <p className="text-muted-foreground text-sm">Manage transactions and view feedback</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="shadow-soft">
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-6 w-6 mx-auto mb-2 text-success" />
            <p className="text-lg font-bold text-foreground">{stats.totalEarnings}</p>
            <p className="text-xs text-muted-foreground">Total Earnings</p>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4 text-center">
            <CreditCard className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-lg font-bold text-foreground">{stats.thisMonth}</p>
            <p className="text-xs text-muted-foreground">This Month</p>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4 text-center">
            <Star className="h-6 w-6 mx-auto mb-2 text-warning fill-warning" />
            <p className="text-lg font-bold text-foreground">{stats.averageRating}</p>
            <p className="text-xs text-muted-foreground">Avg Rating</p>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4 text-center">
            <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-lg font-bold text-foreground">{stats.totalTransactions}</p>
            <p className="text-xs text-muted-foreground">Transactions</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Methods */}
      <Card className="mb-6 shadow-soft">
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span className="flex items-center">
              <Smartphone className="h-5 w-5 mr-2 text-primary" />
              Payment Methods
            </span>
            <Button variant="ghost" size="sm" className="text-primary">
              Add New
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg">
                  {method.logo}
                </div>
                <div>
                  <p className="font-medium text-sm">{method.name}</p>
                  <p className="text-xs text-muted-foreground">{method.number}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={method.active ? "default" : "secondary"} className="text-xs">
                  {method.active ? "Active" : "Inactive"}
                </Badge>
                <Button variant="ghost" size="sm">
                  •••
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="mb-6 shadow-soft">
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span>Recent Transactions</span>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentTransactions.map((transaction) => {
            const StatusIcon = getStatusIcon(transaction.status);
            return (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    transaction.type === 'received' ? 'bg-success/10' : 'bg-primary/10'
                  }`}>
                    <TrendingUp className={`h-4 w-4 ${
                      transaction.type === 'received' ? 'text-success rotate-0' : 'text-primary rotate-180'
                    }`} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{transaction.description}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">
                        {transaction.type === 'received' ? 'from' : 'to'} {transaction.from || transaction.to}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {transaction.method}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold text-sm ${
                    transaction.type === 'received' ? 'text-success' : 'text-foreground'
                  }`}>
                    {transaction.type === 'received' ? '+' : '-'}{transaction.amount}
                  </p>
                  <div className="flex items-center gap-1">
                    <StatusIcon className={`h-3 w-3 ${getStatusColor(transaction.status)}`} />
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Ratings & Reviews */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-warning fill-warning" />
              Recent Reviews
            </span>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {ratings.map((rating) => (
            <div key={rating.id} className="p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {rating.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{rating.name}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < rating.rating ? 'text-warning fill-warning' : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{rating.transaction} • {rating.date}</p>
                  <p className="text-sm text-foreground">{rating.review}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}