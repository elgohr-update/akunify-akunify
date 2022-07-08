import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const BlogDetailContainer = () => {
  return (
    <section className="max-w-3xl mb-12 mt-24 m-auto">
      <div className="p-16 sm:p-4 xs:p-5 text-justify">
        <div className="section_title pb-9 text-left">
          <h1 className="main_title mb-4">Syarat dan Ketentuan Penggunaan</h1>
          <p>Pubslished: </p>
        </div>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default BlogDetailContainer
