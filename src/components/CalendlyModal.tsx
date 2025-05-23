
import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  useEffect(() => {
    // Load Calendly script when modal opens
    if (open) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Clean up script when modal closes
        document.body.removeChild(script);
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] sm:max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-montserrat">Schedule a Consultation</DialogTitle>
        </DialogHeader>
        <div className="calendly-inline-widget" 
          data-url="https://calendly.com/specialists-chargetrux/intro-call-with-advanced-charging-systems" 
          style={{ minWidth: "320px", height: "700px" }}>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;
