
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from './components/NavBar';
import GetData from './components/Characters';



const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}  className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable}`}>
        <NavBar/>
        <GetData/>
        {children}
        </body>
    </html>
  );
}
