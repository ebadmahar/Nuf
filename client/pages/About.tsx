import { Card, CardContent } from '@/components/ui/card';
import { Layout } from '@/components/Layout';
import { Shield, Users, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards and transparency in all our interactions."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centric",
      description: "We prioritize our clients' needs, providing personalized and responsive service."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "We leverage our extensive network and expertise to assist clients worldwide."
    }
  ];

  const teamMembers = [
    {
      name: "Hasnain Awan",
      role: "Hasnian Awanhas been working at NUF Consultant for the past 5 years and has personally helped over 100 students achieve admission to their dream universities across the globe — including in Georgia, the UK, and Canada.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvps2BLGzVyYv4EMu5VJT94BYTMt2BiK2LOKYOOE2EmAXgYaC0ki35X773Ev6pSvPNC_wzz32N-t-rUy3zfdK0BcdT-mdGc1j_te7R67FsytQnYaVF_3ZrFGKuflKHWGZ3i223KvE68SuyB9DEeMBcW_6QZnmGPrkklK4Hg6fxkJHmI0KXMzrDO6xJkao/s320/IMG_1294.jpg"
    },
    {
      name: "Mr. Ethan Carter",
      role: "Senior Advisor, LLM in Immigration Law, 10+ years of experience specializing in student visas.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ms. Olivia Bennett",
      role: "Client Relations Manager, BA in Communications, 8+ years of experience in client support and visa processing.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
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
                About Nuf Consultant
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At Nuf Consultant, we are dedicated to simplifying the visa application process for students and travelers. 
                With years of experience and a team of experts, we provide personalized guidance and support to ensure your 
                visa journey is smooth and successful.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Our Mission
              </h2>
              <Card className="border-border/40">
                <CardContent className="p-8 lg:p-12">
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    Our mission is to empower individuals to pursue their educational and travel aspirations by providing expert visa consultancy 
                    services. We strive to be a trusted partner, offering reliable information and tailored solutions to meet the unique needs of 
                    each client.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border/40 bg-card/50 hover:bg-card/80 transition-colors duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our experienced professionals are dedicated to helping you achieve your visa goals with personalized service and expert guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-border/40 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Why Choose Nuf Consultant?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Expert Knowledge
                    </h3>
                    <p className="text-muted-foreground">
                      Our team stays updated with the latest visa requirements and immigration policies across different countries.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Personalized Service
                    </h3>
                    <p className="text-muted-foreground">
                      We understand that every case is unique and provide tailored solutions based on your specific circumstances.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      High Success Rate
                    </h3>
                    <p className="text-muted-foreground">
                      We have helped thousands of clients successfully obtain their visas with our proven strategies and expertise.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Comprehensive Support
                    </h3>
                    <p className="text-muted-foreground">
                      From initial consultation to visa approval, we provide end-to-end support throughout your visa journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
