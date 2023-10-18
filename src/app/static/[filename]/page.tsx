import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { type ComponentType } from "react";

type Props = {
	params: { filename: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return {
		title: params.filename,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam amet ipsa esse magni deserunt provident",
	};
}

export default async function StaticPage({
	params,
}: {
	params: { filename: string };
}) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(m: { default: ComponentType }) => m.default,
		() => notFound(),
	);

	return (
		<article className="prose-base mx-auto max-w-prose font-light">
			<Content />
		</article>
	);
}
