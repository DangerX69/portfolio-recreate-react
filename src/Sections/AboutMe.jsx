const AboutMe = () => {
	return (
		<section
			id="about-me"
			className="h-[100vh] border-8 border-blue-700 bg-whitewashed flex flex-col gap-5 items-center"
		>
			<div
				id="about-me_text"
				className="border-2 max-w-5xl"
			>
				<h1 className="py-5 border-2 text-3xl font-poppins font-medium underline-offset-8 decoration-5 decoration-mygreen underline">ABOUT ME</h1>

				<p className="p-4 border-2 text-xl text-justify ">
					Namaskar! My name is Biswash Khanal. I am currently a student at
					Tribhuwan University, Nepal. I am currently enrolled in a Computer
					Engineering course and will graduate in 7 months. I am a very curious
					person and my interests don't really intersect. So I try to persue in
					as much fields as I can. Although the nature of my course limits me on
					what I can practice professionally, I am very flexible to all sorts of
					opportunities. While i would say Web Designing and Web Developing are
					my strong suits, I do have interest in and skills for other stuffs
					like Machine Learning and AI Development. I have also started to
					dabble a bit into App Development and UI/UX Designing as well. Perhaps
					going through my projects will provide better ideas.
				</p>
			</div>

			<div
				id="about-me_table"
				className="border-2"
			>
				<div
					id="about-us-content-left"
					className="border-2"
				></div>

				<div
					id="about-us-content-right"
					className="border-2"
				>
					<div
						id="skill-bar"
						className="border-2"
					></div>
					<div
						id="social"
						className="border-2"
					></div>

					<a
						href="/"
						className="border-2"
					></a>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
