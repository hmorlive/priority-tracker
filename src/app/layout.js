import { Changa } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const font = Changa({ subsets: ["latin"] });

export const metadata = {
  title: "Priority Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="flex-1 items-center justify-center min-h-screen w-full flex flex-col">
          {children}
        </main>
        <div className="absolute bottom-0 right-0 p-4 flex text-xs text-slate-200">
          <h1 className="font-bold">Priority Tracker</h1>
          <span className="ml-2 font-extralight">v 1.0</span>
        </div>
      </body>
    </html>
  );
}
