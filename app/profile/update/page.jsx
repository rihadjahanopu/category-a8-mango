"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UpdateProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    } else if (session) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session, isPending, router]);

  if (isPending || !session) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    await authClient.updateUser({
      name,
      image: image || undefined,
      fetchOptions: {
        onSuccess: () => {
          setSuccess("Profile updated successfully!");
          setLoading(false);
          setTimeout(() => {
            router.push("/profile");
          }, 1500);
        },
        onError: (ctx) => {
          setError(ctx.error.message || "Failed to update profile");
          setLoading(false);
        },
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="card bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body p-10">
          <h2 className="card-title text-3xl font-bold mb-6">Update Profile</h2>
          
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="alert alert-success text-white mb-4">
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleUpdate} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input 
                type="text" 
                className="input input-bordered w-full" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input 
                type="url" 
                className="input input-bordered w-full" 
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4 mt-6">
              <Link href="/profile" className="btn btn-outline flex-1">
                Cancel
              </Link>
              <button 
                type="submit" 
                className="btn btn-primary flex-1" 
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner"></span> : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
