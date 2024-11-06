import Fotter from "@/components/Layout/Fotter";
import Header from "@/components/Layout/Header";
import { PreloadResources } from "../../../preload-resources";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PreloadResources />
      <Header />
      <main className={"main"}>{children}</main>
      <Fotter />
    </>
  );
}
