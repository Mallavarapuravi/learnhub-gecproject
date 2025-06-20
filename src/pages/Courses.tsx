
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Users, Clock, Search, User, Play, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp 2024",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12847,
      duration: "42 hours",
      image: "/placeholder.svg",
      price: 89,
      category: "Web Development",
      level: "Beginner to Advanced",
      description: "Master HTML, CSS, JavaScript, React, Node.js, MongoDB, and deploy full-stack applications. Build 10+ real projects.",
      youtubePreview: "https://www.youtube.com/embed/qz0aGYrrlhU",
      features: ["10+ Real Projects", "Lifetime Access", "Certificate", "24/7 Support"]
    },
    {
      id: 2,
      title: "Data Science & Machine Learning Mastery",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 8934,
      duration: "36 hours",
      image: "/placeholder.svg",
      price: 119,
      category: "Data Science",
      level: "Intermediate",
      description: "Learn Python, Pandas, NumPy, Scikit-learn, TensorFlow, and deploy ML models. Real industry projects included.",
      youtubePreview: "https://www.youtube.com/embed/7eh4d6sabA0",
      features: ["5+ ML Projects", "Industry Datasets", "Career Support", "Code Templates"]
    },
    {
      id: 3,
      title: "Digital Marketing Complete Course",
      instructor: "Emily Rodriguez",
      rating: 4.7,
      students: 15623,
      duration: "28 hours",
      image: "/placeholder.svg",
      price: 79,
      category: "Marketing",
      level: "All Levels",
      description: "Master SEO, Google Ads, Facebook Marketing, Content Marketing, Email Marketing, and Analytics.",
      youtubePreview: "https://www.youtube.com/embed/gvBkDN-7cuA",
      features: ["Live Case Studies", "Marketing Tools", "Templates", "Community Access"]
    },
    {
      id: 4,
      title: "Python Programming - Zero to Hero",
      instructor: "Alex Thompson",
      rating: 4.9,
      students: 9876,
      duration: "32 hours",
      image: "/placeholder.svg",
      price: 69,
      category: "Programming",
      level: "Beginner",
      description: "Complete Python course covering basics to advanced topics: OOP, file handling, APIs, web scraping, and automation.",
      youtubePreview: "https://www.youtube.com/embed/_uQrJ0TkZlc",
      features: ["50+ Exercises", "5 Major Projects", "Code Challenges", "Job Prep"]
    },
    {
      id: 5,
      title: "UI/UX Design Masterclass",
      instructor: "Jessica Park",
      rating: 4.8,
      students: 7654,
      duration: "38 hours",
      image: "/placeholder.svg",
      price: 99,
      category: "Design",
      level: "Intermediate",
      description: "Learn Figma, Adobe XD, design systems, user research, prototyping, and create stunning user experiences.",
      youtubePreview: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      features: ["Design Portfolio", "Figma Mastery", "Client Projects", "Design System"]
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
      description: "Build cross-platform mobile apps with React Native, Expo, Firebase, and publish to App Store & Play Store.",
      youtubePreview: "https://www.youtube.com/embed/0-S5a0eXPoc",
      features: ["3 Complete Apps", "App Store Deployment", "Firebase Integration", "Navigation"]
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
            Learn from industry experts with hands-on projects, lifetime access, and career support
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* Course Video Preview */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-emerald-100 rounded-lg overflow-hidden relative">
                  <iframe
                    src={course.youtubePreview}
                    title={course.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-emerald-500 text-white">{course.level}</Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary">{course.category}</Badge>
                  </div>
                </div>

                {/* Course Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {course.description}
                    </p>
                    
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

                    {/* Course Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {course.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600">
                      ${course.price}
                    </span>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(course.youtubePreview.replace('/embed/', '/watch?v='), '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
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
