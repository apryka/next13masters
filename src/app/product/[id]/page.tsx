import { type Metadata } from "next";
import Image from "next/image";
import Markdown from "react-markdown";
import { Category } from "@/components/Category";
import { Rating } from "@/components/Rating";
import { type Product } from "@/types/comon";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	let data: Product | undefined;

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/${params.id}`);
		data = (await res.json()) as Product;
	} catch (error: unknown) {
		console.error(error);
	}

	return {
		title: data?.title,
		description: data?.description,
	};
}

export default async function ProductPage(props: Props) {
	let data: Product | undefined;

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_PATH}/${props.params.id}`,
		);
		data = (await res.json()) as Product;
	} catch (error) {
		console.error(error);
	}
	return data ? (
		<article>
			<div className="grid grid-cols-[1fr,_3fr] gap-6">
				<h1 className="col-span-2 text-2xl">{data.title}</h1>
				<div className="relative min-h-[350px]">
					<Image
						src={data.image}
						alt={data.title}
						fill
						className="object-contain"
					/>
				</div>
				<ul className="flex flex-col items-start gap-6">
					<li>
						<span className="text-lg">{formatPrice(data.price)}</span>
					</li>
					<li>{data.description}</li>
					<li>
						<Category category={data.category} />
					</li>
					<li>
						<Rating rating={data.rating} />
					</li>
				</ul>
			</div>
			<div className="prose-base my-6 font-light">
				<Markdown>{data.longDescription}</Markdown>
			</div>
		</article>
	) : null;
}
