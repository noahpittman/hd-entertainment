"use client";

import { Menu, Home, Users2, LogOut, File } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { pageRoutes } from "@/pageRoutes";

const navigation = [
	{ name: "Home", route: "/admin/dashboard", icon: Home },
	{ name: "Users", route: "/admin/dashboard", icon: Users2 },
];

export default function NavMenu() {
	return (
		<>
			{/* Static sidebar for desktop */}
			<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-secondary-focus px-6 pt-4">
					<div className="flex h-16 items-center px-2">
						<Image
							height={96}
							width={96}
							alt={"HD Entertainment"}
							src="/hd_simple_logo.svg"
							className="invert dark:filter-none"
						/>
					</div>
					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-8">
							<li>
								<ul role="list" className="-mx-2 pb-4 space-y-1 menu">
									<p className="menu-title">Navigation</p>
									{navigation.map((route) => (
										<li key={route.name} className="text-lg">
											<Link href={route.route}>
												<route.icon className="h-4 w-4 mr-2" />

												{route.name}
											</Link>
										</li>
									))}
									<li className="text-lg">
										<Link href={"/admin"}>
											<LogOut className="h-4 w-4 mr-2" />
											Exit Dashboard
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<ul role="list" className="-mx-2 pb-4 space-y-1 menu">
									<p className="menu-title">Public Pages</p>
									<li className="text-lg">
										<Link target="_blank" href={"/"}>
											<File className="h-4 w-4 mr-2" />
											Home
										</Link>
									</li>
									{pageRoutes.map((route) => (
										<li key={route.name} className="text-lg">
											<Link target="_blank" href={route.route}>
												<File className="h-4 w-4 mr-2" />

												{route.name}
											</Link>
										</li>
									))}
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="drawer lg:hidden">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					{/* Navbar */}
					<div className="w-full navbar bg-secondary-focus fixed">
						<div className="flex-none lg:hidden">
							<label
								htmlFor="my-drawer-3"
								aria-label="open sidebar"
								className="btn btn-square btn-ghost"
							>
								<Menu />
							</label>
						</div>
						<div className="flex-1 px-2 mx-2 font-black text-lg tracking-widest">
							HD Entertainment
						</div>
						<div className="flex-none hidden lg:block">
							<ul className="menu menu-horizontal">
								{/* Navbar menu content here */}
								<li>
									<a>optional</a>
								</li>
								<li>
									<a>menu item 2</a>
								</li>
								<li>
									<a>menu item 3</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="drawer-side">
					<label
						htmlFor="my-drawer-3"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					{/* Sidebar Content Below */}
					<ul className="menu p-4 w-80 min-h-full bg-secondary-focus">
						<ul role="list" className="flex flex-1 flex-col gap-y-8">
							<li>
								<ul role="list" className="-mx-2 pb-4 space-y-1 menu">
									<p className="menu-title">Navigation</p>
									{navigation.map((route) => (
										<li key={route.name} className="text-lg">
											<Link href={route.route}>
												<route.icon className="h-4 w-4 mr-2" />

												{route.name}
											</Link>
										</li>
									))}
									<li className="text-lg">
										<Link href={"/admin"}>
											<LogOut className="h-4 w-4 mr-2" />
											Exit Dashboard
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<ul role="list" className="-mx-2 pb-4 space-y-1 menu">
									<p className="menu-title">Public Pages</p>
									{pageRoutes.map((route) => (
										<li key={route.name} className="text-lg">
											<Link target="_blank" href={route.route}>
												<File className="h-4 w-4 mr-2" />

												{route.name}
											</Link>
										</li>
									))}
								</ul>
							</li>
						</ul>
					</ul>
				</div>
			</div>
		</>
	);
}