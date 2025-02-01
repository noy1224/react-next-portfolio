import Sheet from "@/app/_components/sheet";
import Hero from '@/app/_components/Hero';


type Props = {
    children: React.ReactNode;
  };
  
  export default function RootLayout({ children }: Props) {
    return (
    <>
    <Hero title="profile" sub="プロフィール" />
    <Sheet>{children}</Sheet>;
    </>
    );
  }