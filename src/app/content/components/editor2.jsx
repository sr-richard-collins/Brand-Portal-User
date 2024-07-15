import React from 'react'
import { IMAGE_BASE_URL } from '@/helpers/axiosConfig'
import axios from '../../../helpers/axiosConfig'
import './editor2.css'

const TransaviaAssets = ({ editorText, editorImg }) => {
  const toDataURL = async (url) => {
    /* Using Axios */
    const response = await axios.get(url, { responseType: 'blob' })
    const imageDataUrl = URL.createObjectURL(response.data)

    return imageDataUrl
  }
  const downloadImage = async (src) => {
    const a = document.createElement('a')
    a.href = await toDataURL(src)
    a.download = src.substring(src.lastIndexOf('/') + 1)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: editorText }} />
      <div className="download-button-container">
        <button onClick={() => editorImg.forEach((img) => downloadImage(IMAGE_BASE_URL + img))} className="download-button">
          Download collection
        </button>
      </div>
      <div className="assets">
        {editorImg.map((img, index) => (
          <div className="asset-item" key={index}>
            <div className="image-container">
              <img src={IMAGE_BASE_URL + img} alt={img} />
              <div className="overlay">
                <button onClick={() => downloadImage(IMAGE_BASE_URL + img)} className="download-single">
                  Download
                </button>
              </div>
            </div>
            <p>{img}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransaviaAssets
