import Link from "next/link";
import Button from "./Component/Button";

export default function Home() {
  return (
    <div className="flex gap-20">
      <div className="hover:scale-105 ">
        <Link href={"/api/auth/login"}>
          <Button text="Login" />
        </Link>
      </div>
      <div className="hover:scale-105">
        <Link href={"/api/auth/signup"}>
          <Button text="SignUp" />
        </Link>
      </div>
    </div>
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
