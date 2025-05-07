import { navLinks } from "../Constants";

const Navbar = () => {
	return (
		<header className="bg-mygreen text-white">
			<nav className="flex py-5 justify-around items-center ">
				<a
					href="/"
					className="flex font-poppins text-4xl"
				>
					{/* <img src="" alt="" /> For image logo*/}
					B. Khanal
				</a>

				<ul className="flex gap-5 text-lg">
					{navLinks.map((linkDetail) => (
						<li key={linkDetail.key}>
							<a href={linkDetail.href}>{linkDetail.label}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
