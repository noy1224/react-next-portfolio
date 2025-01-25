import { notFound } from 'next/navigation';
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from '@/app/_components/Article';

type Props = {
    params: {
      slug: string;
    };
      searchParams: {
        dk?: string;
      };
};

export default async function Page({ params, searchParams }: Props) {
    const data = await getNewsDetail(params.slug, {
      draftKey: searchParams.dk,
    }).catch(notFound);

    return <div>{data.title}</div>
  }