import { Suspense } from "react";
import { type Metadata } from "next";
import { type Product } from "@/types/comon";
import { ProductsList } from "@/components/ProductsList";
import { Pagination } from "@/components/Pagination";

const ITEMS_PER_PAGE = 20;
const OFFSET = 20;

type Props = {
	params: { page: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return {
		title: `Products page - ${params.page}`,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam amet ipsa esse magni deserunt provident",
	};
}

export async function generateStaticParams() {
	return [{ page: "1" }, { page: "2" }, { page: "3" }, { page: "4" }, { page: "5" }];
}

export default async function ProductsPage(props: Props) {
	const params = new URLSearchParams();
	params.append("take", ITEMS_PER_PAGE.toString());
  params.append("offset", ((Number(props.params.page) - 1) * OFFSET).toString());

	let data: Product[] | undefined;

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_PATH}?${params.toString()}`,
		);
		data = (await res.json()) as Product[];
	} catch (error: unknown) {
		console.error(error);
	}

	return data ? (
		<section>
			<ProductsList products={data} />
      <Suspense fallback={<p>Loading...</p>}>
        <Pagination />
      </Suspense>
		</section>
	) : null;
}
