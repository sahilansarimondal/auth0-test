"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (!user) return <div>User not found</div>;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        {user.picture && user.name ? (
          <Image
            src={user.picture}
            alt={user.name}
            width={50}
            height={50}
          />
        ) : (
          <div>There is Picture</div>
        )}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
