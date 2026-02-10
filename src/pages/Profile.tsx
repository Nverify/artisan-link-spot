import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Camera, MapPin, Phone, Mail, Briefcase, Star, 
  Calendar, Shield, Edit2, Save, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Adewale Johnson",
    profession: "Electrician",
    bio: "Certified electrician with 8+ years of experience in residential and commercial electrical installations, repairs, and maintenance across Lagos.",
    phone: "+234 801 234 5678",
    email: "adewale.j@email.com",
    location: "Ikeja, Lagos",
    experience: "8 years",
    avatar: "",
    skills: ["Wiring", "Generator Repair", "AC Installation", "Solar Panel", "House Rewiring"],
    rating: 4.8,
    reviewCount: 47,
    completedJobs: 156,
    memberSince: "March 2024",
    verified: true,
  });

  const [editData, setEditData] = useState(profile);

  const profileCompleteness = 85;

  const handleSave = () => {
    setProfile(editData);
    setEditing(false);
    toast({ title: "Profile updated", description: "Your changes have been saved." });
  };

  const handleCancel = () => {
    setEditData(profile);
    setEditing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between px-4 py-3 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-foreground">My Profile</h1>
          </div>
          {!editing ? (
            <Button variant="outline" size="sm" className="gap-2" onClick={() => setEditing(true)}>
              <Edit2 className="h-4 w-4" /> Edit
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                <X className="h-4 w-4 mr-1" /> Cancel
              </Button>
              <Button size="sm" className="gap-2" onClick={handleSave}>
                <Save className="h-4 w-4" /> Save
              </Button>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 lg:p-6 space-y-6">
        {/* Profile Completeness */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Profile Completeness</span>
              <span className="text-sm font-bold text-primary">{profileCompleteness}%</span>
            </div>
            <Progress value={profileCompleteness} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">Add a profile photo and certifications to reach 100%</p>
          </CardContent>
        </Card>

        {/* Avatar & Basic Info */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <Avatar className="h-28 w-28 border-4 border-primary/20">
                  <AvatarImage src={profile.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-2xl">
                    {profile.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                {editing && (
                  <button className="absolute bottom-0 right-0 p-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="flex-1 text-center sm:text-left space-y-2">
                {editing ? (
                  <Input
                    value={editData.name}
                    onChange={e => setEditData({ ...editData, name: e.target.value })}
                    className="text-xl font-bold"
                  />
                ) : (
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h2 className="text-2xl font-bold text-foreground">{profile.name}</h2>
                    {profile.verified && (
                      <Shield className="h-5 w-5 text-primary fill-primary/20" />
                    )}
                  </div>
                )}
                {editing ? (
                  <Input
                    value={editData.profession}
                    onChange={e => setEditData({ ...editData, profession: e.target.value })}
                  />
                ) : (
                  <p className="text-muted-foreground font-medium">{profile.profession}</p>
                )}
                <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{profile.rating}</span> ({profile.reviewCount} reviews)
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" /> {profile.completedJobs} jobs
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">About</CardTitle>
          </CardHeader>
          <CardContent>
            {editing ? (
              <Textarea
                value={editData.bio}
                onChange={e => setEditData({ ...editData, bio: e.target.value })}
                rows={4}
              />
            ) : (
              <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
            )}
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
                <div className="p-2 rounded-lg bg-muted"><Phone className="h-4 w-4 text-muted-foreground" /></div>
                {editing ? (
                  <Input value={editData.phone} onChange={e => setEditData({ ...editData, phone: e.target.value })} />
                ) : (
                  <span className="text-foreground">{profile.phone}</span>
                )}
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted"><Mail className="h-4 w-4 text-muted-foreground" /></div>
                {editing ? (
                  <Input value={editData.email} onChange={e => setEditData({ ...editData, email: e.target.value })} />
                ) : (
                  <span className="text-foreground">{profile.email}</span>
                )}
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted"><MapPin className="h-4 w-4 text-muted-foreground" /></div>
                {editing ? (
                  <Input value={editData.location} onChange={e => setEditData({ ...editData, location: e.target.value })} />
                ) : (
                  <span className="text-foreground">{profile.location}</span>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Stats & Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Experience</span>
                <span className="font-medium text-foreground">{profile.experience}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Member Since</span>
                <span className="font-medium text-foreground">{profile.memberSince}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Verification</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  Verified
                </Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Completed Jobs</span>
                <span className="font-bold text-foreground">{profile.completedJobs}</span>
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
              {profile.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
