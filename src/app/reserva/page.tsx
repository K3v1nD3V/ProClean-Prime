"use client";
//API
import { createReservation } from "@/api/reservation";
import { createBoldOrder } from "@/api/bold";
//UTILS
import {loadBoldCheckout} from "@/utils/loadBoldCheckout";
//TYPES
//HOOKS
import { useReservationForm } from "@/hooks/useReservationForm";
//COMPONENTS
import { FormProgress } from "@/components/reservations/FormProgress";
import { FormNavigation } from "@/components/reservations/FormNavigation";
import { FormMessage } from "@/components/reservations/FormMessage";
import { ReservationSummary } from "@/components/reservations/ReservationSummary";
import { Step1PersonalInfo } from "@/components/forms/steps/Step1PersonalInfo";
import { Step2Location } from "@/components/forms/steps/Step2Location";
import { Step3Identification } from "@/components/forms/steps/Step3Identification";
import { Step4Service } from "@/components/forms/steps/Step4Service";
import { Step5Payment } from "@/components/forms/steps/Step5Payment";
import { useState } from "react";

export default function ReservaPage() {
  const {
    step,
    form,
    touched,
    isSubmitting,
    submitError,
    submitSuccess,
    steps,
    progress,
    errors,
    stepErrorsCount,
    currentStepValid,
    updateField,
    setTouched,
    setIsSubmitting,
    setSubmitError,
    setSubmitSuccess,
    markCurrentStepFieldsAsTouched,
    prevStep,
    nextStep
  } = useReservationForm();
  const [isPaying, setIsPaying] = useState(false);

  async function handlePayment() {
    try {
      setIsPaying(true);

      const order = await createBoldOrder({
        customerName: `${form.nombre} ${form.apellido}`,
        email: form.correo,
        phone: form.celular,
        fechas: form.fechas,
        planServicio: form.planServicio,

        reservationData: form,
      });
      const amoutString = order.amount.toString();
      await loadBoldCheckout();

      const checkout =
        new window.BoldCheckout({
          orderId: order.reference,
          currency: order.currency,
          amount: amoutString,
          apiKey: order.identityKey,
          integritySignature:
            order.integritySignature,

          description:
            `Reserva ${form.planServicio} - ${form.nombre} ${form.apellido}`,

          // redirectionUrl:
          //   `${window.location.origin}/pago/resultado`,
        });
        console.log({
          orderId: order.reference,
          currency: order.currency,
          amount: amoutString,
          apiKey: order.identityKey,
          integritySignature: order.integritySignature,
        });
        console.log("BoldCheckout:", window.BoldCheckout);
      checkout.open();
    } catch (error) {
      console.error(error);

      setSubmitError(
        "No fue posible iniciar el proceso de pago."
      );
    } finally {
      setIsPaying(false);
    }
  }

  async function handleSubmit() {
    setSubmitError(null);
    setIsSubmitting(true);
    console.log("Submitting reservation with data:", form);
    try {
      await createReservation({
        nombre: form.nombre,
        apellido: form.apellido,
        correo: form.correo,
        celular: form.celular,
        barrio: form.barrio,
        direccion: form.direccion,
        llegada: form.llegada || null,
        apartamento: form.apartamento || null,
        tipoDocumento: form.tipoDocumento,
        numeroDocumento: form.numeroDocumento,
        referido: form.referido,
        planServicio: form.planServicio,
        requerimientos: form.requerimientos || null,
        fechas: form.fechas,
        hora: form.hora,
      });
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar la reserva."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleNextStep() {
    if (!currentStepValid) {
      markCurrentStepFieldsAsTouched();
      return;
    }

    if (step < steps.length - 1) {
      nextStep();
      return;
    }

    handleSubmit();
  }

  function onFieldChange(key: string, value: string | string[]) {
    updateField(key, value);
    setTouched((prev) => ({ ...prev, [key]: false }));
  }

  function onFieldBlur(key: string) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  return (
    <section className="bg-zinc-100 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Reserva online
          </p>

          <h1 className="mt-3 text-4xl font-black text-primary md:text-5xl">
            Agenda tu servicio
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            Completa el formulario y nuestro equipo coordinará tu servicio
            profesional de limpieza.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.75fr]">
          {/* FORMULARIO */}
          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <FormProgress
              step={step}
              steps={steps}
              progress={progress}
              stepErrorsCount={stepErrorsCount}
            />

            {/* STEP CONTENT */}
            <div className="space-y-6">
              {step === 0 && (
                <Step1PersonalInfo
                  form={form}
                  errors={errors}
                  touched={touched}
                  onFieldChange={onFieldChange}
                  onFieldBlur={onFieldBlur}
                />
              )}

              {step === 1 && (
                <Step2Location
                  form={form}
                  errors={errors}
                  touched={touched}
                  onFieldChange={onFieldChange}
                  onFieldBlur={onFieldBlur}
                />
              )}

              {step === 2 && (
                <Step3Identification
                  form={form}
                  errors={errors}
                  touched={touched}
                  onFieldChange={onFieldChange}
                  onFieldBlur={onFieldBlur}
                />
              )}

              {step === 3 && (
                <Step4Service
                  form={form}
                  errors={errors}
                  touched={touched}
                  onFieldChange={onFieldChange}
                  onFieldBlur={onFieldBlur}
                />
              )}

              {step === 4 && (
                <Step5Payment
                  form={form}
                  loading={isPaying}
                  onPay={handlePayment}
                />
              )}
            </div>

            <FormNavigation
              step={step}
              totalSteps={steps.length}
              isSubmitting={isSubmitting}
              submitSuccess={submitSuccess}
              currentStepValid={currentStepValid}
              onPrevClick={prevStep}
              onNextClick={handleNextStep}
            />

            <FormMessage
              submitError={submitError}
              submitSuccess={submitSuccess}
            />
          </div>

          {/* RESUMEN */}
          <div className="space-y-6">
            <ReservationSummary form={form} />
          </div>
        </div>
      </div>
    </section>
  );
}
