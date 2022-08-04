import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { FacebookOutlined, TwitterOutlined,InstagramOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: '#f8b500',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        mf-lab is coming soon!!!
      </p>
      <p>サイト作成準備中です。なにかあれば下記SNSからご連絡ください！</p>
      {/* <p>
        This is a fork of{' '}
        <a href="https://github.com/cvluca/gatsby-starter-markdown">
          https://github.com/cvluca/gatsby-starter-markdown
        </a>
      </p> */}
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<TwitterOutlined />}
          href="https://twitter.com/mi_6f"
          target="_blank"
        >
          Twitter
        </Button>
        <Button
          size="large"
          icon={<InstagramOutlined />}
          href="https://www.instagram.com/heavyfrisker/"
          target="_blank"
        >
          Instagram
        </Button>
        <Button
          size="large"
          icon={<FacebookOutlined />}
          href="https://www.facebook.com/mai.fukusaki"
          target="_blank"
        >
          Facebook
        </Button>
        {/* <Button type="primary" size="large">
          <Link to="/docs/template/get-started/introduction">Get Started</Link>
        </Button> */}
      </Button.Group>
    </div>
  )
}

export default IndexPage
