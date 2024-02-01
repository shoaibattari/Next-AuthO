// "use client";
// import React from "react";
// import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
// import Loading from "../Component/Loading";
import Link from "next/link";
import Button from "../Component/Button";

// app/profile/page.js
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function user() {
    const { user } = await getSession();
    return (
      <>
        <div className="text-5xl font-extrabold text-center">
          <h1>User Profile Page</h1>
        </div>

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
            <div className=" text-center ">
              <Link href={"/user/profile"}>
                <Button text="profile" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  },
  { returnTo: "/user" }
);
// You need to provide a `returnTo` since Server Components aren't aware of the page's URL
