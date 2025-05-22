
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Background with soft gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2800')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70"></div>
      </div>
      
      <div className="container relative z-10 flex flex-col items-start gap-6 pt-20">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Your Health Is Our <span className="text-primary">Priority</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Comprehensive pathology testing with care, accuracy, and quick results to 
            support your healthcare journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full">
              Book a Test Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Access Your Reports
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mt-10">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center"
                >
                  <span className="text-xs font-semibold text-primary">★</span>
                </div>
              ))}
            </div>
            <div>
              <p className="font-medium text-sm">Trusted by over 10,000+ patients</p>
              <p className="text-xs text-muted-foreground">5-star rated laboratory services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
