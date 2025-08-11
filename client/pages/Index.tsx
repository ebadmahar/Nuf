import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { User, Globe, HeadphonesIcon, GraduationCap, Plane, Briefcase } from 'lucide-react';

export default function Index() {
  const services = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Student Visas",
      description: "Comprehensive guidance for student visa applications"
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Travel Visas", 
      description: "Expert assistance for tourist and business travel visas"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Work Visas",
      description: "Professional support for employment-based visa applications"
    }
  ];

  const features = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Expert Guidance",
      description: "Our team of experienced consultants provides expert guidance tailored to your specific needs, ensuring a smooth and efficient application process."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "We handle visa applications for a wide range of countries, offering comprehensive support regardless of your destination."
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: "Personalised Support",
      description: "We understand that every applicant is unique. Our personalised approach means we take the time to understand your goals and tailor our services accordingly."
    }
  ];

  const successStories = [
    {
      image: "https://images.unsplash.com/photo-1567684015053-e7c421f866fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sarah's Journey to Oxford",
      description: "With Nuf Consultant help, Sarah secured her student visa and is now studying at Oxford University."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      title: "The Smith Family's European Adventure", 
      description: "The Smith family enjoyed a hassle-free European vacation, thanks to our expert visa processing."
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      title: "Mark's Career in Tech",
      description: "Mark's work visa was approved swiftly, allowing him to pursue his career goals in the tech industry."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Journey Starts Here
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Navigating the complexities of visa applications can feel overwhelming. At NUF Consultant Islamabad, we make the journey simple, offering expert guidance for students, professionals, and travelers. Together, we’ll turn your international dreams into reality.
                </p>
              </div>
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/book-consultation">Get Started</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted/20 border border-border/20">
                <img 
                  src="https://sdmntpreastus.oaiusercontent.com/files/00000000-a710-61f9-ad20-2f95ad8f359c/raw?se=2025-08-11T05%3A47%3A37Z&sp=r&sv=2024-08-04&sr=b&scid=dd97ac49-1721-59db-8a83-ff6418dfd1a6&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-10T16%3A00%3A34Z&ske=2025-08-11T16%3A00%3A34Z&sks=b&skv=2024-08-04&sig=5HO5XmTHlmxS2YUUVQ8uhJd%2BIQfzxlcduuvPhSVxhuU%3D" 
                  alt="Professional consultant helping with visa applications"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With years of experience and a dedicated team, we offer unparalleled support in securing your visa. 
              Our personalized approach ensures every application is handled with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/40 bg-card/50 hover:bg-card/80 transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border/40 bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-border/40 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {story.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/success-stories">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground text-lg">
              Schedule a consultation with our expert visa consultants and take the first step 
              towards achieving your travel and education goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book-consultation">Book Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
