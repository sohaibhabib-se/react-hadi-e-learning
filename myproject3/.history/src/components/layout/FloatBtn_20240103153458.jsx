import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import React from 'react';
import { FloatButton } from 'antd';
const FloatBtn = () => (
  <>
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{
        right: 24,
      }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>  
  </>
);
export default FloatBtn;