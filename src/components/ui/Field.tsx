"use client";

import { cn } from "@/lib/utils";
import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  error?: string;
};

export function TextField({
  label,
  error,
  className,
  ...props
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
        {label}
        {props.required && (
          <span className="text-primary" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      <input
        id={id}
        className={cn(
          "border-b border-ink/15 bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-silver focus:border-primary",
          error && "border-red-500",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </span>
      )}
    </div>
  );
}

export function TextAreaField({
  label,
  error,
  className,
  ...props
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
        {label}
        {props.required && (
          <span className="text-primary" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      <textarea
        id={id}
        className={cn(
          "resize-none border-b border-ink/15 bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-silver focus:border-primary",
          error && "border-red-500",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </span>
      )}
    </div>
  );
}

export function SelectField({
  label,
  error,
  className,
  children,
  ...props
}: BaseProps & React.SelectHTMLAttributes<HTMLSelectElement>) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
        {label}
        {props.required && (
          <span className="text-primary" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      <select
        id={id}
        className={cn(
          "border-b border-ink/15 bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-primary",
          error && "border-red-500",
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
