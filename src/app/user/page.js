import Link from "next/link";
import Button from "../Component/Button";

import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function user() {
    const { user } = await getSession();
    return (
      <>
        <div className="text-3xl text-center md:text-6xl font-extrabold  text-teal-200">
          <h1>User Profile Page</h1>
        </div>

        <div className="md:flex justify-center">
          <img
            src={user.picture}
            alt={user.name}
            width={200}
            className="inline-block  rounded-full ring-2 ring-white  "
          />
          <div className="grid p-4 text-3xl">
            <h2 className=" text-lg md:text-3xl font-bold text-white ">
              WellCome! {user.name}
            </h2>
            <p className=" text-lg md:text-3xl font-bold text-white">
              {user.email}
            </p>
            <div className="flex gap-4 mt-3">
              <div>
                <Link href={"/api/auth/logout"}>
                  <Button text="Logout" />
                </Link>
              </div>
              <div>
                <Link href={"/user/profile"}>
                  <Button text="profile" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  },
  { returnTo: "/user" }
);
// You need to provide a `returnTo` since Server Components aren't aware of the page's URL
