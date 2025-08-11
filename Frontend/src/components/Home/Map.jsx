import React from 'react'

const Map = () => {
  return (
    <div className='map-container'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508838!2d144.9537353153159!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjAiUyAxNDTCsDU3JzE0LjMiRQ!5e0!3m2!1sen!2sgh!4v1618533381245!5m2!1sen!2sgh"
        // width="900"
        // height="650"
        style={{border:0, width: '100%', height: '100%'}}
        allowFullScreen=""
        loading="lazy">
      </iframe>

    </div>
  )
}

export default Map;