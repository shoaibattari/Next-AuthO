import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="grid grid-rows-2 md:grid-rows-3 items-center  bg-gray-900 ">
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
