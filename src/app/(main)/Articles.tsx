import BlogPostCard from "@/components/ui/BlogPostCard";
import { getPosts } from "@/utils/strapi";

type Article = {
  title: string;
  limit?: number;
}


export default async function Articles (params: Article) {
  const { title, limit = 2 } = params

  const pagination = {
    page: 0,
    pageSize: limit,
  }

  const { data } = await getPosts({
    pagination: pagination,
    populate: {
      cover: {
        fields: ['url']
      }
    }
  })

  const article = data?.map(item => ({
    title: item.attributes.title,
    content: item.attributes.content,
    date: item.attributes.publishedAt,
    cover: item.attributes.cover.data.attributes.url
  }))

  return (
    <>
      <div className="hidden md:block text-3xl">
        {title}
      </div>
      <div className="grid md:grid-cols-2 gap-20 mt-8 mb-14">
        {
          article?.map((_, index) => (
            <BlogPostCard {..._} key={index} />
          ))
        }
      </div>
    </>
  );
}