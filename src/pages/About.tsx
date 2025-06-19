
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  Award, 
  Globe, 
  Clock, 
  Smartphone,
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
  Heart,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "User-Friendly Interface",
      description: "Intuitive design that makes learning accessible for everyone, regardless of technical proficiency."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-600" />,
      title: "Course Management",
      description: "Comprehensive tools for instructors to create, organize, and manage course materials effectively."
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Interactive Learning",
      description: "Discussion forums, live webinars, and collaborative tools to enhance the learning experience."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Certification",
      description: "Earn valuable certificates and badges upon course completion to boost your career prospects."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-pink-600" />,
      title: "Multi-Device Access",
      description: "Learn anywhere, anytime on computers, tablets, and smartphones with seamless synchronization."
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: "Self-Paced Learning",
      description: "Flexible learning schedules that adapt to your lifestyle and personal preferences."
    }
  ];

  const stats = [
    { number: "2M+", label: "Active Students", icon: <Users className="h-6 w-6" /> },
    { number: "10K+", label: "Online Courses", icon: <BookOpen className="h-6 w-6" /> },
    { number: "500+", label: "Expert Instructors", icon: <Star className="h-6 w-6" /> },
    { number: "150+", label: "Countries Served", icon: <Globe className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Accessibility",
      description: "Education should be available to everyone, everywhere, at any time."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Excellence",
      description: "We maintain high standards in course quality and instructor expertise."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Innovation",
      description: "Continuously improving our platform with cutting-edge learning technologies."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Trust",
      description: "Building a safe, secure environment where learners can grow with confidence."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">LearnHub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're on a mission to democratize education by providing high-quality online learning experiences 
            that empower learners worldwide to achieve their personal and professional goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8">
                Join Our Community
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-3 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes LearnHub Different
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with proven educational methods 
              to create an unparalleled learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            To break down barriers to quality education by creating an inclusive, accessible, and engaging 
            online learning platform that connects learners with world-class instructors and transforms 
            lives through the power of knowledge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <CheckCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Quality Education</h3>
              <p className="text-sm text-blue-100">Curated courses from industry experts</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <CheckCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Global Accessibility</h3>
              <p className="text-sm text-blue-100">Available to learners worldwide</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <CheckCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-sm text-blue-100">Skills that advance your professional journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the learning community we're building together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-3">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of learners who have already transformed their careers and lives through education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8">
                Get Started Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
