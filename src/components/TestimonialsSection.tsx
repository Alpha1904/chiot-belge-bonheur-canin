
import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <section className="page-section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Ce que disent nos clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de familles qui ont adopté un chiot de notre élevage
            et partagent leur expérience.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Desktop version */}
            <div className="hidden md:block">
              <Card className="bg-dogLight border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {testimonials[activeIndex].image && (
                      <div className="mx-auto md:mx-0">
                        <img
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          className="w-24 h-24 rounded-full object-cover border-2 border-dogPrimary"
                        />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex mb-2">
                        {renderStars(testimonials[activeIndex].rating)}
                      </div>
                      
                      <blockquote className="text-lg mb-4 italic">
                        "{testimonials[activeIndex].text}"
                      </blockquote>
                      
                      <div>
                        <p className="font-semibold text-dogPrimary">
                          {testimonials[activeIndex].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[activeIndex].location}
                          {testimonials[activeIndex].puppyName && (
                            <span> • Propriétaire de {testimonials[activeIndex].puppyName}</span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Mobile version */}
            <div className="md:hidden">
              <Card className="bg-dogLight border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    {testimonials[activeIndex].image && (
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-dogPrimary mx-auto"
                      />
                    )}
                  </div>
                  
                  <div className="flex justify-center mb-2">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                  
                  <blockquote className="text-lg mb-4 italic text-center">
                    "{testimonials[activeIndex].text}"
                  </blockquote>
                  
                  <div className="text-center">
                    <p className="font-semibold text-dogPrimary">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].location}
                      {testimonials[activeIndex].puppyName && (
                        <span> • Propriétaire de {testimonials[activeIndex].puppyName}</span>
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white border border-dogPrimary text-dogPrimary hover:bg-dogPrimary hover:text-white"
              onClick={prevTestimonial}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white border border-dogPrimary text-dogPrimary hover:bg-dogPrimary hover:text-white"
              onClick={nextTestimonial}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  activeIndex === index ? "bg-dogPrimary" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
