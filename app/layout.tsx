import type { Metadata } from "next";
import { Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/themeProvider";
import NavBar from "@/components/NavBar";
import { Toaster } from "react-hot-toast"
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import SideBar from "@/components/SideBar";


const  SchibstedGrotesk =  Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk-sans",
  subsets: ["latin"],
});

const MartianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omitrixs App",
  description: "My Social media app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={`${SchibstedGrotesk.variable} ${MartianMono.variable} antialiased`} >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen">
              <NavBar/>
              <main className="py-8">
                {/* container to center the content */}
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" >
                    <div className="hidden lg:block lg:col-span-3">
                      <SideBar/>
                    </div>
                    <div className="lg:col-span-9">
                      {children}
                    </div>

                  </div>

                </div>
                
                </main>

            </div>
            <Toaster/>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
