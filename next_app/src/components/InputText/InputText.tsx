interface InputTextProps {
	type: string;
	placeholder: string;
	name: string;
}

export default function InputText({ type, placeholder, name }: InputTextProps) {
	return (
		<>
			<input
				className="w-full border border-gray-300 rounded-md focus:outline focus:outline-2 focus:outline-[--primary-color] focus:border-[--primary-color] py-2 px-4 mt-8"
				type={type}
				placeholder={placeholder}
				name={name}
			/>
		</>
	);
}
