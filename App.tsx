import * as React from 'react';
import 'antd/dist/antd.min.css';
import { ReactElement, useState } from 'react';
import { Form, Input, Row, Col, Button, Card, Slider, InputNumber } from 'antd';

const { Item } = Form;

export default function App() {
  const [value, setValue] = useState(2);

  function handler(formItems: ReactElement) {
    console.log(formItems);
    let realFormItems = formItems;
    if (!Array.isArray(realFormItems)) {
      realFormItems = [realFormItems];
    }
    const length = realFormItems.length;
    if (length <= 2) {
      return (
        <Row wrap={false} gutter={24}>
          {realFormItems.map((item: any) => (
            <Col>{item}</Col>
          ))}
        </Row>
      );
    }
    if (length > 2 && length < 5) {
      return (
        <Row wrap={false} gutter={24}>
          {realFormItems.map((item: any) => (
            <Col flex="auto">{item}</Col>
          ))}
        </Row>
      );
    }
    if (length >= 5) {
      return (
        <Row gutter={24}>
          {realFormItems.map((item: any, index: number) => (
            <Col span={6} key={index}>
              {item}
            </Col>
          ))}
        </Row>
      );
    }
  }

  /**
   * 模拟生成表单项
   */
  const FormItems = () => {
    const howMany = new Array(value).fill(1);
    const formItems = howMany.map((item, index) => {
      return (
        <Item label="用户ID" name="userId" key={index}>
          <Input />
        </Item>
      );
    });
    return formItems;
  };

  return (
    <div style={{ padding: 16 }}>
      <Row>
        <Col span={12}>
          <Slider min={1} max={7} value={value} disabled />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={7}
            style={{ marginLeft: 16 }}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Card>
            <Row gutter={40} wrap={false}>
              <Col flex="auto">
                <Form
                  layout="horizontal"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 18 }}
                >
                  {handler(FormItems())}
                </Form>
              </Col>
              <Col flex="none">
                <Button type="primary">查询</Button>
                &emsp;
                <Button>重置</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
