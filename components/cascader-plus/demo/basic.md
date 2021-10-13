---
order: 0
title:
  zh-CN: 多选
  en-US: Basic
---

## zh-CN

级联选择器能多选

```jsx
import { CascaderPlus } from 'shj-antd';

const options = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number ${index}`, value: index })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

ReactDOM.render(
  <CascaderPlus
    style={{ width: 233 }}
    options={options}
    onChange={onChange}
    multiple
    maxTagCount="responsive"
  />,
  mountNode,
);
```
