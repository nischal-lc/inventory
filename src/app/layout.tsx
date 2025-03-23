import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contextProviders/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { SidebarProvider } from "@/contextProviders/SidebarProvider";
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const geist = Geist({
	variable: "--font-geist",
	subsets: ["latin"],

})

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${geist.variable} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<SidebarProvider>
					<div className='flex'>
						<Sidebar />
						<div className='flex flex-col w-full'>
							<Navbar />
							{children}
						</div>
					</div>
							<Toaster/>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
