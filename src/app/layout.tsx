import type { Metadata } from "next";
import { Providers } from "./Providers";
import { Navbar } from "@/packages/ui-patterns/navigation";
import { Footer } from "@/packages/ui-patterns/navigation/Footer";
import { Box } from "@chakra-ui/react";
import { MainAreaBackground } from "@/packages/ui-patterns/background";

export const metadata: Metadata = {
  title: "Distyopoly",
  description: "Boardgame experience through distance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar h="8vh" />
          <Box h="calc(100vh - 16vh)" as="main">
            {children}
          </Box>
          <Footer display={{ base: "none", md: "flex" }} h="8vh" />
          <MainAreaBackground key="main-page.jpg" src="/main-page-background.jpg" invert={false} zIndex={-2}/>
        </Providers>
      </body>
    </html>
  );
}
