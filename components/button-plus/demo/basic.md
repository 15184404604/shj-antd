---
order: 1
title:
  zh-CN: 按钮二次封装
  en-US: Type
toc: false
timeline: true
---

## zh-CN

- 在 antd.Button 组件基础上封装, title 提示用语,一般用于删除时的提示
- 兼容 antd.Button 组件

## en-US

```jsx
import { message } from 'antd';
import { ButtonPlus } from 'shj-antd';

ReactDOM.render(
  <>
    <ButtonPlus type="primary" title="您是否要删除？" onClick={() => message.success('删除成功')}>
      按钮1
    </ButtonPlus>
    <ButtonPlus type="dashed" onClick={() => message.success('删除成功')}>
      按钮2
    </ButtonPlus>
    <ButtonPlus type="link" onClick={() => message.success('删除成功')}>
      按钮3
    </ButtonPlus>
  </>,
  mountNode,
);
```

<style>
/* .ant-popover-message {
  min-width: 222px;
  padding-bottom: 30px;
} */
</style>
