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
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);

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
        "Lipid Profile (Total Cholesterol, HDL, LDL, VLDL, Triglycerides)",
        "Blood Glucose (Fasting)",
        "Liver Function Tests (SGOT, SGPT, Bilirubin, ALP)",
        "Kidney Function Tests (Urea, Creatinine, Uric Acid)",
        "Serum Electrolytes (Sodium, Potassium, Chloride)",
        "Urine Routine Examination",
        "Thyroid Profile - TSH"
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
        "ESR (Erythrocyte Sedimentation Rate)",
        "Lipid Profile (Total Cholesterol, HDL, LDL, VLDL, Triglycerides)",
        "Blood Glucose (Fasting and Post Prandial)",
        "HbA1c (Glycosylated Hemoglobin)",
        "Liver Function Tests (SGOT, SGPT, GGT, Bilirubin, Total Protein, Albumin, Globulin)",
        "Kidney Function Tests (Urea, Creatinine, Uric Acid, Microalbumin)",
        "Thyroid Profile (TSH, T3, T4, FT3, FT4)",
        "Serum Electrolytes (Sodium, Potassium, Chloride, Calcium, Phosphorus)",
        "Urine Routine Examination",
        "Stool Routine Examination",
        "Vitamin D Level",
        "Vitamin B12 Level",
        "Ferritin (Iron Storage)",
        "Chest X-Ray",
        "ECG (Electrocardiogram)",
        "Ultrasound Abdomen"
      ],
      price: 4999,
    },
    {
      id: "cardiac",
      name: "Cardiac Risk Assessment",
      description: "Specialized tests focusing on heart health and cardiovascular risk factors",
      tests: [
        "Complete Blood Count (CBC)",
        "ESR (Erythrocyte Sedimentation Rate)",
        "Lipid Profile (Total Cholesterol, HDL, LDL, VLDL, Triglycerides)",
        "Blood Glucose (Fasting)",
        "HbA1c (Glycosylated Hemoglobin)",
        "Apolipoprotein A1 & B",
        "Lipoprotein(a)",
        "High-sensitivity C-Reactive Protein (hsCRP)",
        "Homocysteine",
        "NT-proBNP (N-terminal pro-brain natriuretic peptide)",
        "Troponin I / Troponin T",
        "Serum Electrolytes (Sodium, Potassium, Chloride, Calcium)",
        "Kidney Function Tests (Urea, Creatinine)",
        "ECG (Electrocardiogram)",
        "2D Echocardiogram",
        "Treadmill Test (TMT)",
        "Carotid Doppler Ultrasound"
      ],
      price: 6499,
      popular: true,
    },
    {
      id: "womens",
      name: "Women's Wellness Package",
      description: "Comprehensive health assessment tailored for women's specific health needs",
      tests: [
        "Complete Blood Count (CBC)",
        "ESR (Erythrocyte Sedimentation Rate)",
        "Thyroid Profile (TSH, T3, T4)",
        "Blood Glucose (Fasting)",
        "HbA1c (Glycosylated Hemoglobin)",
        "Lipid Profile (Total Cholesterol, HDL, LDL, Triglycerides)",
        "Liver Function Tests (SGOT, SGPT, Bilirubin, ALP)",
        "Kidney Function Tests (Urea, Creatinine)",
        "Calcium & Vitamin D3",
        "Vitamin B12",
        "Folic Acid",
        "Ferritin & Iron Profile",
        "DHEA-S (Dehydroepiandrosterone Sulfate)",
        "FSH (Follicle Stimulating Hormone)",
        "LH (Luteinizing Hormone)",
        "Estradiol (E2)",
        "Progesterone",
        "Pap Smear",
        "Mammography (for women over 40)",
        "Pelvic Ultrasound",
        "Breast Examination",
        "Bone Mineral Density Scan"
      ],
      price: 7999,
    },
    {
      id: "diabetes",
      name: "Diabetes Care Package",
      description: "Specialized tests for diabetes management and monitoring",
      tests: [
        "Complete Blood Count (CBC)",
        "Fasting & Post Prandial Blood Glucose",
        "HbA1c (Glycosylated Hemoglobin)",
        "Fructosamine",
        "Insulin Level (Fasting)",
        "C-Peptide",
        "Kidney Function Tests (Urea, Creatinine, Uric Acid)",
        "Microalbuminuria (Urine Microalbumin)",
        "Urine Routine Examination",
        "Lipid Profile (Total Cholesterol, HDL, LDL, Triglycerides)",
        "Liver Function Tests (SGOT, SGPT, Bilirubin)",
        "Thyroid Profile (TSH, T3, T4)",
        "Serum Electrolytes (Sodium, Potassium, Chloride)",
        "Vitamin B12",
        "Vitamin D",
        "GAD Antibodies (for Type 1 diabetes)",
        "Retina Examination",
        "Foot Examination (Diabetic Neuropathy Assessment)",
        "ECG (Electrocardiogram)"
      ],
      price: 3299,
    },
    {
      id: "senior",
      name: "Senior Citizen Package",
      description: "Comprehensive health assessment for adults over 60 years",
      tests: [
        "Complete Blood Count (CBC)",
        "ESR (Erythrocyte Sedimentation Rate)",
        "Blood Glucose (Fasting and PP)",
        "HbA1c (Glycosylated Hemoglobin)",
        "Lipid Profile (Total Cholesterol, HDL, LDL, Triglycerides)",
        "Liver Function Tests (SGOT, SGPT, ALP, Bilirubin, Total Protein)",
        "Kidney Function Tests (Urea, Creatinine, Uric Acid)",
        "Thyroid Profile (TSH, T3, T4)",
        "Vitamin B12 & Folate",
        "Vitamin D3",
        "Calcium & Phosphorus",
        "Serum Electrolytes (Sodium, Potassium, Chloride)",
        "PSA (for men)",
        "Urine Routine Examination",
        "Chest X-Ray",
        "ECG (Electrocardiogram)",
        "Ultrasound Abdomen",
        "Bone Mineral Density Scan",
        "Eye Examination (Glaucoma, Cataract screening)",
        "Hearing Assessment"
      ],
      price: 5999,
    },
    {
      id: "thyroid",
      name: "Thyroid Function Package",
      description: "Comprehensive assessment of thyroid health and related parameters",
      tests: [
        "TSH (Thyroid Stimulating Hormone)",
        "T3 (Triiodothyronine)",
        "T4 (Thyroxine)",
        "Free T3",
        "Free T4",
        "Anti-TPO (Thyroid Peroxidase Antibody)",
        "Anti-Tg (Thyroglobulin Antibody)",
        "TSH Receptor Antibody",
        "Thyroglobulin",
        "Complete Blood Count (CBC)",
        "Lipid Profile",
        "Blood Glucose (Fasting)",
        "Vitamin B12",
        "Vitamin D",
        "Calcium & Phosphorus",
        "Ultrasound of Thyroid Gland"
      ],
      price: 2799,
    },
  ];
  
  const togglePackage = (id: string) => {
    if (openPackage === id) {
      setOpenPackage(null);
    } else {
      setOpenPackage(id);
    }
  };

  // Filter services and packages based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredServices(services);
      setFilteredPackages(packages);
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Filter services
    const matchedServices = services.filter(service => 
      service.title.toLowerCase().includes(query) || 
      service.description.toLowerCase().includes(query)
    );
    setFilteredServices(matchedServices);
    
    // Filter packages
    const matchedPackages = packages.filter(pkg => 
      pkg.name.toLowerCase().includes(query) || 
      pkg.description.toLowerCase().includes(query) ||
      pkg.tests.some(test => test.toLowerCase().includes(query))
    );
    setFilteredPackages(matchedPackages);
  }, [searchQuery]);

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

        <div className="mb-6 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              type="text"
              placeholder="Search tests, packages, or health conditions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
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
            <>
              {filteredServices.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No tests found matching your search.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredServices.map((service, index) => (
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
            </>
          )}

          {activeTab === "packages" && (
            <>
              {filteredPackages.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No packages found matching your search.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPackages.map((pkg) => (
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
                                {searchQuery && test.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                                  <span className="bg-yellow-100 dark:bg-yellow-900/30">{test}</span>
                                ) : (
                                  <span>{test}</span>
                                )}
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
