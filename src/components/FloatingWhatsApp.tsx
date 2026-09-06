import { MessageCircle, Phone } from "lucide-react";

const whatsappHref = "https://wa.me/5511995250742";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      title="Conversar pelo WhatsApp"
      className="whatsapp-float"
    >
      <span className="whatsapp-float__pulse" aria-hidden="true" />
      <MessageCircle aria-hidden="true" size={28} strokeWidth={2.2} />
      <Phone className="whatsapp-float__phone" aria-hidden="true" size={11} strokeWidth={3} />
    </a>
  );
}
