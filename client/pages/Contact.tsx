import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Layout } from '@/components/Layout';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      body: JSON.stringify({
        ...formData,
        formType: 'Contact Us'
      }),
    });

    if (res.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', service: '', message: '' });
    } else {
      alert('Failed to send message. Please try again later.');
    }
  } catch (error) {
    alert('An error occurred. Please try again later.');
  }
};


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're here to help you with your visa needs. Reach out to us with any questions or to schedule a consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Your Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-background border-border/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Your Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-background border-border/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground font-medium">Service of Interest (Optional)</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="bg-background border-border/40">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student-visa">Student Visa</SelectItem>
                          <SelectItem value="travel-visa">Travel Visa</SelectItem>
                          <SelectItem value="work-visa">Work Visa</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your visa requirements or any questions you have..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        rows={6}
                        className="bg-background border-border/40 resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Our Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+92 3449 044454</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">ebad52047@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Address</h3>
                        <p className="text-muted-foreground">F-6, ISLAMABAD</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
{/* Map Section */}
<section className="py-20 bg-muted/5">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-foreground mb-4">
        Find Us
      </h2>
      <p className="text-muted-foreground">
        Visit our office for in-person consultations and assistance.
      </p>
    </div>

    <div className="rounded-2xl overflow-hidden border border-border/40 bg-muted/20 h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.00435418323!2d72.9685083!3d33.631129099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97561b41a507%3A0x40f54d97d9ce92cb!2sNUF%20Consultants!5e0!3m2!1sen!2s!4v1754890179055!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NUF Consultants Location"
      ></iframe>
    </div>
  </div>
</section>

      </div>
    </Layout>
  );
}
