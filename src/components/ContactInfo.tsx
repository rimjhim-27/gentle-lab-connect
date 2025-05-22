
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const locations = [
    {
      name: "Main Laboratory",
      address: "123 Health Avenue, Medical District",
      city: "New York, NY 10001",
      phone: "(800) 123-4567",
      hours: "Mon-Fri: 7am-7pm, Sat: 8am-2pm",
      mapUrl: "#",
    },
    {
      name: "Downtown Branch",
      address: "456 Care Street, Central Plaza",
      city: "New York, NY 10023",
      phone: "(800) 765-4321",
      hours: "Mon-Fri: 8am-6pm, Sat: 9am-1pm",
      mapUrl: "#",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Visit Our Locations</h2>
          <p className="text-muted-foreground">
            We have multiple convenient locations to serve you better. Walk-ins are
            welcome, but appointments are recommended.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-muted relative">
                {/* This would be a map in a real implementation */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <div className="space-y-3 text-sm">
                  <p className="flex items-start">
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>
                      {location.address}
                      <br />
                      {location.city}
                    </span>
                  </p>
                  <p className="flex items-center">
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
                      className="mr-2 text-primary shrink-0"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{location.phone}</span>
                  </p>
                  <p className="flex items-center">
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
                      className="mr-2 text-primary shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{location.hours}</span>
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button size="sm" variant="outline" className="w-full">
                    Get Directions
                  </Button>
                  <Button size="sm" className="w-full">
                    Book Here
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-2">General Inquiries</h3>
              <p className="text-muted-foreground mb-2">Have questions about our services?</p>
              <p className="font-medium">info@healthpath.com</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
              <p className="text-muted-foreground mb-2">Need help with your reports or appointments?</p>
              <p className="font-medium">support@healthpath.com</p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-lg mb-2">Emergency Contact</h3>
              <p className="text-muted-foreground mb-2">For urgent medical concerns:</p>
              <p className="font-medium">(800) 999-9999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
