import dayjs from 'dayjs'
import Image from 'next/image'

type BlogPostCardParams = {
  date: string
  title: string
  cover: string
  content: string
}

export default async function BlogPostCard (params: BlogPostCardParams) {
  const { date, title, content, cover } = params

  const year = dayjs(date).format('YYYY')
  const month = dayjs(date).format('MMM')
  const day = dayjs(date).format('DD')
  const dateTime = dayjs(date).format('YYYY-MM-DD')
  return <article className="flex bg-white dark:bg-gray-900 transition hover:shadow-xl">
    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
      <time
        dateTime={dateTime}
        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
      >
        <span>{year}</span>
        <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
        <span>{month} {day}</span>
      </time>
    </div>

    <div className="hidden sm:block sm:basis-56">
      <Image
        alt="cover image"
        src={cover}
        className="aspect-square h-full w-full object-cover"
        width={200}
        height={200}
      />
    </div>

    <div className="flex flex-1 flex-col justify-between">
      <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 dark:border-white/10">
        <a href="#">
          <h3 className="font-bold uppercase text-text-100 dark:text-white">
            {title}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-text-200">
          {content}
        </p>
      </div>

      <div className="sm:flex sm:items-end sm:justify-end">
        <a
          href="#"
          className="block bg-light-accent dark:bg-dark-accent px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-accent-200"
        >
          Read Blog
        </a>
      </div>
    </div>
  </article>
}