"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ProjectsSection from "@/components/ProjectSection";

const Home = () => {
	return (
		<main className="relative overflow-y-scroll bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full h-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<ProjectsSection />
				<Footer />
			</div>
		</main>
	);
};

export default Home;
