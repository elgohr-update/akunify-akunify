import React from 'react'
import type { NextPage } from 'next'
import { NextPageContext } from 'next'

import Error from 'pages/_error'
import BlogDetailContainer from 'containers/BlogDetail'

import { getBlogDetail } from 'services/blog'

interface IBlogPageProps {
  blogDetail: any
  statusCode: number
}

const BlogPage: NextPage<IBlogPageProps> = (props) => {
  const { blogDetail, statusCode } = props

  if (statusCode === 404) {
    return <Error statusCode={statusCode} />
  }

  return <BlogDetailContainer detail={blogDetail} />
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { query } = ctx

  const detail: any = await getBlogDetail({
    with_image: true,
    slug: String(query.slug),
  })
  console.log('detail', detail)
  const statusCode = detail?.status || 404
  const blogDetail = detail?.data || null

  return {
    props: {
      blogDetail,
      statusCode,
    },
  }
}

export default BlogPage
