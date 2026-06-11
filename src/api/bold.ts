export interface CreateBoldOrderRequest {
  customerName: string;
  email: string;
  phone: string;
  fechas: string[];
  planServicio: string;

  reservationData: unknown;
}
export async function createBoldOrder(
  payload: CreateBoldOrderRequest
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bold/create-order`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error("Error creando orden de pago");
  }

  return response.json();
}