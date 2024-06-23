import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const session = await getSession();
  console.log(session?.user);
  console.log(session?.accessToken);
  if (!session?.user) return <div>User not found</div>;
  return (
    <div>
      {session.user && (
        <div>
          <img
            src={session.user.picture}
            alt={session.user.name}
          />
          <h2>{session.user.name}</h2>
          <p>{session.user.email}</p>
        </div>
      )}
    </div>
  );
}