import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers/providers";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Hakim Nizami",
  description: "My Portfolio",
  icons: {
    icon: {
      url: "dark/logo.svg",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} all scrollbar flex-col items-center font-poppins dark:bg-tertiary-dark sm:flex`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
