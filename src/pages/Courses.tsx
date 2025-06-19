
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Users, Clock, Search, User, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12847,
      duration: "42 hours",
      image: "/placeholder.svg",
      price: 89,
      category: "Web Development",
      level: "Beginner to Advanced",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp."
    },
    {
      id: 2,
      title: "Data Science and Machine Learning",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 8934,
      duration: "36 hours",
      image: "/placeholder.svg",
      price: 119,
      category: "Data Science",
      level: "Intermediate",
      description: "Master Python, pandas, scikit-learn, and deep learning techniques."
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      instructor: "Emily Rodriguez",
      rating: 4.7,
      students: 15623,
      duration: "28 hours",
      image: "/placeholder.svg",
      price: 79,
      category: "Marketing",
      level: "All Levels",
      description: "Learn SEO, social media marketing, PPC, and conversion optimization."
    },
    {
      id: 4,
      title: "Python Programming Fundamentals",
      instructor: "Alex Thompson",
      rating: 4.9,
      students: 9876,
      duration: "32 hours",
      image: "/placeholder.svg",
      price: 69,
      category: "Programming",
      level: "Beginner",
      description: "Start your programming journey with Python - from basics to advanced concepts."
    },
    {
      id: 5,
      title: "UI/UX Design Complete Course",
      instructor: "Jessica Park",
      rating: 4.8,
      students: 7654,
      duration: "38 hours",
      image: "/placeholder.svg",
      price: 99,
      category: "Design",
      level: "Intermediate",
      description: "Master design thinking, prototyping, and create stunning user experiences."
    },
    {
      id: 6,
      title: "React Native Mobile Development",
      instructor: "David Kim",
      rating: 4.6,
      students: 5432,
      duration: "45 hours",
      image: "/placeholder.svg",
      price: 109,
      category: "Mobile Development",
      level: "Advanced",
      description: "Build cross-platform mobile apps with React Native and Expo."
    }
  ];

  const categories = ["All", "Web Development", "Data Science", "Marketing", "Programming", "Design", "Mobile Development"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level.includes(selectedLevel);
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover thousands of courses from expert instructors and advance your skills
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category === "All" ? "all" : category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level === "All" ? "all" : level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCourses.map((course) => (
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
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary">{course.category}</Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {course.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <User className="h-4 w-4" />
                  <span>{course.instructor}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">
                    ${course.price}
                  </span>
                  <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedLevel("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
