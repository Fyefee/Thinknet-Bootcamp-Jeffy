import { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";

import { useForm, Controller } from "react-hook-form";

// Textfield Input Styled Component
const StyledInput = styled(Input)`
  width: 20rem;
  height: 3rem;
  padding: 0.2rem 0.5rem;

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

// Submit Form Button Styled Component
const StyledButton = styled(Button)`
  width: 20rem;
  height: 2.5rem;
  margin-top: 1rem;
  background-color: salmon;
  border-color: orangered;

  &:hover {
    background-color: salmon;
  }

  &:focus {
    background-color: salmon;
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

// Username Form Styled Component
const StyledForm = styled('form')`
  @media (max-width: 575.98px) {
    width: 100%;
    padding: 0 5vw;
  }
`;

export default function NameForm(props) {
  const [userName, setUserName] = useState('')

  const { submitForm, buttonText } = props

  // Form Handler
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();
  const onSubmit = (data) => {
    submitForm(data.userName)
  };

  return (
    <StyledForm>

      {/* Username Form Section */}
      <div className="vstack">
        <Controller
          name="userName"
          control={control}
          rules={{
            required: true,
          }}
          defaultValue={userName}
          render={({ field: { onChange, value } }) => (
            <StyledInput
              size="large"
              placeholder="ชื่อของคุณ"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <p className="errorText">
          {errors.userName?.type === "required" && "โปรดระบุชื่อ"}
        </p>
      </div>
      
      {/* Submit Form Button */}
      <StyledButton onClick={handleSubmit(onSubmit)} className="btn btn-danger">
        {buttonText}
      </StyledButton>
    </StyledForm>
  );
}
