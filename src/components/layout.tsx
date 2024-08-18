import Container from "./container";
import Header from "./header";
import Footer from "./footer";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
