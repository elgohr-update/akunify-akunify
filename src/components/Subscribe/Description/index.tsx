import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface DescProps {
  content: string
  isShow: boolean
  handleChangeShow: () => void
}

const Description: React.FC<DescProps> = ({
  content,
  isShow,
  handleChangeShow,
}) => {
  return (
    <>
      {!isShow && (
        <div className="px-2 sm:h-24 xs:h-25 h-15 border-b pb-4 mt-2">
          {content?.replace(/<[^>]*>?/gm, '').slice(0, 100)}. . .
          <button
            className="float-right font-light text-turquoise-60 text-sm cursor-pointer"
            onClick={() => handleChangeShow()}
          >
            selengkapnya
          </button>
        </div>
      )}

      {isShow && (
        <div className="px-2 border-b pb-4 mt-2">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {content || ''}
          </ReactMarkdown>
          <button
            className="float-right font-light text-turquoise-60 text-sm cursor-pointer -mt-5"
            onClick={() => handleChangeShow()}
          >
            sembunyikan
          </button>
        </div>
      )}
    </>
  )
}

export default Description
