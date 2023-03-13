import React from 'react'
import '../styles/MusicPlayer.css'

export default function SideImg({songs, setSongs, song, setSong, img, setImage}) {
  return (
    <div className='musicPlayer'>
    <div className="songImage">
    <img
      src={img}
      alt=""
    />
  </div>
  </div>
  )
}
