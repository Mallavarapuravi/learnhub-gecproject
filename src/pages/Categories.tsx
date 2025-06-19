
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Web Development",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and modern web technologies",
      courseCount: 1240,
      studentCount: 45000,
      avgDuration: "35 hours",
      icon: "💻",
      color: "from-blue-500 to-blue-600",
      topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Vue.js", "Angular"]
    },
    {
      id: 2,
      name: "Data Science",
      description: "Master Python, machine learning, data analysis, and artificial intelligence",
      courseCount: 850,
      studentCount: 32000,
      avgDuration: "42 hours",
      icon: "📊",
      color: "from-emerald-500 to-emerald-600",
      topics: ["Python", "Machine Learning", "Data Analysis", "AI", "Statistics", "SQL"]
    },
    {
      id: 3,
      name: "Digital Marketing",
      description: "Learn SEO, social media marketing, content marketing, and PPC advertising",
      courseCount: 690,
      studentCount: 28000,
      avgDuration: "25 hours",
      icon: "📈",
      color: "from-purple-500 to-purple-600",
      topics: ["SEO", "Social Media", "Content Marketing", "PPC", "Analytics", "Email Marketing"]
    },
    {
      id: 4,
      name: "Design",
      description: "UI/UX design, graphic design, and creative visual communication",
      courseCount: 920,
      studentCount: 35000,
      avgDuration: "30 hours",
      icon: "🎨",
      color: "from-pink-500 to-pink-600",
      topics: ["UI/UX", "Photoshop", "Illustrator", "Figma", "Branding", "Typography"]
    },
    {
      id: 5,
      name: "Business & Management",
      description: "Leadership, project management, entrepreneurship, and business strategy",
      courseCount: 1150,
      studentCount: 52000,
      avgDuration: "28 hours",
      icon: "💼",
      color: "from-orange-500 to-orange-600",
      topics: ["Leadership", "Project Management", "Strategy", "Finance", "Operations", "HR"]
    },
    {
      id: 6,
      name: "Photography",
      description: "Digital photography, photo editing, and visual storytelling techniques",
      courseCount: 480,
      studentCount: 18000,
      avgDuration: "22 hours",
      icon: "📸",
      color: "from-indigo-500 to-indigo-600",
      topics: ["Digital Photography", "Lightroom", "Photoshop", "Portrait", "Landscape", "Studio"]
    },
    {
      id: 7,
      name: "Programming",
      description: "Learn Python, Java, C++, and other programming languages from scratch",
      courseCount: 1580,
      studentCount: 68000,
      avgDuration: "40 hours",
      icon: "⚡",
      color: "from-yellow-500 to-yellow-600",
      topics: ["Python", "Java", "C++", "JavaScript", "Mobile Development", "Algorithms"]
    },
    {
      id: 8,
      name: "Personal Development",
      description: "Communication skills, time management, and professional growth",
      courseCount: 720,
      studentCount: 41000,
      avgDuration: "18 hours",
      icon: "🚀",
      color: "from-teal-500 to-teal-600",
      topics: ["Communication", "Time Management", "Productivity", "Career Growth", "Soft Skills", "Leadership"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learning Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of courses across various disciplines. 
            From technology to creative arts, find the perfect learning path for your goals.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className={`h-20 bg-gradient-to-r ${category.color} relative`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 left-4 text-3xl">
                  {category.icon}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  {category.name}
                </CardTitle>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {category.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Book className="h-3 w-3" />
                    <span>{category.courseCount}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{(category.studentCount / 1000).toFixed(0)}k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{category.avgDuration}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {category.topics.slice(0, 3).map((topic, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {category.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{category.topics.length - 3}
                    </Badge>
                  )}
                </div>
                
                <Link to="/courses">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white text-sm">
                    Explore Courses
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're constantly adding new categories and courses. Suggest a topic you'd like to learn about!
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Request New Category
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
