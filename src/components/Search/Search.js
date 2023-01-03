import React from 'react'
import { Typography } from 'antd';
import { Avatar, Image } from 'antd';
import Logo from '../../assets/github-logo.png'

const { Title } = Typography;

const Search = () => {
  return (
    <>
      <div>
        {/* <img src={Logo} alt="" />
       */}
        <Avatar src={<Image src={Logo} style={{ width: 64 }} />} size={64} />
        <div>
          <Title level={2}>GitHub Searcher</Title>
          <Title level={5}>Search Users or repositories below</Title>
        </div>
      </div>

    </>

  )
}

export default Search