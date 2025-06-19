
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Users, Clock, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCategories } from "@/hooks/useCategories";

const Categories = () => {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-red-500">Failed to load categories</p>
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
            Learning Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of courses across various disciplines. 
            From technology to creative arts, find the perfect learning path for your goals.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categories?.map((category) => (
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
                    <span>{Math.floor(Math.random() * 500) + 50}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{Math.floor(Math.random() * 50) + 10}k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{Math.floor(Math.random() * 30) + 15}h</span>
                  </div>
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
