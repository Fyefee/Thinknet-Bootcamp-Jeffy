import styled from "styled-components";
import { Input, Button, Form } from "antd";

// Textfield Input Styled Component
const StyledInput = styled(Input)`
  width: 100%;
  height: 3rem;
  padding: 0.2rem 0.8rem;
`;

// Submit Form Button Styled Component
const StyledButton = styled(Button)`
  height: 2.5rem;
  margin-top: 0.5rem;
  background-color: salmon;
  border-color: orangered;
  width: 100%;

  &:hover {
    background-color: salmon;
  }

  &:focus {
    background-color: salmon;
  }
`;

// Username Form Styled Component
const StyledForm = styled(Form)`
  width: 100%;
  padding: 4rem 2rem;
`;

const CenterFormItem = styled(Form.Item)`
  justify-content: center;
`;

export default function NameForm(props) {
  const { submitForm, buttonText } = props

  // Form Handler
  const onFinish = (values) => {
    submitForm(values.userName)
  };

  return (
    <StyledForm
      wrapperCol={{
        span: 24,
        sm: 14,
        md: 10,
        lg: 9,
        xl: 8,
      }}
      onFinish={onFinish}
    >
      {/* Username Form Section */}
      <CenterFormItem
        name="userName"
        rules={[
          {
            required: true,
            message: 'โปรดระบุชื่อของคุณ!!',
          },
        ]}
      >
        <StyledInput placeholder="ชื่อ"/>
      </CenterFormItem>

      
      {/* Submit Form Button */}
      <CenterFormItem>
        <StyledButton type="primary" htmlType="submit">
          {buttonText}
        </StyledButton>
      </CenterFormItem>
    </StyledForm>
  );
}
