interface EmailTemplateProps {
	subject: string;
	message: string;
	senderEmail: string;
}

export function EmailTemplate({
	subject,
	message,
	senderEmail,
}: EmailTemplateProps) {
	return (
		<div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
			<h1 className="text-2xl font-bold text-gray-800 mb-4">{subject}</h1>

			<p className="text-sm text-gray-600 mb-6">
				From: <span className="font-semibold text-gray-800">{senderEmail}</span>
			</p>

			<p className="text-base text-gray-700 leading-relaxed">{message}</p>
		</div>
	);
}
