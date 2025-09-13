import { motion } from "framer-motion";
import { Button } from "./button";
import { useState } from "react";

interface GoogleMapProps {
  className?: string;
  height?: string;
  showOverlay?: boolean;
  compact?: boolean;
}

export default function GoogleMap({ 
  className = "", 
  height = "300px", 
  showOverlay = true,
  compact = false 
}: GoogleMapProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Your provided Google Maps link for directions
  const directionsUrl = "https://maps.app.goo.gl/HnpqVR327UC2Npqz8";
  
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div 
      className={`rounded-2xl overflow-hidden shadow-lg relative bg-gray-100 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Map...</p>
          </div>
        </div>
      )}

      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.2065890505693!2d80.15771627507379!3d13.001306987290175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzA0LjciTiA4MMKwMDknMzkuNCJF!5e0!3m2!1sen!2sin!4v1694123456789!5m2!1sen!2sin"
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Robudz Play School Location - 62 Sriram Nagar, Nemilicheri"
        className="w-full"
        onLoad={handleIframeLoad}
      ></iframe>
      
      {/* Interactive Overlay */}
      {showOverlay && (
        <div className={`absolute ${compact ? 'bottom-2 left-2 right-2' : 'bottom-4 left-4 right-4'} bg-white/95 backdrop-blur-sm rounded-lg ${compact ? 'p-3' : 'p-4'} shadow-lg`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} bg-coral rounded-full flex items-center justify-center flex-shrink-0`}>
                <i className="fas fa-school text-white"></i>
              </div>
              <div>
                <h4 className={`${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-800`}>Robudz Play School</h4>
                <p className={`${compact ? 'text-xs' : 'text-xs'} text-gray-600`}>62 Sriram Nagar, Nemilicheri</p>
                {!compact && <p className="text-xs text-gray-500">Tamil Nadu 602024</p>}
              </div>
            </div>
            
            <a 
              href={directionsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button 
                size="sm" 
                className={`bg-gradient-to-r from-coral to-turquoise hover:from-turquoise hover:to-coral text-white ${compact ? 'text-xs px-2 py-1' : 'text-xs px-3 py-1'}`}
              >
                <i className="fas fa-directions mr-1"></i>
                {compact ? 'Go' : 'Get Directions'}
              </Button>
            </a>
          </div>
        </div>
      )}
      
      {/* Corner decorative element */}
      {!compact && (
        <div className="absolute top-4 right-4 bg-turquoise/20 rounded-full p-2">
          <i className="fas fa-map-marker-alt text-turquoise"></i>
        </div>
      )}
    </motion.div>
  );
}