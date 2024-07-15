import React from 'react'
import { IMAGE_BASE_URL } from '@/helpers/axiosConfig'
import axios from '../../../helpers/axiosConfig'
import './editor2.css'

const TransaviaAssets = ({ editorText, editorImg }) => {
  const downloadImage = (imgSrc) => {
    const filename = imgSrc.substring(imgSrc.lastIndexOf('/') + 1)

    axios
      .get(`/images/${filename}`, {
        responseType: 'blob', // important
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      })
      .catch(() => alert('Failed to download image.'))
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
