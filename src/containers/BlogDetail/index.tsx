import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { Image } from 'components/common'

import formatedDate from 'utils/formatedDate'
import getImageUrl from 'utils/getImageUrl'

import { BlogDetailMeta } from './method'

interface IBlogContainer {
  detail: IBlogDetail
}

interface IBlogDetail {
  id: number
  attributes: any
}

const BlogDetailContainer: React.FC<IBlogContainer> = ({ detail }) => {
  console.log('data detail', getImageUrl(detail))
  return (
    <section className="max-w-3xl mb-12 mt-24 m-auto">
      <BlogDetailMeta blog={detail} />
      {detail?.id > 0 && (
        <div className="p-16 sm:p-4 xs:p-5 text-justify">
          <div className="section_title pb-6 text-left">
            <h1 className="main_title mb-4">{detail?.attributes?.title}</h1>
            <p>
              Pubslished: {formatedDate(detail?.attributes?.publishedAt, true)}
            </p>
          </div>

          <Image
            src={getImageUrl(detail?.attributes?.image)}
            alt={detail?.attributes?.slug}
            className="mb-5"
          />

          <ReactMarkdown rehypePlugins={[rehypeRaw, remarkGfm]}>
            {detail?.attributes?.description}
          </ReactMarkdown>
        </div>
      )}
    </section>
  )
}

export default BlogDetailContainer
