import React from 'react'
import './Style.css'
export default function Image() {
  return (
    <div className='contanior'>
      <h1>Visit  Our School In 360° View</h1>

      <div className="img">
        <iframe src="https://momento360.com/e/u/32960b3576f84ea09f0b837afaae6aba?utm_campaign=embed&utm_source=other&heading=-354.01&pitch=16.51&field-of-view=75.08&size=medium&display-plan=true"
        width={'100%'} height={'400px'} frameborder="0" title='map'></iframe>
      </div>
    </div>
  )
}
