import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";

export type Product = {
  image: string; name: string; price: number; 
}

export const ProductCard = ({product: { image, name, price }} : {product: Product}) => {
  return (
    <article className="flex flex-col gap-2 p-3 outline outline-1 outline-slate-600">
      <div className="w-[250px] h-[250px] overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={250}
        height={250}
        className="object-cover w-[250px] h-[250px] hover:scale-105 transition-transform"
      />
      </div>
      <h2 className="font-semibold text-lg">{name}</h2>
      <span className="normal-nums">{formatPrice(price/100)}</span>
  </article>
  )
}