
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";

const BookingForm = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Home collection request submitted successfully!", {
        description: "Our team will contact you to confirm your appointment.",
      });
    }, 1500);
  };

  return (
    <section id="booking" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Book Your Home Collection</h2>
            <p className="text-muted-foreground mb-6">
              Schedule a test at your convenience. We'll send our phlebotomist to your home at your preferred time.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M9 13h6" />
                    <path d="M9 17h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Simple Booking Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Book a home collection in less than 2 minutes with our streamlined form.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                    <path d="M15 21v-7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose from multiple time slots that fit your busy schedule.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Professional Home Collection</h3>
                  <p className="text-sm text-muted-foreground">
                    Our trained phlebotomists will visit your home for sample collection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="border border-primary/10">
              <CardHeader>
                <CardTitle>Schedule Your Home Collection</CardTitle>
                <CardDescription>
                  Fill in the details below to book your home collection appointment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Full Address</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter your complete address for home collection"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="test-type">Test type</Label>
                      <Select>
                        <SelectTrigger id="test-type">
                          <SelectValue placeholder="Select test type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blood-test">Blood Test</SelectItem>
                          <SelectItem value="urine-analysis">
                            Urine Analysis
                          </SelectItem>
                          <SelectItem value="imaging">Imaging Services</SelectItem>
                          <SelectItem value="genetic-test">
                            Genetic Testing
                          </SelectItem>
                          <SelectItem value="covid-test">COVID-19 Test</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time-preference">Preferred time</Label>
                      <Select>
                        <SelectTrigger id="time-preference">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (7am-10am)</SelectItem>
                          <SelectItem value="mid-day">Mid-day (10am-1pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (1pm-4pm)</SelectItem>
                          <SelectItem value="evening">Evening (4pm-7pm)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional notes</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any special requirements or concerns?"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Processing..." : "Book Home Collection"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
