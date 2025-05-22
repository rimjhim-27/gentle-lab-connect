
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const ReportAccess = () => {
  const [reportId, setReportId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportId) return;
    
    setLoading(true);
    // Simulate report lookup
    setTimeout(() => {
      setLoading(false);
      
      // In a real app, this would check if the report exists
      // For demo purposes, we'll show a success message
      if (reportId.length >= 6) {
        toast.success("Report found!", {
          description: "Your report would be displayed here in the real application.",
        });
      } else {
        toast.error("Report not found", {
          description: "Please check your report ID and try again.",
        });
      }
    }, 1500);
  };

  return (
    <section id="reports" className="section gradient-bg text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Access Your Test Reports</h2>
            <p className="mb-6">
              Get your test results quickly and securely. Enter your unique report ID to
              view and download your reports.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="report-id" className="text-white">
                    Report ID
                  </Label>
                  <Input
                    id="report-id"
                    placeholder="Enter your report ID (e.g., LAB-123456)"
                    className="bg-white/20 border-white/20 placeholder:text-white/50 text-white"
                    value={reportId}
                    onChange={(e) => setReportId(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-white/90"
                  disabled={loading}
                >
                  {loading ? "Searching..." : "Access Report"}
                </Button>
              </form>

              <div className="mt-6 text-sm">
                <p>Don't have your report ID?</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Check your email for a message from HealthPath Lab</li>
                  <li>Contact our support team at support@healthpath.com</li>
                  <li>Call our helpline at 800-123-4567</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-semibold">Sample Report Preview</h3>
                  <p className="text-sm opacity-70">Report ID: LAB-240512</p>
                </div>
                <div className="bg-primary/20 px-2 py-1 rounded text-xs font-medium">
                  Completed
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-sm font-medium">Blood Glucose Test</p>
                  <div className="flex justify-between mt-1 text-xs">
                    <span className="opacity-70">Result:</span>
                    <span>95 mg/dL</span>
                  </div>
                  <div className="flex justify-between mt-1 text-xs">
                    <span className="opacity-70">Reference Range:</span>
                    <span>70-100 mg/dL</span>
                  </div>
                </div>
                
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-sm font-medium">Cholesterol</p>
                  <div className="flex justify-between mt-1 text-xs">
                    <span className="opacity-70">Total:</span>
                    <span>180 mg/dL</span>
                  </div>
                  <div className="flex justify-between mt-1 text-xs">
                    <span className="opacity-70">Reference Range:</span>
                    <span>&lt;200 mg/dL</span>
                  </div>
                </div>
                
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-sm font-medium">Complete Blood Count</p>
                  <div className="flex justify-between mt-1 text-xs">
                    <span className="opacity-70">WBC:</span>
                    <span>7.5 × 10^3/μL</span>
                  </div>
                  <div className="flex justify-between mt-1 text-xs">
                    <span className="opacity-70">RBC:</span>
                    <span>5.2 × 10^6/μL</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-2">
                <Button size="sm" variant="outline" className="text-xs w-full border-white/20 hover:bg-white/10">
                  Download PDF
                </Button>
                <Button size="sm" className="text-xs w-full bg-white text-primary hover:bg-white/90">
                  Email Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportAccess;
