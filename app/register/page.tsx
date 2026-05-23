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

const registerSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
	photoUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
});

type RegisterSchemaType = z.infer<typeof registerSchema>;

export default function Register() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterSchemaType>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = async (data: RegisterSchemaType) => {
		setLoading(true);
		const toastId = toast.loading("Creating account...");

		await authClient.signUp.email({
			email: data.email,
			password: data.password,
			name: data.name,
			image: data.photoUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`,
			fetchOptions: {
				onSuccess: () => {
					toast.success("Registration successful! Redirecting to login...", { id: toastId });
					setTimeout(() => {
						router.push("/login");
					}, 2000);
				},
				onError: (ctx) => {
					toast.error(ctx.error.message || "Registration failed", { id: toastId });
					setLoading(false);
				},
			},
		});
	};

	const handleGoogleRegister = async () => {
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
						Register
					</h2>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-4">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="John Doe"
								className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
								{...register("name")}
							/>
							{errors.name && (
								<label className="label">
									<span className="label-text-alt text-error">{errors.name.message}</span>
								</label>
							)}
						</div>

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
								<span className="label-text">Photo URL (Optional)</span>
							</label>
							<input
								type="url"
								placeholder="https://example.com/photo.jpg"
								className={`input input-bordered w-full ${errors.photoUrl ? "input-error" : ""}`}
								{...register("photoUrl")}
							/>
							{errors.photoUrl && (
								<label className="label">
									<span className="label-text-alt text-error">{errors.photoUrl.message}</span>
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
							:	"Register"}
						</button>
					</form>

					<div className="divider">OR</div>

					<button
						onClick={handleGoogleRegister}
						className="btn btn-outline w-full flex items-center gap-2">
						<FcGoogle className="text-xl" />
						Continue with Google
					</button>

					<p className="text-center mt-4 text-sm">
						Already have an account?{" "}
						<Link
							href="/login"
							className="link link-primary">
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
