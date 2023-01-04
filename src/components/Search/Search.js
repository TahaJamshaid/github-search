import React from 'react'
import { Typography } from 'antd';
import { Avatar, Image } from 'antd';
import Logo from '../../assets/github-logo.png'
import { Form, Input, Select } from 'antd';
const { Option } = Select;

const { Title } = Typography;


const Search = () => {
  return (
    <>
      <div>
        <Avatar src={<Image src={Logo} style={{ width: 64 }} />} size={64} />
        <div>
          <Title level={2}>GitHub Searcher</Title>
          <Title level={5}>Search Users or repositories below</Title>
        </div>
      </div>
      <div>
        <Form layout="inline" >
          <Form.Item

            name="github-search"
          >
            <Input placeholder="Start Typing to search" />
          </Form.Item>
          <Form.Item
            name="type"
          >
            <Select
              placeholder="User or Repository"
              allowClear
            >
              <Option value="male">user</Option>
              <Option value="female">repository</Option>
            </Select>
          </Form.Item>
        </Form>
      </div>

    </>

  )
}

export default Search