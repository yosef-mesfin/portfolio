import { FaLocationArrow, FaFileArrowUp } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AchievementsSection from "@/components/AchievementsSection";
import Link from "next/link";

const currentTechStack = [
	{
		name: "Next.js",
		icon: "/next.svg",
	},
	{
		name: "Typescript",
		icon: "/ts.svg",
	},
	{
		name: "Three.js",
		icon: "/three.svg",
	},
	{
		name: "TaildwindCSS",
		icon: "/tail.svg",
	},
	{
		name: "Framer Motion",
		icon: "/framer.svg",
	},
];

const Hero = () => {
	return (
		<div className="md:pb-20 pb-5 pt-36 min-h-[80vh]">
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="h-[80vh] w-[50vw] top-10 left-full"
					fill="purple"
				/>
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>

			<div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>

			<div className="flex justify-center relative md:my-20 z-10 my-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<div className="flex items-center gap-2">
						<p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
							This Portfolio is built with{" "}
						</p>
						<span className="text-yellow-500 font-extrabold text-xl">
							{"{ "}
						</span>
						{currentTechStack.map((tech, idx) => (
							<img
								key={idx}
								src={tech.icon}
								alt={tech.name}
								className="w-6 h-6 lg:w-7 lg:h-7"
							/>
						))}
						<span className="text-yellow-500 font-extrabold text-xl">
							{" }"}
						</span>
					</div>

					<div className="flex justify-between w-inherit max-w-[100%] w-[100vw] h-[40vh] md:w-inherit md:h-inherit">
						<div className="flex flex-col justify-between md:justify-center py-10">
							<TextGenerateEffect
								words="Hello, I'm Yosef."
								className="text-md md:text-4xl lg:text-6xl"
							/>

							<div className="flex flex-col md:flex-row">
								<p className="mx-2 text-center md:tracking-wider mb-2 md:mb-4 text-sm md:text-lg lg:text-2xl">
									I&apos;m
								</p>
								<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
									<TypeAnimation
										sequence={[
											"An Experienced Web Developer",
											1000,
											"Fluent in React/Next.js framework",
											2000,
											"UI/UX Designer",
											2000,
											"TS Enthusias",
											2000,
										]}
										wrapper="span"
										speed={10}
										repeat={Infinity}
										className="text-yellow-500"
									/>
								</p>
							</div>
							<p className="mx-2 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
								based in Ethiopia.🇪🇹
							</p>
						</div>
						<motion.div
							initial={{ opacity: 0.2, scale: 1.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className="col-span-4 place-self-center mt-4 lg:mt-0"
						>
							<div className="mx-4 my-2 rounded-full bg-[#000000] w-[230px] h-[230px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
								<Image
									src="/images/hero-image.jpg"
									alt="hero image"
									className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
									width={400}
									height={400}
								/>
							</div>
						</motion.div>
					</div>

					<div className="flex justify-center gap-4">
						<a href="#projects">
							<MagicButton
								title="Show my work"
								icon={<FaLocationArrow />}
								position="right"
							/>
						</a>
						<Link
							// href="https://drive.google.com/file/d/1QgU8_rXjJ02Gvlya4qtJunv8l7tG3cvF/view"
							href="https://drive.google.com/file/d/1XjsCqdgd6iKtJUYlN86zvPOuANNB_k7V/view"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MagicButton
								title="Preview CV"
								icon={<FaFileArrowUp />}
								position="right"
							/>
						</Link>
					</div>
					<AchievementsSection />
				</div>
			</div>
		</div>
	);
};

export default Hero;
