import React from 'react'
import { Card, Avatar, Image } from 'antd';
import Logo from '../../assets/github-logo.png'


const ResultCard = ({ cardType, link, name, description, imageURL, score }) => {
  return (
    <Card size="small" title={name?.split(0, 30)} extra={<a href={link}>More</a>} style={{ width: 300, height: 200, border: 'solid grey' }}>

      {description && <p>{description.split(225) + "..."}</p>}
      {cardType === 'user' && <>
        <Avatar src={<Image src={imageURL || Logo} style={{ width: 64 }} />} size={64} />
        <p>Score: {score}</p>
      </>}

    </Card>
  )
}

export default ResultCard