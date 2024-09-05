// "use client";
// import React from "react";
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(
// 	() => {
// 		return import("react-animated-numbers");
// 	},
// 	{ ssr: false }
// );

// const achievementsList = [
// 	{
// 		metric: "Projects",
// 		value: "30",
// 		postfix: "+",
// 	},
// 	{
// 		prefix: "~",
// 		metric: "Users",
// 		value: "10000",
// 	},
// 	{
// 		metric: "Years",
// 		value: "3",
// 		postfix: "+",
// 	},
// ];

// const AchievementsSection = () => {
// 	return (
// 		<div className="pt-8 pb-0 w-full xl:gap-16 sm:pt-6 xl:px-0">
// 			<div className="sm:border-[#33353F] sm:border rounded-lg py-4 px-16 flex flex-col sm:flex-row items-center justify-between">
// 				{achievementsList.map((achievement, index) => {
// 					return (
// 						<div
// 							key={index}
// 							className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
// 						>
// 							<h2 className="text-white text-4xl font-bold flex flex-row">
// 								{achievement.prefix}
// 								<AnimatedNumbers
// 									includeComma
// 									animateToNumber={parseInt(achievement.value)}
// 									locale="en-US"
// 									className="text-white text-4xl font-bold"
// 									configs={(_, index) => {
// 										return {
// 											mass: 1,
// 											friction: 100,
// 											tensions: 140 * (index + 1),
// 										};
// 									}}
// 								/>
// 								{achievement.postfix}
// 							</h2>
// 							<p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };

// export default AchievementsSection;

"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
	() => {
		return import("react-animated-numbers");
	},
	{ ssr: false }
);

const achievementsList = [
	{
		metric: "Projects",
		value: "30",
		postfix: "+",
	},
	{
		prefix: "~",
		metric: "Users",
		value: "10000",
	},
	{
		metric: "Years",
		value: "3",
		postfix: "+",
	},
];

const AchievementsSection = () => {
	return (
		<div className="pt-8 pb-0 w-full xl:gap-16 sm:pt-6 xl:px-0">
			<div className="sm:border-[#33353F] sm:border rounded-lg py-4 px-16 flex flex-col sm:flex-row items-center justify-between">
				{achievementsList.map((achievement, index) => {
					return (
						<div
							key={index}
							className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
						>
							<h2 className="text-white text-4xl font-bold flex flex-row">
								{achievement.prefix}
								<AnimatedNumbers
									includeComma
									animateToNumber={parseInt(achievement.value)}
									locale="en-US"
									className="text-white text-4xl font-bold"
								/>
								{achievement.postfix}
							</h2>
							<p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AchievementsSection;
