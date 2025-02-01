import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/sheet';

export const metadata = {
  title: '世界の建造物紹介',
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="World Buildings" sub="世界の建造物" />
      <Sheet>{children}</Sheet>
    </>
  );
}