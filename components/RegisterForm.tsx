"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitLead } from "@/lib/form";

export type BrokerAnswer = "yes" | "no";

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isBroker: BrokerAnswer;
}

interface RegisterFormProps {
  className?: string;
  formType?: string;
  onSuccess?: () => void;
  variant?: "light" | "dark";
}

export default function RegisterForm({
  className = "",
  formType = "hero",
  onSuccess,
  variant = "light",
}: RegisterFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    setSubmitError("");

    try {
      await submitLead(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          isBroker: data.isBroker,
        },
        formType,
      );
      setSubmitted(true);
      reset();
      onSuccess?.();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  const isDark = variant === "dark";

  if (submitted) {
    return (
      <div className={`py-8 text-center ${className}`}>
        <p className={`font-display text-2xl ${isDark ? "text-white" : "text-ink"}`}>
          Thank you!
        </p>
        <p className={`mt-2 font-body text-sm ${isDark ? "text-white/80" : "text-text-muted"}`}>
          You&apos;re registered for VIP access. We&apos;ll be in touch with floor plans and pricing.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${className}`}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`firstName-${formType}`} className="form-label">
            First Name
          </label>
          <input
            id={`firstName-${formType}`}
            type="text"
            autoComplete="given-name"
            className="form-input"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor={`lastName-${formType}`} className="form-label">
            Last Name
          </label>
          <input
            id={`lastName-${formType}`}
            type="text"
            autoComplete="family-name"
            className="form-input"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={`email-${formType}`} className="form-label">
          Email
        </label>
        <input
          id={`email-${formType}`}
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          className="form-input"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor={`phone-${formType}`} className="form-label">
          Phone
        </label>
        <input
          id={`phone-${formType}`}
          type="tel"
          autoComplete="tel"
          placeholder="647-xxx-xxxx"
          className="form-input"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
              message: "Enter a valid phone number",
            },
          })}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <fieldset>
        <legend className="form-label mb-2">Are you a broker?</legend>
        <div className="flex gap-3">
          <label className="flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white px-4 py-2 text-sm transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand/5">
            <input
              type="radio"
              value="yes"
              className="h-4 w-4 accent-brand"
              {...register("isBroker", { required: "Please select an option" })}
            />
            <span>Yes</span>
          </label>
          <label className="flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white px-4 py-2 text-sm transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand/5">
            <input
              type="radio"
              value="no"
              className="h-4 w-4 accent-brand"
              {...register("isBroker", { required: "Please select an option" })}
            />
            <span>No</span>
          </label>
        </div>
        {errors.isBroker && (
          <p className="mt-1 text-xs text-red-600">{errors.isBroker.message}</p>
        )}
      </fieldset>

      {submitError && (
        <p className="text-sm text-red-600" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Register for VIP Access"}
      </button>

      <p className="text-center text-[10px] leading-relaxed text-text-muted">
        By registering, you agree to receive updates about Bronte Trails townhomes.
      </p>
    </form>
  );
}
