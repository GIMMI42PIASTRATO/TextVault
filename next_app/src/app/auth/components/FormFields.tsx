import { FormFieldProps } from "@/types/auth-types";

export default function FormFields({
	type,
	placeholder,
	name,
	register,
	errors,
	valueAsNumber,
}: FormFieldProps) {
	return (
		<>
			<input
				className="w-full border border-gray-300 rounded-md focus:outline focus:outline-2 focus:outline-[--primary-color] focus:border-[--primary-color] py-2 px-4 mt-8"
				type={type}
				placeholder={placeholder}
				{...register(name, { valueAsNumber })}
			/>
			{errors && (
				<p className="mt-1 text-sm font-semibold text-red-500">
					{errors.message}
				</p>
			)}
		</>
	);
}
