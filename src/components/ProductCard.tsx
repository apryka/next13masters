import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";

type Product = {
	image: string;
	name: string;
	price: number;
};

export const ProductCard = ({
	product: { image, name, price },
}: {
	product: Product;
}) => {
	return (
		<article className="flex flex-col gap-2 p-3 outline outline-1 outline-slate-600">
			<div className="h-[250px] w-[250px] overflow-hidden">
				<Image
					src={image}
					alt={name}
					width={250}
					height={250}
					className="h-[250px] w-[250px] object-cover transition-transform hover:scale-105"
				/>
			</div>
			<h2 className="text-lg font-semibold">{name}</h2>
			<span className="normal-nums">{formatPrice(price / 100)}</span>
		</article>
	);
};
