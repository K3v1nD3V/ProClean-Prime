export function loadBoldCheckout(): Promise<void> {
  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[src="https://checkout.bold.co/library/boldPaymentButton.js"]'
    );

    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://checkout.bold.co/library/boldPaymentButton.js";

    script.async = true;

    script.onload = () => resolve();

    script.onerror = () =>
      reject(
        new Error(
          "No fue posible cargar el checkout de Bold"
        )
      );

    document.head.appendChild(script);
  });
}