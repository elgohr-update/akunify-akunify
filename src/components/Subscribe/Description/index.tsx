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
        <div className="columns-1 border-b">
          <div className="px-2">
            {content?.replace(/<[^>]*>?/gm, '').slice(0, 100)}. . .
          </div>
          <div className="text-right">
            <button
              className="float-right font-light text-turquoise-60 text-sm cursor-pointer my-2"
              onClick={() => handleChangeShow()}
            >
              selengkapnya
            </button>
          </div>
        </div>
      )}

      {isShow && (
        <div className="columns-1 border-b">
          <div className="px-2">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {content || ''}
            </ReactMarkdown>
          </div>
          <div className="text-right">
            <button
              className="float-right font-light text-turquoise-60 text-sm cursor-pointer my-2"
              onClick={() => handleChangeShow()}
            >
              sembunyikan
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Description
