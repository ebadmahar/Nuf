import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { GraduationCap, Plane, Briefcase, Users, Clock, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Student Visas",
      description: "Complete guidance for student visa applications to universities worldwide. We help with documentation, application forms, and interview preparation.",
      features: ["Document preparation", "Application assistance", "Interview coaching", "Follow-up support"]
    },
    {
      icon: <Plane className="h-12 w-12 text-primary" />,
      title: "Travel Visas",
      description: "Expert assistance for tourist and business travel visas. Make your travel dreams a reality with our comprehensive visa support services.",
      features: ["Tourist visas", "Business visas", "Transit visas", "Multiple entry visas"]
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Work Visas",
      description: "Professional support for employment-based visa applications. We help professionals secure work opportunities abroad.",
      features: ["Employment visas", "Skilled worker visas", "Intra-company transfers", "Self-employment visas"]
    }
  ];

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Our experienced consultants have in-depth knowledge of immigration laws and requirements."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fast Processing",
      description: "We ensure your applications are processed efficiently and within the required timeframes."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Confidential",
      description: "Your personal information and documents are handled with the utmost care and security."
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
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer comprehensive visa consultancy services to help you navigate the complex world of immigration. 
                Our expert team provides personalized guidance for all types of visa applications.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-border/40 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-muted/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are committed to providing exceptional service and ensuring your visa application process is as smooth as possible.
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

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg">
                Contact us today to discuss your visa requirements and let our expert team guide you through the process.
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
      </div>
    </Layout>
  );
}
