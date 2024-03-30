export function MainContainer() {
	return (
		<div id="main" className="flex justify-center bg-verdant-bg">
			<div className="flex flex-col items-center justify-center lg:flex-row">
				<div className="mx-12 mb-8 mt-8 lg:mb-0 lg:mt-0">
					<img
						src="https://camo.githubusercontent.com/21f716d0ab0e608b918679f4311c6fe6cc3b9989e215c5db9ce8d99fa5811452/68747470733a2f2f692e6962622e636f2f737979315036672f6b796f6b6f2e77656270"
						alt="PFP"
						className="h-60 w-60 rounded-full bg-verdant-bg-light p-4"
					/>
				</div>
				<div className="mx-12 mb-8 items-center justify-center lg:mx-8 lg:mb-0">
					<div className="text-3xl font-bold text-verdant-fg">
						Hey! I'm <span className="text-verdant-blue">Ronalds</span>!
					</div>
					<div className="text-base text-verdant-fg-dark">
						I'm a young developer located in Latvia.
						<br />
						<br />
						I've been programming since 2022, and I enjoy creating web applications,
						<br />
						and occasionally <span className="line-through">shitty</span> software.
						<br />
						<br />I know how to code webpages in  {" "}
						<span className="text-verdant-asdorange">HTML</span> and make them better using{" "}
						<span className="text-verdant-gren">CSS</span> and{" "}
						<span className="text-verdant-yellow">JavaScript</span>.
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainContainer;
