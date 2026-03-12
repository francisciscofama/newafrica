import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://chat.whatsapp.com/CDMncFLnmoI7GZHWQzWNiS"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar via WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-pulse" />

      {/* Button */}
      <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all">
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-elevated whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale connosco!
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
