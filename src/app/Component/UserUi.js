import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

function UserUi({picture,name,email}) {
  return (
    <div>
      <div className="flex">
        <Image src={picture} alt={name} width={200} />
        <div className="grid p-4 text-3xl">
          <h2 className=" font-extrabold ">WellCome! {name}</h2>
          <p className=" font-extrabold">{email}</p>
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

export default UserUi;
