
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Home Collection Service</h2>
          <p className="text-muted-foreground">
            We come to you! Our professional phlebotomists provide convenient home collection services to save you time and ensure your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all p-8">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="m12 9-2 3h4l-2 3" />
                  <path d="M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" />
                  <path d="M12 3v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">How It Works</h3>
              <ul className="space-y-3 mt-4 text-muted-foreground">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary shrink-0 mt-0.5"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span>Book your test through our online form or call us</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary shrink-0 mt-0.5"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span>Choose a convenient date and time slot</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary shrink-0 mt-0.5"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span>Our phlebotomist visits your home for sample collection</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary shrink-0 mt-0.5"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span>Receive your results online or via email</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Button asChild className="w-full">
                <Link to="#booking">Book Home Collection</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all p-8">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-primary shrink-0 mt-0.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="font-medium">Phone Support</p>
                  <p className="text-muted-foreground">(800) 123-4567 (Mon-Sat, 7am-8pm)</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-primary shrink-0 mt-0.5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">support@thelabs.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-primary shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="font-medium">Service Hours</p>
                  <p className="text-muted-foreground">Home Collections: 7am-7pm (Mon-Sat)</p>
                  <p className="text-muted-foreground">Sundays: Emergency services only</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <h4 className="font-medium mb-2">Emergency Contact</h4>
              <p className="text-muted-foreground mb-1">For urgent medical concerns:</p>
              <p className="font-medium">(800) 999-9999 (24/7 service)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-2">General Inquiries</h3>
              <p className="text-muted-foreground mb-2">Have questions about our services?</p>
              <p className="font-medium">info@thelabs.com</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
              <p className="text-muted-foreground mb-2">Need help with your reports or appointments?</p>
              <p className="font-medium">support@thelabs.com</p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-lg mb-2">Service Areas</h3>
              <p className="text-muted-foreground mb-2">We provide home collection services in:</p>
              <p className="font-medium">All major cities and surrounding suburbs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
