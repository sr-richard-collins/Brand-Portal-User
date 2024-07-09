import React from 'react'
import { IMAGE_BASE_URL } from '@/helpers/axiosConfig'

const Avatar = ({ user, defaultAvatar }) => {
  const renderAvatar = () => {
    if (user === null) return <img className="rounded-circle" width={32} height={32} src={defaultAvatar} alt="avatar" />
    if (!user.avatar) {
      const initial = user && user.username ? user.username[0].toUpperCase() : ''
      return (
        <div
          className="rounded-circle"
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#007bff',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
          }}>
          {initial}
        </div>
      )
    }
    return <img className="rounded-circle" width={32} height={32} src={IMAGE_BASE_URL + user.avatar || defaultAvatar} alt="avatar" />
  }

  return <span className="d-flex align-items-center">{renderAvatar()}</span>
}

export default Avatar
