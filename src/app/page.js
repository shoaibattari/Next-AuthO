import Link from "next/link";
import Button from "./Component/Button";

export default function Home() {
  return (
    <>
      <div>
        <div className="text-center md:text-2xl flex justify-around p-6 bg-gray-600 text-white">
          <p>NextJS Internship </p>
          <p>Authentication with Auth0: </p>
          <p>TSK-000-67 </p>
        </div>
        <h1 className="text-2xl text-center md:text-6xl font-extrabold mt-12 text-teal-200  ">
          Nextjs AuthO Project
        </h1>
      </div>

      <div className="flex gap-20 justify-center ">
        <div className="hover:scale-105 scale-95 md:hover:scale-150 md:scale-125 ">
          <Link href={"/api/auth/login"}>
            <Button text="Login" />
          </Link>
        </div>
        <div className="hover:scale-105 scale-95 md:hover:scale-150 md:scale-125 ">
          <Link href={"/api/auth/signup"}>
            <Button text="SignUp" />
          </Link>
        </div>
      </div>
    </>
    
  );
}
