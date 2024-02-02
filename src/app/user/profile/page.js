import Button from "@/app/Component/Button";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default withPageAuthRequired(
  async function user() {
    const { user } = await getSession();
    return (
      <main className="mt-10">
        <div className="mt-10">
          <div className="text-3xl text-center md:text-6xl font-extrabold  text-teal-200">
            <h1>User Profile Page</h1>
          </div>

          <div className="flex justify-center my-4">
            <img
              src={user.picture}
              alt={user.name}
              width={75}
              className="inline-block  rounded-full ring-2 ring-white"
            />
            <div className="grid p-4 text-3xl text-teal-200">
              <h2 className=" font-extrabold ">{user.name}</h2>
            </div>
          </div>
        </div>

        <div className=" flex justify-center">
          <dl >
            <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
              <dt className="text-lg md:text-2xl font-bold text-white">
                Name:
              </dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-white sm:mt-0 sm:col-span-2">
                {user.name}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
              <dt className="text-lg md:text-2xl font-bold text-gray-900">
                Email:
              </dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>

            <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
              <dt className="text-lg md:text-2xl font-bold text-white">
                NickName:
              </dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-white sm:mt-0 sm:col-span-2">
                {user.nickname}
              </dd>
            </div>
          </dl>
        </div>
        <div className=" text-center mt-2 text-2  xl ">
          <Link href={"/user"}>
            <Button text="BACK" />
          </Link>
        </div>
      </main>
    );
  },
  { returnTo: "/user/profile" }
);
