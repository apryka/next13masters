import { type Product } from "@/types/comon";

const Star = ({ progress }: { progress: number }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={20}
		height={20}
	>
		<symbol
			viewBox="0 0 126.729 126.73"
			id="star"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z" />
		</symbol>
		<defs>
			<mask id="mstar">
				<use fill="white" xlinkHref="#star"></use>
			</mask>
		</defs>
		<rect
			x="0"
			y={`${100 - progress * 100}%`}
			fill={progress < 1 ? "#333" : "#fff"}
			width="100%"
			height="100%"
			mask="url(#mstar)"
		></rect>
		<use xlinkHref="#star" strokeWidth="3" stroke="#333" fill="none"></use>
	</svg>
);

export const Rating = ({ rating }: { rating: Product["rating"] }) => {
	const { rate, count } = rating;

	const full = Math.floor(rate);
	const rest = Number((rate % full).toFixed(2));

	const stars = Array(full).fill(<Star progress={1} />);

	if (rest > 0) {
		stars.push(<Star progress={rest} />);
	}

	return (
		<div className="flex items-center gap-4">
			<ul className="flex items-center gap-2">
				{stars.map((s, idx) => (
					<li key={`star-${idx}`}>{s}</li>
				))}
			</ul>
			<span className="text-sm font-light">
				{`(${count})`} {rating.rate}
			</span>
		</div>
	);
};
