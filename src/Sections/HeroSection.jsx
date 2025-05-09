import TypingAnimation from '../Components/TypingAnimation'
import { phraseBeginning, phrases } from '../Constants'

const HeroSection = () => {
	return (
		<section
			id="Home"
			className="h-[100vh] bg-mygreen/70 flex flex-col gap-5 justify-center items-center text-center"
		>
			<h1 className="text-8xl font-medium text-white font-poppins">
				Biswash Khanal
			</h1>
			<div className="text-4xl  text-white">
			<TypingAnimation phraseBeginning = {phraseBeginning} phrases={phrases} typingSpeed={50} deletingSpeed={50} delayBetweenPhrases={1000}/>
			</div>
			<p className=" text-white text-xl mt-3 text-center">
				Welcome to my website. Please take a look around!
				<br />
				If you're here for business query, please start by taking a look at my
				works.
				<br />
				Have a great day!
			</p>
			<a
				href="#portfolio"
				className="py-3 px-8 m-10 border-2 rounded-2xl  text-white  hover:bg-mygreen active:bg-mygreen/60 transition-all  duration-75"
			>
				View My Work
			</a>
		</section>
	);
};

export default HeroSection;
