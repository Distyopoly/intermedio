import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import { Navbar } from "@/widgets/navigation";
import { Footer } from "@widgets/footer/ui";
import { Box } from "@chakra-ui/react";
import { MainAreaBackground } from "@/packages/ui-patterns/background";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Distyopoly",
  description: "Boardgame experience through distance.",
};

type Props = PropsWithChildren;

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar h="8vh" />
          <Box h="calc(100vh - 16vh)" as="main" position="relative">
            {children}
          </Box>
          <Footer display={{ base: "none", md: "flex" }} h="8vh" />
          <MainAreaBackground key="main-page.jpg" src="/main-page-background.jpg" invert={false} zIndex={-2} />
        </Providers>
      </body>
    </html>
  );
}
