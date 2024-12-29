
import "./prosemirror.css";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "./ui/sonner";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={(
          "min-h-screen bg-background font-sans antialiased variable-font"
        )}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          {children}
          <Toaster />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}