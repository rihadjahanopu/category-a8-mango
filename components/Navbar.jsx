"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
	const { data: session, isPending } = authClient.useSession();
	const router = useRouter();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLogout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/login");
				},
			},
		});
	};

	return (
		<div
			className={`navbar sticky top-0 z-50 transition-colors duration-300 min-h-12 py-2 ${scrolled ? "bg-base-100/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
			<div className="max-w-7xl mx-auto w-full px-4 flex justify-between items-center">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-base-100/90 backdrop-blur-xl rounded-2xl w-60 border border-base-200">
							<li>
								<Link
									href="/"
									className="hover:bg-primary/10 hover:text-primary py-3 rounded-lg font-medium">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/books"
									className="hover:bg-primary/10 hover:text-primary py-3 rounded-lg font-medium">
									All Books
								</Link>
							</li>
							{isPending ?
								<div className="skeleton h-10 w-full mt-2 rounded-lg opacity-50"></div>
							: session ?
								<li>
									<Link
										href="/profile"
										className="hover:bg-primary/10 hover:text-primary py-3 rounded-lg font-medium">
										My Profile
									</Link>
								</li>
							:	null}
						</ul>
					</div>
					<Link
						href="/"
						className="btn btn-ghost hover:bg-transparent px-0">
						<div className="flex items-center gap-2">
							<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
								B
							</div>
							<span className="text-2xl font-bold tracking-tight">
								BookLib<span className="text-primary">.</span>
							</span>
						</div>
					</Link>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 gap-2 items-center">
						<li>
							<Link
								href="/"
								className="rounded-full px-6 hover:bg-primary/10 hover:text-primary font-medium transition-colors">
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/books"
								className="rounded-full px-6 hover:bg-primary/10 hover:text-primary font-medium transition-colors">
								All Books
							</Link>
						</li>
						{isPending ?
							<div className="skeleton h-8 w-24 rounded-full opacity-50 ml-2"></div>
						: session ?
							<li>
								<Link
									href="/profile"
									className="rounded-full px-6 hover:bg-primary/10 hover:text-primary font-medium transition-colors">
									My Profile
								</Link>
							</li>
						:	null}
					</ul>
				</div>

				<div className="navbar-end gap-3">
					{isPending ?
						<div className="flex items-center gap-3">
							<div className="skeleton h-10 w-20 rounded-full opacity-50"></div>
							<div className="skeleton h-10 w-24 rounded-full opacity-50"></div>
						</div>
					: session ?
						<div className="flex items-center gap-4">
							<div className="hidden sm:flex items-center gap-2">
								<div className="avatar">
									<div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
										<img
											src={
												session.user.image ||
												`https://api.dicebear.com/7.x/avataaars/svg?seed=${session.user.name}`
											}
											alt="avatar"
										/>
									</div>
								</div>
								<span className="font-medium">{session.user.name}</span>
							</div>
							<button
								onClick={handleLogout}
								className="btn btn-error btn-sm rounded-full text-white px-6 shadow-lg shadow-error/30 hover:-translate-y-0.5 transition-transform">
								Logout
							</button>
						</div>
					:	<div className="flex items-center gap-3">
							<Link
								href="/login"
								className="btn btn-primary rounded-full px-6 text-white shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-transform">
								Login
							</Link>
						</div>
					}
				</div>
			</div>
		</div>
	);
}
