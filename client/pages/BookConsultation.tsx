import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Layout } from '@/components/Layout';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BookConsultation() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    visaType: '',
    additionalInfo: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      alert('Please select a date for your consultation.');
      return;
    }

    try {
      const res = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          date: selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          formType: 'Book Consultation'
        }),
      });

      if (res.ok) {
        alert('Consultation booked successfully! We will contact you soon to confirm the details.');
        setFormData({ fullName: '', email: '', phone: '', visaType: '', additionalInfo: '' });
        setSelectedDate(null);
      } else {
        alert('Failed to book consultation. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Calendar logic
  const today = new Date();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const selectDate = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (selected >= today) {
      setSelectedDate(selected);
    }
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === currentMonth.getMonth() &&
           selectedDate.getFullYear() === currentMonth.getFullYear();
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date < today;
  };

  // Generate calendar grid
  const calendarDays = [];
  
  for (let i = 0; i < firstDayWeekday; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-10"></div>);
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(
      <button
        key={day}
        onClick={() => selectDate(day)}
        disabled={isDateDisabled(day)}
        className={`h-10 w-10 rounded-md text-sm font-medium transition-colors
          ${isDateSelected(day) 
            ? 'bg-primary text-primary-foreground' 
            : isDateDisabled(day)
            ? 'text-muted-foreground cursor-not-allowed'
            : 'hover:bg-accent hover:text-accent-foreground'
          }`}
      >
        {day}
      </button>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Book Your Consultation
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Schedule a consultation with our expert visa consultants to discuss your travel plans and visa requirements. 
                Select a date and time that works best for you, and fill out the form below to complete your booking.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calendar */}
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Select Date</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" onClick={goToPreviousMonth} className="h-8 w-8 p-0">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <h3 className="text-lg font-semibold">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </h3>
                      <Button variant="outline" size="sm" onClick={goToNextMonth} className="h-8 w-8 p-0">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {weekDays.map((day) => (
                        <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-muted-foreground">
                          {day}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays}
                    </div>

                    {selectedDate && (
                      <div className="mt-4 p-3 bg-primary/10 rounded-md">
                        <p className="text-sm text-foreground">
                          Selected: {selectedDate.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Booking Form */}
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle>Consultation Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground font-medium">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        className="bg-background border-border/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-background border-border/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="bg-background border-border/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="visaType" className="text-foreground font-medium">Type of Visa</Label>
                      <Select name="visaType" onValueChange={(value) => handleInputChange('visaType', value)}>
                        <SelectTrigger className="bg-background border-border/40">
                          <SelectValue placeholder="Select visa type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student Visa</SelectItem>
                          <SelectItem value="tourist">Tourist Visa</SelectItem>
                          <SelectItem value="work">Work Visa</SelectItem>
                          <SelectItem value="business">Business Visa</SelectItem>
                          <SelectItem value="family">Family Visa</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo" className="text-foreground font-medium">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder="Tell us about your specific requirements, destination country, or any questions you have..."
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        rows={4}
                        className="bg-background border-border/40 resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-20 bg-muted/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                What to Expect
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Consultation Duration
                    </h3>
                    <p className="text-muted-foreground">
                      Each consultation session lasts approximately 45-60 minutes, giving us enough time to thoroughly 
                      understand your requirements and provide comprehensive guidance.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      What to Bring
                    </h3>
                    <p className="text-muted-foreground">
                      Please bring any relevant documents such as passport, academic transcripts, employment letters, 
                      or previous visa applications to help us provide the most accurate advice.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
