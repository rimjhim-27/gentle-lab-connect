
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
};

const Services = () => {
  const services: Service[] = [
    {
      title: "Blood Tests",
      description:
        "Comprehensive blood work including CBC, metabolic panels, cholesterol screening, and specialized tests.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M14.5 2v17a3.5 3.5 0 0 1-7 0V2" />
          <path d="M11 2a1 1 0 1 0-2 0h2Z" />
        </svg>
      ),
      popular: true,
    },
    {
      title: "Urine Analysis",
      description:
        "Detailed examination of urine samples to detect infections, diseases, and assess overall health.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M9 3h6M9 21L12 1l3 20" />
        </svg>
      ),
    },
    {
      title: "Imaging Services",
      description:
        "Advanced imaging including X-rays, ultrasounds, and more to visualize internal structures.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Z" />
          <path d="m14.5 9.5-5 5" />
          <path d="m9.5 9.5 5 5" />
        </svg>
      ),
    },
    {
      title: "Genetic Testing",
      description:
        "DNA analysis for hereditary conditions, predispositions, and personalized health information.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M2 7h1v13h1V8h17V7H3" />
          <path d="M21 17h-1V4h-1v12H5v1h16" />
          <path d="m15 14-3-3 3-3" />
          <path d="m9 10 3 3-3 3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="section bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Laboratory Services</h2>
          <p className="text-muted-foreground">
            We offer a wide range of diagnostic tests and services with accurate
            results and quick turnaround times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 hover:shadow-lg ${
                service.popular
                  ? "border-primary/20 bg-primary/5"
                  : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto font-medium">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
