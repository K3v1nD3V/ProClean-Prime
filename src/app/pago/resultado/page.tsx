interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

export default async function PaymentResultPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
    console.log("Payment result params:", params);
  return (
    <div className="mx-auto max-w-3xl py-20">
      <h1 className="text-3xl font-bold">
        Resultado del pago
      </h1>

      <pre className="mt-6 rounded-xl bg-zinc-100 p-6">
        {JSON.stringify(params, null, 2)}
      </pre>
    </div>
  );
}