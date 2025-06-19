
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, Book, ArrowRight, Play, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12847,
      duration: "42 hours",
      image: "/placeholder.svg",
      price: "$89",
      category: "Web Development",
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      title: "Data Science and Machine Learning",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 8934,
      duration: "36 hours",
      image: "/placeholder.svg",
      price: "$119",
      category: "Data Science",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      instructor: "Emily Rodriguez",
      rating: 4.7,
      students: 15623,
      duration: "28 hours",
      image: "/placeholder.svg",
      price: "$79",
      category: "Marketing",
      level: "All Levels"
    },
    {
      id: 4,
      title: "Python Programming Fundamentals",
      instructor: "Alex Thompson",
      rating: 4.9,
      students: 9876,
      duration: "32 hours",
      image: "/placeholder.svg",
      price: "$69",
      category: "Programming",
      level: "Beginner"
    }
  ];

  const categories = [
    { name: "Web Development", count: 1240, icon: "💻" },
    { name: "Data Science", count: 850, icon: "📊" },
    { name: "Digital Marketing", count: 690, icon: "📈" },
    { name: "Design", count: 920, icon: "🎨" },
    { name: "Business", count: 1150, icon: "💼" },
    { name: "Photography", count: 480, icon: "📸" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Learn Without
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"> Limits</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join millions of learners worldwide. Access thousands of courses from expert instructors and advance your career at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg">
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>2M+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              <span>10K+ Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.8 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} courses</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses, carefully selected by our expert team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-emerald-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Play className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-emerald-500 text-white">{course.level}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">{course.category}</Badge>
                    <span className="text-lg font-bold text-emerald-600">{course.price}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <User className="h-4 w-4" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-blue-100">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Online Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
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
            Join thousands of students who have already transformed their careers with our courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 text-lg">
                Get Started Free
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
