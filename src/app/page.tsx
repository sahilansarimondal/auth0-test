import ProfileClient from "@/components/profiles";
import ProfileServer from "@/components/serverProfile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-8">
        <div>
          <h2>This is from Client</h2>
          <ProfileClient />
        </div>
        <div>
          <h2>This is from Server</h2>
          <ProfileServer />
        </div>
      </div>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </main>
  );
}
