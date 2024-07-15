import React from 'react'
import { IMAGE_BASE_URL } from '@/helpers/axiosConfig'

const Editor1 = ({ editorText, editorImg }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: editorText }} />
      <div className="logos">
        {editorImg.length &&
          editorImg.map((img, index) => (
            <div className="logo-item" key={index}>
              <img src={IMAGE_BASE_URL + img} alt={img.alt} />
              <p>{img.alt}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Editor1
