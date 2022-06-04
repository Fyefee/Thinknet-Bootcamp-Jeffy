import { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";

import styles from "../styles/Home.module.css";

import { useForm, Controller } from "react-hook-form";

const StyledInput = styled(Input)`
  width: 20rem;
  height: 3rem;
  padding: 0.2rem 0.5rem;
`;

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
`;

export default function NameForm(props) {
  const [userName, setUserName] = useState('')

  const { submitForm } = props

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();
  const onSubmit = (data) => {
    submitForm(data.userName)
  };

  return (
    <form>
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
              placeholder="Name"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <p className={styles.errorText}>
          {errors.userName?.type === "required" && "โปรดระบุชื่อ"}
        </p>
      </div>

      <StyledButton onClick={handleSubmit(onSubmit)} className="btn btn-danger">
        เริ่มทำข้อสอบ
      </StyledButton>
    </form>
  );
}
