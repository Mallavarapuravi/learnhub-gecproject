
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCategories } from "@/hooks/useCategories";

const Categories = () => {
  const { data: categories, isLoading } = useCategories();

  const categoryDetails = [
    {
      name: "Web Development",
      description: "Master modern web technologies including HTML5, CSS3, JavaScript, React, Node.js, and full-stack development",
      courses: 45,
      students: 12500,
      skills: ["HTML & CSS", "JavaScript", "React", "Node.js", "Databases"],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Data Science",
      description: "Learn Python, machine learning, data analysis, AI, and statistical modeling for data-driven decisions",
      courses: 32,
      students: 8900,
      skills: ["Python", "Machine Learning", "Statistics", "Data Visualization", "AI"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Digital Marketing",
      description: "Master SEO, social media marketing, Google Ads, content marketing, and digital growth strategies",
      courses: 28,
      students: 15600,
      skills: ["SEO", "Google Ads", "Social Media", "Content Marketing", "Analytics"],
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Design",
      description: "Create stunning UI/UX designs, learn Figma, Adobe Creative Suite, and design thinking methodologies",
      courses: 24,
      students: 7800,
      skills: ["UI/UX Design", "Figma", "Adobe Suite", "Prototyping", "Design Systems"],
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Business & Management",
      description: "Develop leadership skills, project management, entrepreneurship, and strategic business planning",
      courses: 19,
      students: 6200,
      skills: ["Leadership", "Project Management", "Strategy", "Entrepreneurship", "Finance"],
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Photography",
      description: "Master digital photography, photo editing, lighting techniques, and visual storytelling",
      courses: 16,
      students: 4300,
      skills: ["Digital Photography", "Lightroom", "Photoshop", "Composition", "Editing"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Programming",
      description: "Learn programming fundamentals with Python, Java, C++, and software development best practices",
      courses: 38,
      students: 11200,
      skills: ["Python", "Java", "C++", "Algorithms", "Software Engineering"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Personal Development",
      description: "Enhance communication skills, time management, productivity, and professional growth strategies",
      courses: 22,
      students: 9800,
      skills: ["Communication", "Time Management", "Productivity", "Leadership", "Career Growth"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading categories...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Course Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your passion and advance your career with our comprehensive learning paths
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categoryDetails.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <span className="text-white text-xl font-bold">
                    {category.name.charAt(0)}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {category.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{category.courses} courses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{category.students.toLocaleString()} students</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white group"
                  onClick={() => window.location.href = '/courses'}
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg p-12 shadow-sm border">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already advancing their careers with our expert-led courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white"
              onClick={() => window.location.href = '/courses'}
            >
              Browse All Courses
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/signup'}
            >
              Create Free Account
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
