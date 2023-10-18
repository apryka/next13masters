import { type Metadata } from "next";

export const metadata: Metadata = {
	title: "Main page",
	description:
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt aut accusantium ipsum odit quis facere!",
};

export default function Home() {
	return (
		<article className="prose-base mx-auto max-w-prose font-light">
			<h1>Main page</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
				numquam delectus impedit atque ad a enim quos aut, doloremque animi,
				quidem at in accusamus obcaecati dolore itaque temporibus perferendis.
				Adipisci voluptatibus laboriosam voluptatum veniam autem? Dolor sunt sed
				error quisquam, cupiditate asperiores recusandae magnam nemo autem
				nostrum eius iste odio porro rerum accusamus ratione consequuntur! Dicta
				nulla officia fuga, debitis nemo fugiat quas quod sit pariatur suscipit
				iusto eos dolorum totam neque harum qui, itaque culpa? Recusandae ipsam
				nihil minus consequuntur est eius laborum adipisci architecto impedit,
				sit esse provident quaerat laudantium cumque itaque libero? Consequuntur
				dolore quos accusamus, eius facilis quod! Delectus suscipit adipisci
				nulla voluptate blanditiis laudantium quibusdam quos error sint corporis
				nobis, repudiandae molestias aliquid non reiciendis.
			</p>
		</article>
	);
}
