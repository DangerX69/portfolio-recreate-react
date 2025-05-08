import { useEffect, useState } from "react";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants";

const Navbar = () => {
	useEffect(() => {
		const handleScroll = () => {
			const scrollThreshold = 80;
			const navbar = document.getElementById("navigationbar");

			if (window.scrollY == scrollThreshold) {
				navbar.classList.toggle("opacity-0");
				navbar.classList.toggle("h-0");
				navbar.classList.toggle("scale-0");
			} else if (window.scrollY > scrollThreshold) {
				navbar.classList.add("fixed");
				navbar.classList.toggle("opacity-0");
				navbar.classList.toggle("h-0");
				navbar.classList.toggle("scale-0");
			} else if (window.scrollY < scrollThreshold) {
				navbar.classList.remove("fixed");
				navbar.classList.toggle("opacity-0");
				navbar.classList.toggle("h-0");
				navbar.classList.toggle("scale-0");
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleHamburger = () => {
		document.getElementById("hamburgermenu").classList.toggle("scale-0");

		document.getElementById("hamburgermenu").classList.toggle("scale-100");

		document.getElementById("hamburgerimage").classList.toggle("rotate-180");
	};

	return (
		<header
			id="navigationbar"
			className="bg-mygreen text-white w-full transition-all duration-1000"
		>
			<nav className="flex py-5 justify-around items-center ">
				<a
					href="/"
					className="flex font-poppins text-4xl hover:scale-125 duration-500"
				>
					{/* <img src="" alt="" /> For image logo*/}
					B. Khanal
				</a>

				<ul className="gap-8 text-lg hidden sm:flex ">
					{navLinks.map((linkDetail) => (
						<li key={linkDetail.key}>
							<a
								href={linkDetail.href}
								className="font-open-sans decoration-amber-50/0 hover:underline hover:decoration-amber-50/100  hover:underline-offset-4 hover:decoration-2 hover:font-bold duration-500"
							>
								{linkDetail.label}
							</a>
						</li>
					))}
				</ul>

				<div className="sm:hidden">
					<a onClick={handleHamburger}>
						<img
							src={hamburger}
							alt="Hamburger"
							width={25}
							height={25}
							id="hamburgerimage"
							className="cursor-pointer hover:scale-125 duration-200 active:scale-150"
						/>
					</a>

					<ul
						id="hamburgermenu"
						className="absolute  border-black border-2 text-black justify-center p-3 leading-8 text-center text-xl top-20 right-0 w-full scale-0 overflow-hidden  bg-mygreen/50 bg-opacity-50 duration-200"
					>
						{navLinks.map((linkDetail) => (
							<li key={linkDetail.key}>
								<a
									href={linkDetail.href}
									className="font-open-sans text-white border-2 border-black flex justify-center p-2 m-1 "
								>
									{linkDetail.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
