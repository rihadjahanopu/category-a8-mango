"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";

const loginSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

export default function Login() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginSchemaType) => {
		setLoading(true);
		const toastId = toast.loading("Logging in...");

		await authClient.signIn.email({
			email: data.email,
			password: data.password,
			fetchOptions: {
				onSuccess: () => {
					toast.success("Login successful!", { id: toastId });
					router.push("/");
				},
				onError: (ctx) => {
					toast.error(ctx.error.message || "Invalid credentials", { id: toastId });
					setLoading(false);
				},
			},
		});
	};

	const handleGoogleLogin = async () => {
		await authClient.signIn.social({
			provider: "google",
			callbackURL: "/",
		});
	};

	return (
		<div className="flex justify-center items-center min-h-[calc(100vh-200px)] py-10">
			<div className="card w-96 bg-base-100 shadow-xl border border-base-300">
				<div className="card-body">
					<h2 className="card-title text-2xl font-bold justify-center mb-4">
						Login
					</h2>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-4">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email@example.com"
								className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
								{...register("email")}
							/>
							{errors.email && (
								<label className="label">
									<span className="label-text-alt text-error">{errors.email.message}</span>
								</label>
							)}
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="********"
								className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
								{...register("password")}
							/>
							{errors.password && (
								<label className="label">
									<span className="label-text-alt text-error">{errors.password.message}</span>
								</label>
							)}
						</div>

						<button
							type="submit"
							className="btn btn-primary w-full mt-2"
							disabled={loading}>
							{loading ?
								<span className="loading loading-spinner"></span>
							:	"Login"}
						</button>
					</form>

					<div className="divider">OR</div>

					<button
						onClick={handleGoogleLogin}
						className="btn btn-outline w-full flex items-center gap-2">
						<FcGoogle className="text-xl" />
						Continue with Google
					</button>

					<p className="text-center mt-4 text-sm">
						Don't have an account?{" "}
						<Link
							href="/register"
							className="link link-primary">
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
