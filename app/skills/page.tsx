"use client";
import { Database, Home,  Laugh, Cog, Car } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const skills = [
	{
		name: "Software Architect",
		href: "https://roadmap.sh/software-architect?s=65931ce0ae22c1252307ef61",
		icon: <Home size={20} />
	},
	{
		name: "Backend Engineer",
		href: "https://roadmap.sh/backend?s=65931ce0ae22c1252307ef61",
		icon: <Database size={20} />
	},
	{
		name: "Frontend Engineer",
		href: "https://roadmap.sh/frontend?s=65931ce0ae22c1252307ef61",
		icon: <Laugh size={20} />
	},
	{
		name: "Devops Engineer",
		href: "https://roadmap.sh/devops?s=65931ce0ae22c1252307ef61",
		icon: <Cog size={20} />
	},
];

export default function Skills() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />

			<div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            My skills
          </h2>
          <p className="mt-4 text-zinc-400">
            My skills roadmap can be explored in great detail at roadmap.sh. Please click on each category for more information.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">

				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-5 lg:gap-16">
					{skills.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
										{s.name}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
