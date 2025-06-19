
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, BookOpen, Award, MapPin, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Full-Stack Developer",
      company: "Google",
      image: "/placeholder.svg",
      rating: 4.9,
      students: 45000,
      courses: 12,
      specialties: ["Web Development", "React", "Node.js"],
      location: "San Francisco, CA",
      bio: "10+ years building scalable web applications. Former lead developer at top tech companies, passionate about teaching modern web development.",
      achievements: ["Google Developer Expert", "React Conference Speaker", "Open Source Contributor"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Data Science Director",
      company: "Microsoft",
      image: "/placeholder.svg",
      rating: 4.8,
      students: 32000,
      courses: 8,
      specialties: ["Data Science", "Machine Learning", "AI"],
      location: "Seattle, WA",
      bio: "PhD in Computer Science with 15+ years in AI research. Published 50+ papers and holds 12 patents in machine learning algorithms.",
      achievements: ["AI Research Award", "Top 100 AI Influencers", "TEDx Speaker"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Marketing Strategy Lead",
      company: "HubSpot",
      image: "/placeholder.svg",
      rating: 4.7,
      students: 38000,
      courses: 15,
      specialties: ["Digital Marketing", "SEO", "Content Strategy"],
      location: "Boston, MA",
      bio: "Marketing expert who helped 100+ companies achieve 10x growth. Specializes in data-driven marketing strategies and conversion optimization.",
      achievements: ["Marketing Excellence Award", "Top 50 Marketers", "Forbes Contributor"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "David Kim",
      title: "Senior UX Designer",
      company: "Apple",
      image: "/placeholder.svg",
      rating: 4.9,
      students: 29000,
      courses: 10,
      specialties: ["UI/UX Design", "Product Design", "Design Systems"],
      location: "Cupertino, CA",
      bio: "Award-winning designer with 12+ years creating user-centered experiences. Led design teams at Fortune 500 companies.",
      achievements: ["Design Excellence Award", "UX Hall of Fame", "Design Conference Speaker"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Jessica Park",
      title: "Business Strategy Consultant",
      company: "McKinsey & Company",
      image: "/placeholder.svg",
      rating: 4.8,
      students: 41000,
      courses: 18,
      specialties: ["Business Strategy", "Leadership", "Project Management"],
      location: "New York, NY",
      bio: "MBA from Harvard, 8+ years in strategic consulting. Helped Fortune 500 companies transform their business models and achieve sustainable growth.",
      achievements: ["Consultant of the Year", "Harvard Business Review Author", "Leadership Excellence Award"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Alex Thompson",
      title: "Software Engineering Manager",
      company: "Netflix",
      image: "/placeholder.svg",
      rating: 4.9,
      students: 35000,
      courses: 14,
      specialties: ["Python", "System Design", "Software Architecture"],
      location: "Los Angeles, CA",
      bio: "Senior engineer with expertise in scalable systems. Built platforms serving millions of users daily. Passionate about clean code and best practices.",
      achievements: ["Technical Excellence Award", "Open Source Maintainer", "Engineering Blog Author"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Instructors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry leaders and experienced professionals who bring real-world expertise 
            and proven teaching methods to help you achieve your learning goals.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">{instructor.title}</p>
                <p className="text-sm text-blue-600">{instructor.company}</p>
                
                <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mt-2">
                  <MapPin className="h-4 w-4" />
                  <span>{instructor.location}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid grid-cols-3 gap-4 text-center mb-4 p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-bold text-gray-900">{instructor.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span className="font-bold text-gray-900">{(instructor.students / 1000).toFixed(0)}k</span>
                    </div>
                    <p className="text-xs text-gray-500">Students</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <BookOpen className="h-4 w-4 text-emerald-500" />
                      <span className="font-bold text-gray-900">{instructor.courses}</span>
                    </div>
                    <p className="text-xs text-gray-500">Courses</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {instructor.bio}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {instructor.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Achievements
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {instructor.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={instructor.social.linkedin}>
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={instructor.social.twitter}>
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <Link to="/courses">
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
                      View Courses
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Want to Become an Instructor?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Share your expertise with millions of learners worldwide. Join our community of passionate educators 
            and make a meaningful impact on students' careers.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Apply to Teach
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Instructors;
