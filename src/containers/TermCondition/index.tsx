import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import { useTnc } from 'hooks/index'

const TermConditionContainer: React.FC = () => {
  const { termCondition }: any = useTnc()

  return (
    <section className="max-w-3xl mb-12 mt-24 m-auto">
      <div className="p-16 sm:p-4 xs:p-5 text-justify">
        <div className="section_title pb-9 text-center">
          <h1 className="main_title mb-4">Syarat dan Ketentuan Penggunaan</h1>
        </div>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {termCondition.data?.attributes?.descriptions}
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default TermConditionContainer
