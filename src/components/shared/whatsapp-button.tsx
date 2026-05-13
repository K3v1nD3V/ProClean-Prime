// src/components/shared/whatsapp-button.tsx

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const phone = "573238893608";
const message =
  "Hola, me gustaría solicitar una cotización para un servicio de limpieza.";

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export default function WhatsAppButton() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_30px_rgba(37,211,102,0.45)]"
    >
      
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 26 26" height="54" width="54">
            <path d="M 8.0322 0 C 3.6422 0 0.0643 3.56 0.0643 7.928 C 0.0643 9.328 0.4342 10.688 1.1256 11.888 L 0 16 L 4.2212 14.896 C 5.387 15.528 6.6975 15.864 8.0322 15.864 C 12.4221 15.864 16 12.304 16 7.936 C 16 5.816 15.1719 3.824 13.6684 2.328 C 12.1649 0.824 10.1628 0 8.0322 0 M 8.0403 1.336 C 9.8091 1.336 11.4654 2.024 12.7196 3.272 C 13.9659 4.52 14.6573 6.176 14.6573 7.936 C 14.6573 11.568 11.6824 14.52 8.0322 14.52 C 6.8423 14.52 5.6764 14.208 4.6633 13.6 L 4.4222 13.464 L 1.9136 14.12 L 2.5809 11.688 L 2.4202 11.432 C 1.7608 10.4 1.4071 9.176 1.4071 7.928 C 1.4151 4.296 4.3819 1.336 8.0403 1.336 M 5.2101 4.264 C 5.0814 4.264 4.8643 4.312 4.6794 4.512 C 4.5026 4.712 3.9799 5.2 3.9799 6.168 C 3.9799 7.144 4.6955 8.08 4.7839 8.216 C 4.8965 8.352 6.199 10.352 8.201 11.2 C 8.6754 11.416 9.0453 11.536 9.3347 11.624 C 9.8091 11.776 10.2433 11.752 10.589 11.704 C 10.9749 11.648 11.7629 11.224 11.9317 10.76 C 12.1005 10.296 12.1005 9.904 12.0523 9.816 C 11.996 9.736 11.8674 9.688 11.6664 9.6 C 11.4654 9.488 10.4844 9.008 10.3076 8.944 C 10.1227 8.88 10.0101 8.848 9.8574 9.04 C 9.7287 9.24 9.3428 9.688 9.2302 9.816 C 9.1096 9.952 8.997 9.968 8.804 9.872 C 8.595 9.768 7.9517 9.56 7.196 8.888 C 6.601 8.36 6.2071 7.712 6.0864 7.512 C 5.99 7.32 6.0784 7.2 6.1749 7.112 C 6.2633 7.024 6.392 6.88 6.4724 6.76 C 6.5769 6.648 6.6091 6.56 6.6734 6.432 C 6.7378 6.296 6.7056 6.184 6.6573 6.088 C 6.6091 6 6.2071 5.008 6.0383 4.616 C 5.8774 4.232 5.7166 4.28 5.588 4.272 C 5.4754 4.272 5.3467 4.264 5.2101 4.264 Z" transform="translate(5.5 5.5)">
            </path>
        </svg>
    </Link>
  );
}