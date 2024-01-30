import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="grid h-screen place-items-center">{children}</body>
      </UserProvider>
    </html>
  );
}
