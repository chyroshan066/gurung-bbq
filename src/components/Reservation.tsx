"use client";

import { memo, useCallback, useMemo } from "react";
import { IonIcon } from "./utility/IonIcon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onSubmit } from "@/utils/formData";
import { ReservationFormData, ReservationFormSchema } from "@/middlewares/schema";
import { InputField } from "./utility/InputField";
import { SubmitButton } from "./utility/Button/SubmitButton";

const initialValues: ReservationFormData = {
    name: "",
    phone: "",
    person: "",
    date: "",
    time: "",
    message: "",
};

// type AlertState = {
//     isVisible: boolean;
//     type: "success" | "error" | "warning" | "info";
//     title?: string;
//     message: string;
// }

export const Reservation = memo(() => {
    // const [alertState, setAlertState] = useState<AlertState>({
    //     isVisible: false,
    //     type: "success",
    //     message: "",
    // });

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
            await onSubmit(data);

            // showAlert(
            //     "success",
            //     "Your message has been sent successfully! I'll get back to you soon.",
            //     "Message Sent!"
            // );

            reset(initialValues);
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : "Something went wrong while sending your message. Please try again.";

            // showAlert(
            //     "error",
            //     errorMessage,
            //     "Sending Failed"
            // );

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
                        <div className="input-wrapper">

                            <InputField
                                id="name"
                                placeholder="Your Name"
                                register={register}
                                error={errors.name?.message}
                                disabled={isSubmitting}
                            />

                            <InputField
                                id="phone"
                                type="tel"
                                placeholder="Phone Number"
                                register={register}
                                error={errors.name?.message}
                                disabled={isSubmitting}
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

                                <InputField
                                    id="date"
                                    type="date"
                                    register={register}
                                    error={errors.date?.message}
                                    disabled={isSubmitting}
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

                                <IonIcon
                                    name="chevron-down"
                                    aria-hidden="true"
                                />

                            </div>
                        </div>

                        <InputField
                            id="message"
                            placeholder="Message"
                            register={register}
                            isTextarea={true}
                            error={errors.name?.message}
                            disabled={isSubmitting}
                        />

                        <SubmitButton
                            isButtonDisabled={isButtonDisabled}
                            btnText={buttonText}
                        />

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