import z from "zod";

export const ReservationFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Phone number is required"),
    person: z.string().min(1, "Number of person is required"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
    message: z.string().min(1, "Message is required"),
});

export type ReservationFormData = z.infer<typeof ReservationFormSchema>;
