import { Suspense } from "react";
import PaymentResultContent from "./PaymentResultContent";

export default function PaymentResultPage() {
  return (
    <Suspense fallback={<div>Cargando resultado del pago...</div>}>
      <PaymentResultContent />
    </Suspense>
  );
}