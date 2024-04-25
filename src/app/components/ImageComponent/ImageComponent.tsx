interface ImageComponentProps {
	src: string;
	alt: string;
}

export default function ImageComponent({ src, alt }: ImageComponentProps) {
	return (
		<div className="w-full">
			<img src={src} alt={alt} className="object-cover w-full" />
		</div>
	);
}
