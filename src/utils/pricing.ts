import { FormState } from "@/hooks/useReservationForm";

const BASE_PRICE = 178000;

const DiscountPerDays: Record<string, number> = {
  "1 a 7 días": 0,
  "8 a 11 días": 0.02,
  "12 a 19 días": 0.04,
  "20 días o más": 0.06,
};

const DiscountPerPlan: Record<string, number> = {
  Mensual: 0,
  Trimestral: 0.08,
  Semestral: 0.1,
  Anual: 0.16,
};

function getDiscountPerDays(days: number): number {
  if (days >= 1 && days <= 7) {
    return DiscountPerDays["1 a 7 días"];
  }

  if (days >= 8 && days <= 11) {
    return DiscountPerDays["8 a 11 días"];
  }

  if (days >= 12 && days <= 19) {
    return DiscountPerDays["12 a 19 días"];
  }

  if (days >= 20) {
    return DiscountPerDays["20 días o más"];
  }

  return 0;
}

function getDiscountPerPlan(plan: string): number {
  return DiscountPerPlan[plan] || 0;
}

export function calculateReservationPrice(form: FormState) {
  const days = form.fechas.length;

  const volumeDiscount = getDiscountPerDays(days);

  const planDiscount = getDiscountPerPlan(
    form.planServicio
  );

  const brutalPrice = BASE_PRICE * days;

  const volumeDiscountAmount =
    brutalPrice * volumeDiscount;

  const priceAfterVolumeDiscount =
    brutalPrice - volumeDiscountAmount;

  const planDiscountAmount =
    priceAfterVolumeDiscount * planDiscount;

  const finalPrice =
    priceAfterVolumeDiscount - planDiscountAmount;

  const totalDiscountAmount =
    volumeDiscountAmount + planDiscountAmount;

  return {
    days,
    basePrice: BASE_PRICE,

    brutalPrice,

    finalPrice,

    volumeDiscount,
    planDiscount,

    volumeDiscountAmount,
    planDiscountAmount,

    totalDiscountAmount,
  };
}