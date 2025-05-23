
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
};

type Package = {
  id: string;
  name: string;
  description: string;
  tests: string[];
  price: number;
  popular?: boolean;
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<"services" | "packages">("services");
  const [openPackage, setOpenPackage] = useState<string | null>(null);

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
    {
      title: "Microbiological Tests",
      description:
        "Culture and sensitivity tests to identify bacterial, fungal, and viral infections and appropriate treatments.",
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
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6a2 2 0 0 0 0 4c4 0 4 2 4 3" />
          <path d="M12 18v-3" />
        </svg>
      ),
    },
    {
      title: "Hormonal Assessment",
      description:
        "Comprehensive hormonal analysis including thyroid function, reproductive hormones, and stress hormones.",
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
          <path d="M6.1 8.4a4.8 4.8 0 0 1 .2-4A4.8 4.8 0 0 1 8 1.2" />
          <path d="M5.1 17a4.8 4.8 0 0 0 .2-4" />
          <path d="M17.8 19.2a4.8 4.8 0 0 0 2.6-3.2" />
          <path d="M11 14l4.5 4.5" />
          <path d="M18 2a4 4 0 0 1-4 4 7 7 0 0 0-7 7c0 4-3 6-3 6" />
          <path d="M18 22a9.7 9.7 0 0 0 .3-8.6" />
        </svg>
      ),
      popular: true,
    },
    {
      title: "Allergy Testing",
      description:
        "Identify allergic reactions to various substances including foods, environmental factors, and medications.",
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
          <path d="M8 3v12" />
          <path d="M19 5c1.5 0 3 .5 3 2 0 1.4-2 3.7-3 5-1-1.3-3-3.6-3-5 0-1.5 1.5-2 3-2" />
          <path d="M12 20s-9-4-9-9a9 9 0 1 1 18 0c0 5-9 9-9 9" />
        </svg>
      ),
    },
    {
      title: "Nutritional Analysis",
      description:
        "Assessment of vitamins, minerals, and other nutrients to identify deficiencies or excesses.",
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
          <path d="M11 14c-3-1-9-.5-9 4v1a2 2 0 0 0 2 2h1" />
          <path d="M11 20c-6 0-9-2-9-6v-3c0-3.5 5-6 9-6" />
          <path d="M15 6c-2.5 0-4 .5-5.1 1.2" />
          <path d="M17 10c-4.1 0-7.8.4-11 .8V10c0-3.5 5-6 11-6s11 2.5 11 6-5 6-11 6" />
          <path d="M18 22c-7 0-11-2-11-6v-3" />
        </svg>
      ),
    },
  ];

  const packages: Package[] = [
    {
      id: "basic",
      name: "Basic Health Checkup",
      description: "Essential tests to assess your general health status",
      tests: [
        "Complete Blood Count (CBC)",
        "Lipid Profile",
        "Blood Glucose",
        "Liver Function Tests",
        "Kidney Function Tests",
        "Urine Routine Examination",
      ],
      price: 1499,
      popular: true,
    },
    {
      id: "comprehensive",
      name: "Comprehensive Health Package",
      description: "Thorough assessment for overall health and early detection of common conditions",
      tests: [
        "Complete Blood Count (CBC)",
        "Lipid Profile",
        "Blood Glucose (Fasting and PP)",
        "HbA1c",
        "Liver Function Tests",
        "Kidney Function Tests",
        "Thyroid Profile (TSH, T3, T4)",
        "Urine Routine Examination",
        "Chest X-Ray",
        "ECG",
        "Vitamin D, B12 & Calcium",
      ],
      price: 4999,
    },
    {
      id: "cardiac",
      name: "Cardiac Risk Assessment",
      description: "Specialized tests focusing on heart health and cardiovascular risk factors",
      tests: [
        "Lipid Profile (Total Cholesterol, HDL, LDL, Triglycerides)",
        "Apolipoprotein A1 & B",
        "Lipoprotein(a)",
        "hsCRP",
        "Homocysteine",
        "ECG",
        "2D Echocardiogram",
        "Treadmill Test (TMT)",
        "HbA1c",
      ],
      price: 6499,
      popular: true,
    },
    {
      id: "womens",
      name: "Women's Wellness Package",
      description: "Comprehensive health assessment tailored for women's specific health needs",
      tests: [
        "Complete Blood Count",
        "Thyroid Profile",
        "Blood Glucose (Fasting)",
        "Lipid Profile",
        "Liver & Kidney Function Tests",
        "Calcium & Vitamin D3",
        "Pap Smear",
        "Mammography (for women over 40)",
        "Pelvic Ultrasound",
        "Iron Studies",
      ],
      price: 7999,
    },
    {
      id: "diabetes",
      name: "Diabetes Care Package",
      description: "Specialized tests for diabetes management and monitoring",
      tests: [
        "Fasting & Post Prandial Blood Glucose",
        "HbA1c",
        "Kidney Function Tests",
        "Lipid Profile",
        "Urine Microalbumin",
        "Liver Function Tests",
        "Complete Blood Count",
        "Thyroid Profile",
        "Retina Examination",
        "Foot Examination",
      ],
      price: 3299,
    },
  ];
  
  const togglePackage = (id: string) => {
    if (openPackage === id) {
      setOpenPackage(null);
    } else {
      setOpenPackage(id);
    }
  };

  return (
    <section id="services" className="section bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Laboratory Services</h2>
          <p className="text-muted-foreground">
            We offer a wide range of diagnostic tests and services with accurate
            results and quick turnaround times.
          </p>
        </div>

        <div className="mb-8">
          <NavigationMenu className="justify-center mb-6">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 rounded-md cursor-pointer",
                    activeTab === "services"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                  onClick={() => setActiveTab("services")}
                >
                  Individual Tests
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 rounded-md cursor-pointer",
                    activeTab === "packages"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                  onClick={() => setActiveTab("packages")}
                >
                  Health Packages
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {activeTab === "services" && (
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
          )}

          {activeTab === "packages" && (
            <div className="space-y-6">
              {packages.map((pkg) => (
                <Collapsible
                  key={pkg.id}
                  open={openPackage === pkg.id}
                  onOpenChange={() => togglePackage(pkg.id)}
                  className={cn(
                    "border rounded-lg bg-card overflow-hidden transition-all duration-200",
                    openPackage === pkg.id ? "shadow-md" : "",
                    pkg.popular ? "border-primary/30" : ""
                  )}
                >
                  <div className="flex justify-between items-center p-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{pkg.name}</h3>
                        {pkg.popular && (
                          <span className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mt-1">{pkg.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-lg font-bold">₹{pkg.price}</span>
                      </div>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" size="sm">
                          Details
                          <ChevronDown 
                            className={cn(
                              "ml-1 h-4 w-4 transition-transform duration-200",
                              openPackage === pkg.id ? "rotate-180" : ""
                            )}
                          />
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                  </div>

                  <CollapsibleContent>
                    <div className="px-6 pb-6 border-t pt-4">
                      <h4 className="font-medium mb-3">Included Tests</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {pkg.tests.map((test, i) => (
                          <li key={i} className="flex items-center gap-2">
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
                              className="text-primary"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{test}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Button>Book This Package</Button>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
