import React, { useState } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { Dropdown, Button, Calendar, Row, Col, Select } from 'antd';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import './index.less';

const { Option } = Select;

const SelectTime: React.FC = (props: any) => {
  const { onChange, value, options, ...other } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [activeObj, setActiveObj] = useState<any>({});

  function handleMenuClick({ id, name, showTime, timeTitle }: any) {
    setActiveObj({ id, name, showTime, timeTitle });
    onChange({ id, prefixName: name, suffixName: !showTime ? '' : moment().format('YYYY-MM-DD') });
  }
  function handleChange(values: any) {
    onChange({
      id: activeObj.id,
      prefixName: activeObj.name,
      suffixName: !activeObj.showTime ? '' : moment(values).format('YYYY-MM-DD'),
    });
  }
  const menu = (
    <div onClick={(e: any) => e.preventDefault()} className="select-time-menu">
      <div className="select-time-menu-left">
        {options?.map(({ id, name, showTime, timeTitle }: any) => {
          if (!showTime) {
            return (
              <div
                onClick={() => {
                  handleMenuClick({ id, name, showTime });
                  setVisible(false);
                }}
                className={classNames('select-time-menu-left-item', {
                  'select-time-menu-left-active': activeObj?.id === id,
                })}
                key={id}
              >
                {name}
              </div>
            );
          }
          return (
            <div
              onClick={() => handleMenuClick({ id, name, showTime, timeTitle })}
              className={classNames('select-time-menu-left-item', {
                'select-time-menu-left-active': activeObj?.id === id,
              })}
              key={id}
            >
              <span>{name}</span>
              <RightOutlined />
            </div>
          );
        })}
      </div>
      <div
        className={classNames('select-time-menu-right', {
          'select-time-menu-show': activeObj?.showTime,
        })}
      >
        <Calendar
          fullscreen={false}
          onChange={handleChange}
          headerRender={object => {
            const start = 0;
            const end = 12;
            const monthOptions = [];

            const current = object.value.clone();
            const localeData = object.value.localeData();
            const months = [];
            for (let i = 0; i < 12; i++) {
              current.month(i);
              months.push(localeData.monthsShort(current));
            }

            for (let index = start; index < end; index++) {
              monthOptions.push(
                <Option value={`${index}`} className="month-item" key={`${index}`}>
                  {months[index]}
                </Option>,
              );
            }
            const month = object.value.month();

            const year = object.value.year();
            const option = [];
            for (let i = year - 10; i < year + 10; i += 1) {
              option.push(
                <Option key={i} value={i} className="year-item">
                  {i}
                </Option>,
              );
            }
            return (
              <div>
                <div className="select-time-menu-right-header">
                  {activeObj?.timeTitle || `请选择${activeObj?.name}日期`}
                </div>
                <Row style={{ padding: '8px 12px' }} gutter={8}>
                  <Col>
                    <Select
                      size="small"
                      dropdownMatchSelectWidth={false}
                      className="my-year-select"
                      onChange={(newYear: any) => {
                        const now = object.value.clone().year(newYear);
                        object.onChange(now);
                      }}
                      value={String(year)}
                    >
                      {option}
                    </Select>
                  </Col>
                  <Col>
                    <Select
                      size="small"
                      dropdownMatchSelectWidth={false}
                      value={String(month)}
                      onChange={(selectedMonth: string) => {
                        const newValue = object.value.clone();
                        newValue.month(parseInt(selectedMonth, 10));
                        object.onChange(newValue);
                      }}
                    >
                      {monthOptions}
                    </Select>
                  </Col>
                </Row>
              </div>
            );
          }}
        />
      </div>
    </div>
  );

  return (
    <Dropdown
      overlayStyle={{ minWidth: 'initial' }}
      visible={visible}
      onVisibleChange={(show: React.SetStateAction<boolean>) => setVisible(show)}
      overlay={menu}
      {...other}
      trigger={['click']}
    >
      <Button style={{ width: 200 }}>
        <div className="select-time-btn">
          <span>
            {value?.prefixName}
            {value?.suffixName ? ' / ' : ''}
            {value?.suffixName}
          </span>
          <DownOutlined />
        </div>
      </Button>
    </Dropdown>
  );
};

export default SelectTime;
