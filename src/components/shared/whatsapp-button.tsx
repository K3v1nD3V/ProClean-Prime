import Link from "next/link";

interface wpData {
  phone: string;
  message: string;
}

interface WhatsAppButtonProps {
  children: React.ReactNode;
  data: wpData;
  className?: string;
}

export default function WhatsAppButton({ children, data, className }: Readonly<WhatsAppButtonProps>) {
  const whatsappUrl = `https://wa.me/${data.phone}?text=${encodeURIComponent(data.message)}`;
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={className}
    >
      {children}
    </Link>
  );
}