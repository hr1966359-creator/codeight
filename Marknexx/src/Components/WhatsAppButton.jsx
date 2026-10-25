import {
  MessageCircle
} from "lucide-react";

import {
  whatsappLink
} from "../data/services";

function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={25} />

      <span>
        WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;