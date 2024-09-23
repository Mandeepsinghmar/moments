import "~/styles/globals.css";
import { ClerkProvider} from '@clerk/nextjs'
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "./_components/topnav";
import "@uploadthing/react/styles.css";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
   <html lang="en" className={`${GeistSans.variable} font-sans flex flex-col gap-4`}>
      <body>
        <TopNav/>
      {children}
      </body>
    </html>
    </ClerkProvider>
 
  );
}
