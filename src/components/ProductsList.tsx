import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { type Product } from "@/types/comon";

export const ProductsList = ({ products }: { products: Product[] }) => {
	return products.length === 0 ? null : (
		<ul className="my-4 flex flex-wrap gap-4" data-testid="products-list">
			{products.map((p) => (
				<li key={p.id}>
					<Link href={`/product/${p.id}`} className="block cursor-pointer">
						<ProductCard
							product={{ name: p.title, price: p.price, image: p.image }}
						/>
					</Link>
				</li>
			))}
		</ul>
	);
};
