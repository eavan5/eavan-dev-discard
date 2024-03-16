import { fetchAPI } from '@/utils/fetchApi'

type Pagination = {
	page: number
	pageSize: number
}

type StrapiData<T> = {
	id: number
	attributes: T
}

type StrapiResponse<T> = {
	data: StrapiData<T>[]
	meta: {
		Pagination: Pagination
	}
}

type GetPostsParams = {
	pagination: Pagination
} & Record<string, any>

type Article = {
	title: string
	content: string
	publishedAt: string
	cover: {
		data: StrapiData<{
			url: string
		}>
	}
}

export async function getPosts(params: GetPostsParams): Promise<StrapiResponse<Article>> {
	const res = await fetchAPI('/posts', params)
	return res
}
