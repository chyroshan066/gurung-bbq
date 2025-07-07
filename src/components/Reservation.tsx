"use client";

import { memo, useCallback, useMemo } from "react";
import { IonIcon } from "./utility/IonIcon";
import { useState } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { onSubmit } from "@/utils/formData";

const ReservationFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Phone number is required"),
    person: z.string().min(1, "Number of person is required"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
    message: z.string().min(1, "Message is required"),
});

type ReservationFormData = z.infer<typeof ReservationFormSchema>;

const initialValues: ReservationFormData = {
    name: "",
    phone: "",
    person: "",
    date: "",
    time: "",
    message: "",
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

interface FormFieldProps {
    id: keyof ReservationFormData;
    placeholder: string;
    type?: string;
    register: UseFormRegister<ReservationFormData>;
    // error?: string;
    // disabled?: boolean;
    isTextarea?: boolean;
};

// type AlertState = {
//     isVisible: boolean;
//     type: "success" | "error" | "warning" | "info";
//     title?: string;
//     message: string;
// }

const InputField = memo((
    {
        id,
        placeholder,
        type = "text",
        register,
        // error,
        //     disabled,
        isTextarea = false
    }: FormFieldProps
) => {
    const InputComponent = isTextarea ? "textarea" : "input";

    return (
        // <div>
        //     <InputComponent
        //         {...register(id)}
        //         type={isTextarea ? undefined : type}
        //         id={id}
        //         placeholder={placeholder}
        //         rows={isTextarea ? rows : undefined}
        //         className={`input ${isTextarea ? 'resize-none' : ''}`}
        //         disabled={disabled}
        //     />
        //     <ErrorMessage message={error} />
        // </div>
        // <div>
        <InputComponent
            {...register(id)}
            type={isTextarea ? undefined : type}
            placeholder={placeholder}
            autoComplete="off"
            className="input-field"
        />
        // {/* <ErrorMessage message={error} /> */ }
        // </div>
    );
});

InputField.displayName = "FormField";

export const Reservation = memo(() => {
    // const [alertState, setAlertState] = useState<AlertState>({
    //     isVisible: false,
    //     type: "success",
    //     message: "",
    // });
    const [submitStatus, setSubmitStatus] = useState<string>("");

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
            isValid,
            isDirty
        }
    } = useForm<ReservationFormData>({
        defaultValues: initialValues,
        resolver: zodResolver(ReservationFormSchema),
        mode: "onChange", // Enable real-time validation for better UX
    });

    // const showAlert = useCallback((
    //     type: AlertState["type"],
    //     message: string,
    //     title?: string
    // ) => {
    //     setAlertState({
    //         isVisible: true,
    //         type,
    //         message,
    //         title,
    //     });
    // }, []);

    // const hideAlert = useCallback(() => {
    //     setAlertState(prev => ({
    //         ...prev,
    //         isVisible: false,
    //     }));
    // }, []);

    const handleFormSubmit = useCallback(async (data: ReservationFormData) => {
        try {
            setSubmitStatus("Sending...");
            await onSubmit(data);
            setSubmitStatus("Message sent successfully!");

            // showAlert(
            //     "success",
            //     "Your message has been sent successfully! I'll get back to you soon.",
            //     "Message Sent!"
            // );

            reset(initialValues);
            setTimeout(() => setSubmitStatus(""), 3000);
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : "Something went wrong while sending your message. Please try again.";

            // showAlert(
            //     "error",
            //     errorMessage,
            //     "Sending Failed"
            // );

            setSubmitStatus(`Error: ${errorMessage}`);
            console.error('Form submission error:', error);
        }
    }, [reset]);
    // }, [reset, showAlert]);

    const onFormSubmit = handleSubmit(handleFormSubmit);

    const isButtonDisabled = useMemo(
        () => isSubmitting || !isValid || !isDirty,
        [isSubmitting, isValid, isDirty]
    );

    const buttonText = useMemo(
        () => isSubmitting ? "Booking..." : "Book A Table",
        [isSubmitting]
    );

    return <>
        <section className="reservation">
            <div className="custom-container">
                <div className="form reservation-form bg-black-10">
                    <form
                        className="form-left"
                        onSubmit={onFormSubmit}
                        noValidate
                    >
                        <h2 className="headline-1 text-center">Online Reservation</h2>
                        <p className="form-text text-center">
                            Booking request <a href="tel:+88123123456" className="link">+88-123-123456 </a>
                            or fill out the order form
                        </p>


                        {/* Status Message */}
                        {submitStatus && (
                            <div className={`status-message ${submitStatus.includes('Error') ? 'error' : 'success'}`}>
                                {submitStatus}
                            </div>
                        )}


                        <div className="input-wrapper">

                            <InputField
                                id="name"
                                placeholder="Your Name"
                                register={register}
                            // error={errors.name?.message}
                            // disabled={isSubmitting}
                            />

                            <InputField
                                id="phone"
                                type="tel"
                                placeholder="Phone Number"
                                register={register}
                            // error={errors.name?.message}
                            // disabled={isSubmitting}
                            />

                        </div>
                        <div className="input-wrapper">
                            <div className="icon-wrapper">

                                <IonIcon
                                    name="person-outline"
                                    aria-hidden="true"
                                />

                                <select
                                    {...register("person")}
                                    className="input-field"
                                >
                                    {[...Array(7)].map((_, index) => (
                                        <option
                                            key={index}
                                            value={`${index + 1}-person`}
                                        >
                                            {index + 1} Person
                                        </option>
                                    ))}
                                </select>

                                <IonIcon
                                    name="chevron-down"
                                    aria-hidden="true"
                                />

                            </div>

                            <div className="icon-wrapper">

                                <IonIcon
                                    name="calendar-clear-outline"
                                    aria-hidden="true"
                                />

                                <input
                                    {...register("date")}
                                    type="date"
                                    className="input-field"
                                />

                                <IonIcon
                                    name="chevron-down"
                                    aria-hidden="true"
                                />

                            </div>

                            <div className="icon-wrapper">

                                <IonIcon
                                    name="time-outline"
                                    aria-hidden="true"
                                />

                                <select
                                    {...register("time")}
                                    className="input-field"
                                >
                                    {[...Array(3)].map((_, index) => (
                                        <option
                                            key={index}
                                            value={`${10 + index}:00am`}
                                        >
                                            {10 + index} : 00 am
                                        </option>
                                    ))}

                                    {[...Array(10)].map((_, index) => (
                                        <option
                                            key={index}
                                            value={`${index < 9 ? `0${1 + index}` : 1 + index}:00pm`}
                                        >
                                            {index < 9 ? `0${1 + index}` : 1 + index} : 00 pm
                                        </option>
                                    ))}

                                </select>

                                <IonIcon name="chevron-down" aria-hidden="true" />
                            </div>

                        </div>

                        <InputField
                            id="message"
                            placeholder="Message"
                            register={register}
                            isTextarea={true}
                        // error={errors.name?.message}
                        // disabled={isSubmitting}
                        />

                        <button
                            type="submit"
                            className="btn btn-secondary"
                            disabled={isButtonDisabled}
                        >
                            <span className="text text-1">{buttonText}</span>
                            <span
                                className="text text-2"
                                aria-hidden="true"
                            >
                                {buttonText}
                            </span>
                        </button>

                    </form>

                    <div
                        className="form-right text-center"
                        style={{ "backgroundImage": "url('/images/form-pattern.png')" } as React.CSSProperties}
                    >
                        <h2 className="headline-1 text-center">Contact Us</h2>
                        <p className="contact-label">Booking Request</p>
                        <a
                            href="tel:+88123123456"
                            className="body-1 contact-number hover-underline"
                        >
                            +88-123-123456
                        </a>
                        <div className="separator"></div>
                        <p className="contact-label">Location</p>
                        <address className="body-4">
                            Restaurant St, Delicious City, <br />
                            London 9578, UK
                        </address>
                        <p className="contact-label">Lunch Time</p>
                        <p className="body-4">
                            Monday to Sunday <br />
                            11.00 am - 2.30pm
                        </p>
                        <p className="contact-label">Dinner Time</p>
                        <p className="body-4">
                            Monday to Sunday <br />
                            05.00 pm - 10.00pm
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>;
});

Reservation.displayName = "Reservation";