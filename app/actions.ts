"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "";

const emailSchema = z.object({
	email: z.string().email(),
	subject: z.string(),
	message: z.string(),
});

export async function sendEmailAction(formData: FormData) {
	const email = formData.get("email");
	const subject = formData.get("subject");
	const message = formData.get("message");

	const validateResult = emailSchema.safeParse({
		email,
		subject,
		message,
	});

	if (!validateResult.success) {
		// return { success: false, error: validateResult.error.errors };
		return { message: "Invalid data" };
	}

	try {
		const data = await resend.emails.send({
			from: "portfolio <onboarding@resend.dev>",
			to: [fromEmail, email as string],
			subject: subject as string,
			react: EmailTemplate({
				subject: subject as string,
				message: message as string,
				senderEmail: email as string,
			}),
		});

		// return { success: true, data };
		return { message: "Email sent" };
	} catch (error) {
		// return { success: false, error };
		return { message: "Email not sent" };
	}
}
