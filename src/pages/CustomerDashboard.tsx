import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  Calendar, 
  Heart, 
  MessageSquare, 
  Bell, 
  Settings, 
  Search,
  Star,
  Clock,
  CheckCircle,
  MapPin
} from "lucide-react";

const CustomerDashboard = () => {
  const navigate = useNavigate();

  const activeRequests = [
    { id: 1, service: "Plumbing Repair", artisan: "John Doe", status: "In Progress", date: "Dec 28, 2025", avatar: "JD" },
    { id: 2, service: "Electrical Wiring", artisan: "Sarah Smith", status: "Scheduled", date: "Dec 30, 2025", avatar: "SS" },
  ];

  const completedBookings = [
    { id: 1, service: "AC Maintenance", artisan: "Mike Johnson", rating: 5, date: "Dec 20, 2025", cost: "₦15,000" },
    { id: 2, service: "Carpentry Work", artisan: "David Brown", rating: 4, date: "Dec 15, 2025", cost: "₦25,000" },
    { id: 3, service: "Painting", artisan: "Emma Wilson", rating: 5, date: "Dec 10, 2025", cost: "₦35,000" },
  ];

  const favoriteArtisans = [
    { id: 1, name: "John Doe", skill: "Plumber", rating: 4.9, jobs: 150, avatar: "JD" },
    { id: 2, name: "Sarah Smith", skill: "Electrician", rating: 4.8, jobs: 120, avatar: "SS" },
    { id: 3, name: "Mike Johnson", skill: "HVAC Technician", rating: 4.7, jobs: 95, avatar: "MJ" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-6 hidden lg:block">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-foreground">Artisan Hub</span>
        </div>

        <nav className="space-y-2">
          <Button variant="secondary" className="w-full justify-start gap-3">
            <Home className="w-4 h-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Search className="w-4 h-4" />
            Find Artisans
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Calendar className="w-4 h-4" />
            My Bookings
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Heart className="w-4 h-4" />
            Favorites
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <MessageSquare className="w-4 h-4" />
            Messages
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Bell className="w-4 h-4" />
            Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Settings className="w-4 h-4" />
            Settings
          </Button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Button variant="outline" className="w-full" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Welcome back, Customer!</h1>
            <p className="text-muted-foreground mt-1">Manage your bookings and find skilled artisans</p>
          </div>
          <Button onClick={() => navigate("/find-artisan")} className="gap-2">
            <Search className="w-4 h-4" />
            Find an Artisan
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Requests</p>
                  <p className="text-2xl font-bold text-foreground">2</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed Jobs</p>
                  <p className="text-2xl font-bold text-foreground">15</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Favorite Artisans</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                  <p className="text-2xl font-bold text-foreground">₦250K</p>
                </div>
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                  <span className="text-amber-500 font-bold">₦</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Requests */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Active Requests
            </CardTitle>
            <CardDescription>Your ongoing service requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">{request.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{request.service}</p>
                      <p className="text-sm text-muted-foreground">by {request.artisan}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm text-muted-foreground">{request.date}</p>
                    </div>
                    <Badge variant={request.status === "In Progress" ? "default" : "secondary"}>
                      {request.status}
                    </Badge>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Completed Bookings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Recent Bookings
              </CardTitle>
              <CardDescription>Your completed service history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{booking.service}</p>
                      <p className="text-sm text-muted-foreground">{booking.artisan} • {booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{booking.cost}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(booking.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4">View All Bookings</Button>
            </CardContent>
          </Card>

          {/* Favorite Artisans */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Favorite Artisans
              </CardTitle>
              <CardDescription>Artisans you've saved for quick access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {favoriteArtisans.map((artisan) => (
                  <div key={artisan.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">{artisan.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{artisan.name}</p>
                        <p className="text-sm text-muted-foreground">{artisan.skill}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-medium text-foreground">{artisan.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{artisan.jobs} jobs</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4">View All Favorites</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
