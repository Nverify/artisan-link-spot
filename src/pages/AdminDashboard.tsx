import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Hammer, 
  DollarSign, 
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  XCircle,
  Eye,
  Ban,
  Settings,
  BarChart3,
  Shield,
  Bell,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const platformStats = [
    { label: "Total Users", value: "12,450", icon: Users, change: "+12%", color: "text-primary" },
    { label: "Active Artisans", value: "3,280", icon: Hammer, change: "+8%", color: "text-accent" },
    { label: "Total Revenue", value: "₦45.2M", icon: DollarSign, change: "+23%", color: "text-green-500" },
    { label: "Pending Disputes", value: "24", icon: AlertTriangle, change: "-5%", color: "text-destructive" },
  ];

  const recentUsers = [
    { id: 1, name: "Adebayo Johnson", email: "adebayo@email.com", type: "Artisan", status: "Pending", date: "2024-01-15" },
    { id: 2, name: "Chioma Okafor", email: "chioma@email.com", type: "Customer", status: "Active", date: "2024-01-15" },
    { id: 3, name: "Emmanuel Nwachukwu", email: "emmanuel@email.com", type: "Artisan", status: "Pending", date: "2024-01-14" },
    { id: 4, name: "Fatima Abubakar", email: "fatima@email.com", type: "Customer", status: "Active", date: "2024-01-14" },
    { id: 5, name: "Gbenga Adeleke", email: "gbenga@email.com", type: "Artisan", status: "Suspended", date: "2024-01-13" },
  ];

  const disputes = [
    { id: 1, customer: "Chioma Okafor", artisan: "Adebayo Johnson", issue: "Incomplete work", amount: "₦35,000", status: "Open", date: "2024-01-15" },
    { id: 2, customer: "Fatima Abubakar", artisan: "Emmanuel Nwachukwu", issue: "Payment dispute", amount: "₦50,000", status: "In Review", date: "2024-01-14" },
    { id: 3, customer: "Aisha Ibrahim", artisan: "Gbenga Adeleke", issue: "Quality concerns", amount: "₦28,000", status: "Open", date: "2024-01-13" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Active</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">Pending</Badge>;
      case "Suspended":
        return <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20">Suspended</Badge>;
      case "Open":
        return <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20">Open</Badge>;
      case "In Review":
        return <Badge className="bg-primary/10 text-primary hover:bg-primary/20">In Review</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">System Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                5
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigate("/")}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {platformStats.map((stat, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {stat.change} this month
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-primary/10 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-background">
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-background">
              <Users className="h-4 w-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="disputes" className="data-[state=active]:bg-background">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Disputes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Registrations</CardTitle>
                  <CardDescription>New users awaiting approval</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.slice(0, 4).map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">
                              {user.name.split(" ").map(n => n[0]).join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.type}</p>
                          </div>
                        </div>
                        {getStatusBadge(user.status)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                    Approve Pending Artisans (8)
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <AlertTriangle className="h-4 w-4 mr-3 text-yellow-500" />
                    Review Reported Content (3)
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <DollarSign className="h-4 w-4 mr-3 text-primary" />
                    Process Pending Payouts (12)
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-3 text-accent" />
                    Generate Monthly Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">User Management</CardTitle>
                    <CardDescription>Manage platform users and permissions</CardDescription>
                  </div>
                  <Button size="sm">
                    Export Data
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell className="text-muted-foreground">{user.email}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{user.type}</Badge>
                        </TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell className="text-muted-foreground">{user.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Eye className="h-4 w-4" />
                            </Button>
                            {user.status === "Pending" && (
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-green-500 hover:text-green-600">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            )}
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                              <Ban className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="disputes">
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Dispute Resolution</CardTitle>
                    <CardDescription>Handle customer and artisan disputes</CardDescription>
                  </div>
                  <Badge variant="destructive">{disputes.length} Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Artisan</TableHead>
                      <TableHead>Issue</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {disputes.map((dispute) => (
                      <TableRow key={dispute.id}>
                        <TableCell className="font-medium">{dispute.customer}</TableCell>
                        <TableCell className="text-muted-foreground">{dispute.artisan}</TableCell>
                        <TableCell>{dispute.issue}</TableCell>
                        <TableCell className="font-semibold text-primary">{dispute.amount}</TableCell>
                        <TableCell>{getStatusBadge(dispute.status)}</TableCell>
                        <TableCell className="text-muted-foreground">{dispute.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
