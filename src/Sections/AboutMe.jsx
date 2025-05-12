import { profilePicture } from "../assets/icons";
import ProgressBar from "../Components/ProgressBar";
import { skillBarProgress } from "../Constants";

const AboutMe = () => {

	const len =skillBarProgress.length;

	return (
		<section
			id="about-me"
			className="py-20 h-[100vh] bg-whitewashed flex-col flex gap-15 items-center"
		>
			<div
				id="about-me_text"
				className="max-w-5xl"
			>
				<h1 className="py-5 text-3xl text-center font-poppins font-medium underline-offset-8 decoration-5 decoration-mygreen underline">
					ABOUT ME
				</h1>

				<p className="text-xl text-justify ">
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
				className="bg-white flex flex-col sm:flex-row p-2"
			>
				<div
					id="about-us-content-left"
					className="border-2 flex flex-auto p-2"
				>
					<img
						src={profilePicture}
						alt="profilepic"
						className="p-5"
					/>
				</div>

				<div
					id="about-us-content-right"
					className="border-2 flex flex-col p-2 flex-1/2"
				>
					<div
						id="skill-bar"
						className="border-2 p-2 flex-3/4 flex flex-col text-center content-around"
					>
						<h1 className={`border-2 flex flex-1/${len}`}>Skills</h1>
						<div className={`border-2 flex flex-${len-1}/${len}`}>
							<ProgressBar skills={skillBarProgress} />
						</div>
					</div>
					<div
						id="social"
						className="border-2 p-2 flex-1/8 flex flex-col text-center content-around"
					>
						<ul>
							<li>facebook</li>
							<li>twitter</li>
						</ul>
					</div>

<div className="border-2 p-2 flex-1/8 flex flex-col text-center content-around">

					<a
						href="/"
						
					>
						Download Resume
					</a>

</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
