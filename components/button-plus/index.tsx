import * as React from 'react';
import { Button, Popconfirm } from 'antd';

const ButtonPlus = (props: any) => {
  const { onClick, title, children } = props;
  return (
    <Popconfirm title={title ?? '确认要删除吗?'} onConfirm={onClick}>
      <Button {...props} onClick={(e: any) => e.preventDefault()}>
        {children}
      </Button>
    </Popconfirm>
  );
};

export default ButtonPlus;
