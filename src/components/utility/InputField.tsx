"use client";

import { ReservationFormData } from "@/middlewares/schema";
import { memo } from "react";
import { UseFormRegister } from "react-hook-form";

interface FormFieldProps {
    id: keyof ReservationFormData;
    placeholder?: string;
    type?: string;
    register: UseFormRegister<ReservationFormData>;
    error?: string;
    disabled?: boolean;
    isTextarea?: boolean;
};

const ErrorMessage = memo(({
    message
}: {
    message?: string
}) => {
    if (!message) return null;
    return <span className="text-red-500 text-sm mt-1 block">{message}</span>;
});

ErrorMessage.displayName = "ErrorMessage";

export const InputField = memo((
    {
        id,
        placeholder,
        type = "text",
        register,
        error,
        disabled,
        isTextarea = false
    }: FormFieldProps
) => {
    const InputComponent = isTextarea ? "textarea" : "input";

    return (
        <div>
            <InputComponent
                {...register(id)}
                type={isTextarea ? undefined : type}
                placeholder={placeholder}
                autoComplete="off"
                className="input-field"
                disabled={disabled}
            />
            <ErrorMessage message={error} />
        </div>
    );
});

InputField.displayName = "FormField";