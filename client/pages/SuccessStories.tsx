import { Card, CardContent } from '@/components/ui/card';
import { Layout } from '@/components/Layout';
import { Quote } from 'lucide-react';

export default function SuccessStories() {
  const successStories = [
    {
      name: "Sarah M.",
      destination: "United Kingdom",
      service: "Obtained a student visa for the United Kingdom",
      testimonial: "The support I received were invaluable. I couldn't have done it without Nuf Consultant",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612f1ad?w=400&h=400&fit=crop&crop=face",
      flag: "https://cdn.builder.io/api/v1/image/assets%2F82e61add17054a1a92130451877fa497%2F5faba3ebe32841e8841e0fa4aaf266e2?format=webp&width=800"
    },
    {
      name: "David L.",
      destination: "Australia", 
      service: "Secured a travel visa for Australia",
      testimonial: "The process was smooth and stress-free, thanks to the team's expertise and attention to detail.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      flag: "https://cdn.builder.io/api/v1/image/assets%2F82e61add17054a1a92130451877fa497%2Fa6c59214b350411e990839618ed3a835?format=webp&width=800"
    },
    {
      name: "Emily R.",
      destination: "Canada",
      service: "Successfully applied for a student visa to Canada",
      testimonial: "Professional service for their professionalism and personalized approach. They truly care about their clients!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      flag: "https://cdn.builder.io/api/v1/image/assets%2F82e61add17054a1a92130451877fa497%2F51910f410f7a4d84b373199280025db7?format=webp&width=800"
    },
    {
      name: "Michael K.",
      destination: "Japan",
      service: "Received a travel visa for Japan",
      testimonial: "Highly responsive and helpful throughout the entire process. I felt supported and confident.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      flag: "https://cdn.builder.io/api/v1/image/assets%2F82e61add17054a1a92130451877fa497%2Fd5bba65220ad4c5781b0907268dfab9b?format=webp&width=800"
    },
    {
      name: "Jessica P.",
      destination: "France",
      service: "Obtained a student visa for France",
      testimonial: "The guidance was spot-on, and the application process was much easier than I expected.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      flag: "https://cdn.builder.io/api/v1/image/assets%2F82e61add17054a1a92130451877fa497%2Fe9a81daf005c4effbd3c5043259f519b?format=webp&width=800"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Successful Applications"
    },
    {
      number: "95%",
      label: "Success Rate"
    },
    {
      number: "30+", 
      label: "Countries Served"
    },
    {
      number: "24/7",
      label: "Support Available"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Success Stories
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Read about the experiences of our clients who have successfully obtained their visas with our assistance. 
                Their stories highlight our commitment to providing exceptional service and achieving positive outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {successStories.map((story, index) => (
                <div 
                  key={index} 
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Story Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Card className="border-border/40">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <img 
                            src={story.image} 
                            alt={story.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {story.name}
                            </h3>
                            <p className="text-sm text-primary font-medium mb-4">
                              {story.service}
                            </p>
                            <div className="relative">
                              <Quote className="h-6 w-6 text-primary/30 absolute -top-2 -left-2" />
                              <p className="text-muted-foreground pl-6 italic">
                                "{story.testimonial}"
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Flag Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/20">
                      <img 
                        src={story.flag} 
                        alt={`${story.destination} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-muted-foreground text-lg">
                Join the hundreds of satisfied clients who have achieved their visa goals with our expert guidance and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/book-consultation"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-lg"
                >
                  Book Consultation
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
