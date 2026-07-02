import {FormState} from "@/hooks/useReservationForm";
import {calculateReservationPrice} from "@/utils/pricing";

interface Step5PaymentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  loading: boolean;
  onPay: () => void;
}

export function Step5Payment({
  form,
  loading,
  onPay,
}: Step5PaymentProps) {
    const pricing = calculateReservationPrice(form);
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">
          Confirma tu reserva
        </h2>

        <p className="text-zinc-500">
          Revisa la información antes de realizar el pago.
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <p>
          Cliente:
          <strong>
            {" "}
            {form.nombre} {form.apellido}
          </strong>
        </p>

        <p>
          Servicio:
          <strong>
            {" "}
            {form.planServicio}
          </strong>
        </p>

        <p>
          Hora:
          <strong>
            {" "}
            {form.hora}
          </strong>
        </p>
      </div>

      <div className="rounded-xl bg-primary/5 p-6">
        <span className="text-sm">
          Total a pagar
        </span>

        <div className="space-y-2">
            <p className="text-sm text-zinc-600">
              {form.fechas.length} día(s) de servicio
            </p>

            <p className="text-3xl font-bold">
                ${Math.round(pricing.finalPrice).toLocaleString("es-CO")}
            </p>

            {pricing.totalDiscountAmount > 0 && (
                <p className="text-sm text-green-700">
                Ahorras $
                {Math.round(
                    pricing.totalDiscountAmount
                ).toLocaleString("es-CO")}
                </p>
            )}
            </div>
      </div>

      <button
        type="button"
        onClick={onPay}
        disabled={loading}
        className="w-full rounded-xl bg-cta py-4 font-bold text-black hover:opacity-90"
      >
        {loading
          ? "Preparando pago..."
          : "Pagar ahora con Bold"}
      </button>
    </div>
  );
}