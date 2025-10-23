import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Phone, Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const nigerianStates = [
  "All States",
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT",
  "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
  "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
  "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const tradeCategories = [
  "All Trades",
  "Electrician",
  "Plumber",
  "Carpenter",
  "Mason/Bricklayer",
  "Painter",
  "Tiler",
  "Welder",
  "AC/Refrigeration Technician",
  "Auto Mechanic",
  "Generator Technician",
  "Upholsterer",
  "Aluminum/Glass Installer",
  "Roofer",
  "POP Installer",
];

// Mock data - will be replaced with real data from backend
const mockArtisans = [
  {
    id: 1,
    name: "Chinedu Okafor",
    trade: "Electrician",
    experience: "8 years",
    rating: 4.8,
    reviews: 47,
    location: "Ikeja, Lagos",
    state: "Lagos",
    phone: "08012345678",
    email: "chinedu@example.com",
    verified: true,
  },
  {
    id: 2,
    name: "Aisha Mohammed",
    trade: "Plumber",
    experience: "5 years",
    rating: 4.9,
    reviews: 32,
    location: "Wuse, FCT",
    state: "FCT",
    phone: "08098765432",
    email: "aisha@example.com",
    verified: true,
  },
  {
    id: 3,
    name: "Emeka Nwosu",
    trade: "Carpenter",
    experience: "12 years",
    rating: 4.7,
    reviews: 68,
    location: "Surulere, Lagos",
    state: "Lagos",
    phone: "08123456789",
    email: "emeka@example.com",
    verified: true,
  },
  {
    id: 4,
    name: "Fatima Bello",
    trade: "Painter",
    experience: "6 years",
    rating: 4.6,
    reviews: 28,
    location: "GRA, Kano",
    state: "Kano",
    phone: "08087654321",
    email: "fatima@example.com",
    verified: false,
  },
  {
    id: 5,
    name: "Olusegun Adeyemi",
    trade: "Electrician",
    experience: "10 years",
    rating: 4.9,
    reviews: 54,
    location: "Bodija, Oyo",
    state: "Oyo",
    phone: "08056789012",
    email: "olusegun@example.com",
    verified: true,
  },
  {
    id: 6,
    name: "Ngozi Eze",
    trade: "Tiler",
    experience: "7 years",
    rating: 4.8,
    reviews: 41,
    location: "Trans Ekulu, Enugu",
    state: "Enugu",
    phone: "08034567890",
    email: "ngozi@example.com",
    verified: true,
  },
];

const FindArtisan = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrade, setSelectedTrade] = useState("All Trades");
  const [selectedState, setSelectedState] = useState("All States");

  const filteredArtisans = mockArtisans.filter((artisan) => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTrade = selectedTrade === "All Trades" || artisan.trade === selectedTrade;
    const matchesState = selectedState === "All States" || artisan.state === selectedState;
    
    return matchesSearch && matchesTrade && matchesState;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="glass border-b border-border/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <img src={logo} alt="FixRite Logo" className="h-12 animate-float" />
            <div className="w-24" /> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Page Title */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Find Trusted Artisans Near You
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Connect with verified skilled professionals across Nigeria
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-8 shadow-card animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative md:col-span-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Trade Filter */}
            <div>
              <Select value={selectedTrade} onValueChange={setSelectedTrade}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select Trade" />
                </SelectTrigger>
                <SelectContent>
                  {tradeCategories.map((trade) => (
                    <SelectItem key={trade} value={trade}>
                      {trade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* State Filter */}
            <div>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {nigerianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Found <span className="font-bold text-primary">{filteredArtisans.length}</span> artisan{filteredArtisans.length !== 1 ? 's' : ''}
            </p>
            {(searchTerm || selectedTrade !== "All Trades" || selectedState !== "All States") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTrade("All Trades");
                  setSelectedState("All States");
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up stagger-1">
          {filteredArtisans.length > 0 ? (
            filteredArtisans.map((artisan) => (
              <Card key={artisan.id} className="hover-lift hover-glow overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                        {artisan.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {artisan.location}
                      </CardDescription>
                    </div>
                    {artisan.verified && (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-semibold">
                      {artisan.trade}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{artisan.experience}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-bold text-foreground">{artisan.rating}</span>
                    <span className="text-sm text-muted-foreground">({artisan.reviews} reviews)</span>
                  </div>

                  <div className="pt-2 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{artisan.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{artisan.email}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-4 border-t border-border/50">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover-scale">
                    Contact Artisan
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                No artisans found matching your criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTrade("All Trades");
                  setSelectedState("All States");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FindArtisan;
