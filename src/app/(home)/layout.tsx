import Fotter from "@/components/Layout/Fotter";
import Header from "@/components/Layout/Header";


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className={"main"}>{children}</main>
      <Fotter />
    </>
  );
}
