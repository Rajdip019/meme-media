import React from 'react'

type Props = {
  name: string,
  url :string,
  snippet: string
  language: string
}

const SingleNew: React.FC<Props> = ({name, url, snippet, language}) => {
  return (
    <div className="px-4 hover:bg-gray-800 transition-all cursor-pointer mt-3 text-gray-100">
    <ul className="list-disc px-4 py-2 text-sm text-gray-100">
      <a href={url} target="_blank">
      <li className="font-semibold">{name}<p className="flex text-xs py-1 text-gray-400">Top News <li className="ml-7">{language}</li></p></li>
      </a>
    </ul>
  </div>
  )
}

export default SingleNew