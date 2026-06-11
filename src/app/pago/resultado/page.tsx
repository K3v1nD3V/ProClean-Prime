"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentResultPage() {
  const searchParams = useSearchParams();

  const params = Object.fromEntries(
    searchParams.entries()
  );

  console.log(params);

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