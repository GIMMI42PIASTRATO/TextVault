import { cardData } from "@/data/cardData";
import Card from "@/components/Card/Card";

export default function CoolStuff() {
	return (
		<div className="w-full 2xl:max-w-[1320px] xl:max-w-6xl lg:max-w-[960px] md:max-w-[720px] xs:max-w-md">
			<div className="mx-auto grid grid-cols-1 lg:grid-cols-4 lg:gap-x-14 gap-y-12 lg:gap-y-14">
				{cardData.map((cardData, index) => (
					<Card
						key={index}
						icon={cardData.icon}
						title={cardData.title}
						description={cardData.description}
						iconColor={cardData.iconColor}
					/>
				))}
			</div>
		</div>
	);
}
