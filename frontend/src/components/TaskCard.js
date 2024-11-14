import React, { useEffect } from 'react';
import { Modal, Button, Form, Input, Select, Typography } from 'antd';

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const TaskCard = ({ visible, onClose, task, onSave, editable }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (task) {
      form.setFieldsValue(task);
    }
  }, [task, form]);

  const handleSave = () => {
    form.validateFields()
      .then(values => {
        onSave({ ...task, ...values });
        onClose();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title={task ? `Задача: ${task.name}` : 'Новая задача'}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Закрыть
        </Button>,
        editable && (
          <Button key="save" type="primary" onClick={handleSave}>
            Сохранить
          </Button>
        ),
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Название">
          {editable ? (
            <Input />
          ) : (
            <div>
              <Title level={5}>Название</Title>
              <Paragraph>{task?.name}</Paragraph>
            </div>
          )}
        </Form.Item>
        <Form.Item name="description">
          {editable ? (
            <TextArea rows={4} />
          ) : (
            <div>
              <Title level={5}>Описание</Title>
              <Paragraph>{task?.description}</Paragraph>
            </div>
          )}
        </Form.Item>
        {editable ? (
          <Form.Item name="status" label="Статус">
            <Select>
              <Select.Option value="to-do">Надо сделать</Select.Option>
              <Select.Option value="done">Готово</Select.Option>
            </Select>
          </Form.Item>
        ) : (
          <div>
            <Title level={5}>Статус</Title>
            <Text>
              {task?.status === 'to-do' ? 'Надо сделать' : 'Готово'}
            </Text>
          </div>
        )}
      </Form>
    </Modal>
  );
};

export default TaskCard;
