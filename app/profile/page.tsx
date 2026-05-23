"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending || !session) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="card bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body items-center text-center p-10">
          <div className="avatar mb-6">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
              <Image 
                src={user.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} 
                alt={user.name} 
                width={128} 
                height={128} 
              />
            </div>
          </div>
          <h2 className="card-title text-4xl font-bold mb-2">{user.name}</h2>
          <p className="text-lg text-gray-500 mb-8">{user.email}</p>
          
          <div className="card-actions">
            <Link href="/profile/update" className="btn btn-primary btn-wide">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
