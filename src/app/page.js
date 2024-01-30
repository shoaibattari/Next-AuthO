"use client";
import Link from "next/link";
import { useUser, UserProfile } from "@auth0/nextjs-auth0/client";
import Loading from "./Component/Loading";
import Button from "./Component/Button";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loading />;
  if (error) return <div>{error.message}</div>;
  if (!user)
    return (
      <div>
        <Link href={"/api/auth/login"}>
          <Button text="Login" />
        </Link>
      </div>
    );

  return (
    user && (
      <div className="flex">
        <img src={user.picture} alt={user.name} width={200} />
        <div className="grid p-4 text-3xl">
          <h2 className=" font-extrabold ">WellCome! {user.name}</h2>
          <p className=" font-extrabold">{user.email}</p>
          <div className=" text-center ">
            <Link href={"/api/auth/logout"}>
              <Button text="Logout" />
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

// import { getSession, isLoading, error } from "@auth0/nextjs-auth0";

// export default async function ProfileServer() {
//   const { user } = await getSession();
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;
//   return (
//     user && (
//       <div>
//         <img src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//         <div>
//           <Link href={"/api/auth/logout"}>Logout</Link>
//         </div>
//       </div>
//     )
//   );
// }
