
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content:
        "HealthPath Lab's quick and accurate service impressed me. The online booking was seamless, and I received my results faster than expected. The staff was professional and caring throughout.",
      avatar: "SJ",
    },
    {
      name: "Dr. Michael Chen",
      role: "Family Physician",
      content:
        "I refer all my patients to HealthPath for their diagnostic needs. Their comprehensive reporting and attention to detail help me provide better care. The lab staff is always responsive to urgent requests.",
      avatar: "MC",
    },
    {
      name: "Robert Williams",
      role: "Regular Patient",
      content:
        "As someone who needs regular testing for a chronic condition, I appreciate the consistency and care provided by HealthPath. Their online report system makes it easy to track my progress over time.",
      avatar: "RW",
    },
  ];

  return (
    <section className="section bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-muted-foreground">
            We're proud to provide exceptional service that makes a difference
            in people's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none bg-background shadow-md hover:shadow-lg transition-all"
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFC107"
                      stroke="#FFC107"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-medium flex items-center justify-center">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
