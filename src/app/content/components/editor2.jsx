import React from 'react'
import { IMAGE_BASE_URL } from '@/helpers/axiosConfig'
import axios from '../../../helpers/axiosConfig'
import './editor2.css'

const TransaviaAssets = ({ editorText, editorImg }) => {
  const downloadImage = async (src) => {
    try {
      // Use Axios to fetch the image data
      const response = await axios.get(src, { responseType: 'blob' })

      // Create a URL for the blob
      const url = window.URL.createObjectURL(response.data)

      // Create a link element
      const link = document.createElement('a')
      link.href = url
      link.download = src.substring(src.lastIndexOf('/') + 1)

      // Append the link to the body and click it programmatically
      document.body.appendChild(link)
      link.click()

      // Clean up: remove the link from the DOM
      document.body.removeChild(link)

      // Revoke the object URL
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading the image:', error)
    }
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
