"use client";
import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Loading from "../Component/Loading";
import Link from "next/link";
import Button from "../Component/Button";

export default withPageAuthRequired(function Profile({
  user,
  isLoading,
} = useUser) {
  if (isLoading) {
    return <Loading />;
  }
  if (error) return <div>{error.message}</div>;
  {
    return (
      <div>
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
      </div>
    );
  }
});
