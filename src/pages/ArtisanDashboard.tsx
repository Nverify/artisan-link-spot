import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Briefcase, 
  Wallet, 
  MessageSquare, 
  Star, 
  Bell, 
  Settings, 
  LogOut,
  Clock,
  CheckCircle,
  TrendingUp,
  Calendar,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const ArtisanDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - will be replaced with real data from database
  const artisan = {
    name: "Adewale Johnson",
    profession: "Electrician",
    avatar: "",
    rating: 4.8,
    reviewCount: 47,
    completedJobs: 156,
    memberSince: "March 2024"
  };

  const stats = {
    pendingJobs: 3,
    activeJobs: 2,
    completedThisMonth: 12,
    earnings: 485000,
    escrowBalance: 75000
  };

  const recentJobs = [
    { id: 1, title: "Electrical Wiring Installation", customer: "Mrs. Okafor", status: "in_progress", amount: 45000, date: "Dec 24, 2025" },
    { id: 2, title: "Generator Repair", customer: "Mr. Adeyemi", status: "pending", amount: 25000, date: "Dec 23, 2025" },
    { id: 3, title: "House Rewiring", customer: "Chief Nwankwo", status: "completed", amount: 180000, date: "Dec 20, 2025" },
    { id: 4, title: "Air Conditioner Installation", customer: "Dr. Bello", status: "pending", amount: 35000, date: "Dec 22, 2025" },
  ];

  const notifications = [
    { id: 1, message: "New job request from Mrs. Okafor", time: "2 hours ago", unread: true },
    { id: 2, message: "Payment of ₦180,000 released to your account", time: "1 day ago", unread: false },
    { id: 3, message: "You received a 5-star review!", time: "2 days ago", unread: false },
  ];

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "jobs", label: "My Jobs", icon: Briefcase },
    { id: "earnings", label: "Earnings", icon: Wallet },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Pending</Badge>;
      case "in_progress":
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">In Progress</Badge>;
      case "completed":
        return <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Completed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-card border-r border-border
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo & Close */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-lg text-foreground">Artisan</span>
            </div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Profile Summary */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarImage src={artisan.avatar} />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {artisan.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">{artisan.name}</p>
                <p className="text-sm text-muted-foreground">{artisan.profession}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium text-foreground">{artisan.rating}</span>
              <span className="text-muted-foreground text-sm">({artisan.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                      transition-colors duration-200
                      ${activeTab === item.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }
                    `}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border">
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
              onClick={() => navigate("/")}
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-between px-4 py-3 lg:px-6">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-bold text-foreground capitalize">{activeTab}</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-4 lg:p-6 max-w-7xl mx-auto">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="hover-lift">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                        <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{stats.pendingJobs}</p>
                        <p className="text-xs text-muted-foreground">Pending Jobs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{stats.activeJobs}</p>
                        <p className="text-xs text-muted-foreground">Active Jobs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{stats.completedThisMonth}</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Wallet className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">₦{stats.escrowBalance.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">In Escrow</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Earnings Overview */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Monthly Earnings</CardTitle>
                  <CardDescription>Your earnings this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">₦{stats.earnings.toLocaleString()}</span>
                    <span className="text-sm text-green-600 dark:text-green-400 mb-1">+23% from last month</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress to goal (₦600,000)</span>
                      <span className="font-medium text-foreground">{Math.round((stats.earnings / 600000) * 100)}%</span>
                    </div>
                    <Progress value={(stats.earnings / 600000) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Jobs */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle className="text-lg">Recent Jobs</CardTitle>
                      <CardDescription>Your latest job activities</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentJobs.map((job) => (
                        <div 
                          key={job.id} 
                          className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-foreground truncate">{job.title}</p>
                            <p className="text-sm text-muted-foreground">{job.customer} • {job.date}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1 ml-4">
                            {getStatusBadge(job.status)}
                            <span className="text-sm font-medium text-foreground">₦{job.amount.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Notifications */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle className="text-lg">Notifications</CardTitle>
                      <CardDescription>Stay updated on your activities</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          className={`flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                            notification.unread ? 'bg-primary/5 border border-primary/10' : 'bg-muted/50 hover:bg-muted'
                          }`}
                        >
                          <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                            notification.unread ? 'bg-primary' : 'bg-muted-foreground/30'
                          }`} />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-foreground">{notification.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button className="gap-2">
                      <Calendar className="h-4 w-4" />
                      Update Availability
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <User className="h-4 w-4" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Wallet className="h-4 w-4" />
                      Withdraw Funds
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="space-y-6">
              {/* Profile Completeness */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Profile Completeness</span>
                    <span className="text-sm font-bold text-primary">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">Add a profile photo and certifications to reach 100%</p>
                </CardContent>
              </Card>

              {/* Avatar & Basic Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Avatar className="h-28 w-28 border-4 border-primary/20">
                      <AvatarImage src={artisan.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary font-bold text-2xl">
                        {artisan.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-center sm:text-left space-y-2">
                      <h2 className="text-2xl font-bold text-foreground">{artisan.name}</h2>
                      <p className="text-muted-foreground font-medium">{artisan.profession}</p>
                      <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-semibold text-foreground">{artisan.rating}</span> ({artisan.reviewCount} reviews)
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" /> {artisan.completedJobs} jobs
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Settings className="h-4 w-4" /> Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* About */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Certified electrician with 8+ years of experience in residential and commercial electrical installations, repairs, and maintenance across Lagos.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Details */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Contact Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted"><MessageSquare className="h-4 w-4 text-muted-foreground" /></div>
                      <span className="text-foreground">+234 801 234 5678</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted"><User className="h-4 w-4 text-muted-foreground" /></div>
                      <span className="text-foreground">adewale.j@email.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted"><Calendar className="h-4 w-4 text-muted-foreground" /></div>
                      <span className="text-foreground">Ikeja, Lagos</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Stats & Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="font-medium text-foreground">8 years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Member Since</span>
                      <span className="font-medium text-foreground">{artisan.memberSince}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Verification</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Verified</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Completed Jobs</span>
                      <span className="font-bold text-foreground">{artisan.completedJobs}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Skills */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Skills & Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Wiring", "Generator Repair", "AC Installation", "Solar Panel", "House Rewiring"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              {/* Rating Summary */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="text-center">
                      <p className="text-5xl font-bold text-foreground">{artisan.rating}</p>
                      <div className="flex items-center gap-1 mt-2 justify-center">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className={`h-5 w-5 ${i <= Math.round(artisan.rating) ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`} />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{artisan.reviewCount} reviews</p>
                    </div>
                    <div className="flex-1 w-full space-y-2">
                      {[
                        { stars: 5, count: 30 },
                        { stars: 4, count: 10 },
                        { stars: 3, count: 4 },
                        { stars: 2, count: 2 },
                        { stars: 1, count: 1 },
                      ].map(row => (
                        <div key={row.stars} className="flex items-center gap-2 text-sm">
                          <span className="w-8 text-muted-foreground text-right">{row.stars}★</span>
                          <Progress value={(row.count / artisan.reviewCount) * 100} className="h-2 flex-1" />
                          <span className="w-6 text-muted-foreground">{row.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Review List */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { id: 1, customer: "Mrs. Okafor", rating: 5, date: "Dec 20, 2025", comment: "Excellent work on my house rewiring. Very professional and completed on time. Highly recommend!" },
                    { id: 2, customer: "Mr. Adeyemi", rating: 5, date: "Dec 15, 2025", comment: "Fixed my generator quickly and at a fair price. Very knowledgeable." },
                    { id: 3, customer: "Dr. Bello", rating: 4, date: "Dec 10, 2025", comment: "Good AC installation. Came on time and did a clean job. Would hire again." },
                    { id: 4, customer: "Chief Nwankwo", rating: 5, date: "Dec 5, 2025", comment: "Outstanding electrical work. Very thorough and explained everything clearly." },
                    { id: 5, customer: "Mrs. Eze", rating: 4, date: "Nov 28, 2025", comment: "Reliable and professional. Installed solar panels perfectly." },
                  ].map(review => (
                    <div key={review.id} className="p-4 rounded-lg bg-muted/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                              {review.customer.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-foreground text-sm">{review.customer}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map(i => (
                            <Star key={i} className={`h-3.5 w-3.5 ${i <= review.rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab !== "overview" && activeTab !== "profile" && activeTab !== "reviews" && (
            <Card className="min-h-[400px] flex items-center justify-center">
              <CardContent className="text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const Icon = sidebarItems.find(item => item.id === activeTab)?.icon;
                    return Icon ? <Icon className="h-8 w-8 text-muted-foreground" /> : null;
                  })()}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 capitalize">{activeTab}</h3>
                <p className="text-muted-foreground">This section is coming soon. Enable Lovable Cloud to unlock full functionality.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default ArtisanDashboard;
