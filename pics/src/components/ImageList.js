import React from 'react'

const ImageList = (props) => {
  const images = props.images.map(image => {
    return <img alt={image.description} key={image.id} src={image.urls.regular} />
  })
  return (
    <div>
      { images }
    </div>
  )
}

export default ImageList