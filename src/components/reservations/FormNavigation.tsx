"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormNavigationProps {
  step: number;
  totalSteps: number;
  isSubmitting: boolean;
  submitSuccess: boolean;
  currentStepValid: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export function FormNavigation({
  step,
  totalSteps,
  isSubmitting,
  submitSuccess,
  currentStepValid,
  onPrevClick,
  onNextClick,
}: FormNavigationProps) {
  const isLastStep = step === totalSteps - 1;
  if (isLastStep) {
    return (
      <div className="mt-10 flex justify-start">
        <Button
          variant="outline"
          onClick={onPrevClick}
          className="rounded-full px-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Atrás
        </Button>
      </div>
    );
  }
  return (
    <div className="mt-10 flex items-center justify-between">
      <Button
        variant="outline"
        disabled={step === 0}
        onClick={onPrevClick}
        className="rounded-full px-6"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Atrás
      </Button>

      <Button
        onClick={onNextClick}
        disabled={!currentStepValid || isSubmitting || submitSuccess}
        className={`rounded-full bg-cta px-8 font-bold text-black hover:bg-cta/90 ${currentStepValid ? "cursor-pointer" : ""}`}
      >
        {isSubmitting
          ? "Enviando..."
          : submitSuccess
          ? "Reserva enviada"
          : isLastStep
          ? "Pagar con Bold"
          : "Continuar"}

        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
