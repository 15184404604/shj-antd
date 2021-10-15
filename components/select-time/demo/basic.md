---
order: 1
title:
  zh-CN: 下拉选择可选时间
  en-US: Type
toc: false
timeline: true
---

## zh-CN

- 对选择框和时间选择器进行二次封装

## en-US

```tsx
import React from 'react';
import { Form, Button } from 'antd';
import { SelectTime } from 'shj-antd';

const options = [
  { name: '在职', id: 1, showTime: true, timeTitle: '请选择入职时间' },
  { name: '停职', id: 2 },
  { name: '离职', id: 3, showTime: true },
];

const Demo: React.FC = () => {
  const [form] = Form.useForm();

  function onSubmit(values) {
    console.log('>>>>', values);
  }

  return (
    <>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          rules={[{ required: true, message: '请选择职位状态' }]}
          name="status"
          label="职位状态"
        >
          <SelectTime options={options} />
        </Form.Item>
      </Form>
      <Button type="primary" onClick={() => form.submit()}>
        提交
      </Button>
    </>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
