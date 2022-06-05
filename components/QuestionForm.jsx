import { useState } from "react";
import styled from "styled-components";
import { Button, Radio, Space } from "antd";

import styles from "../styles/Question.module.css";

import { useForm, Controller } from "react-hook-form";

const EditNameButton = styled(Button)`
  width: 10rem !important;
  height: 2.25rem;
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

const PageButton = styled(Button)`
  width: 4rem !important;
  height: 2.25rem;
  margin-top: 1rem;
  background-color: salmon;
  border-color: orangered;
  border-radius: 0;

  &:hover {
    background-color: salmon;
  }

  &:focus {
    background-color: salmon;
  }

  &:first-child {
    width: 2.75rem !important;
    border-radius: 3rem 0 0 3rem
  }

  &:last-child {
    width: 2.75rem !important;
    border-radius: 0 3rem 3rem 0
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

const StyledRadio = styled(Radio)`
  font-size: 1.1rem;
  word-break: break-word;

  .ant-radio-wrapper {
    display: flex;
    align-items: center;
  }
`

const StyledForm = styled('form')`
  width: 20rem;

  @media (max-width: 575.98px) {
    width: 100%;
    padding: 0 10vw;
  }
`

const Question = styled('p')`
  font-size: 1.2rem;
  word-wrap: break-word;
`

export default function QuestionForm(props) {
  const { question, questionCount, goNext, goBack, openModal } = props;

  const [answerId, setAnswerId] = useState('')

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();
  const onSubmit = (data, isNext) => {
    if (isNext) {
      goNext(data);
    } else {
      goBack(data)
    }
    reset()
  };

  return (
    <StyledForm>
      <Question>{`${questionCount}. ${question.name}`}</Question>
      <div className="vstack pt-2">
        <Controller
          name="answerId"
          control={control}
          rules={{
            required: true,
          }}
          defaultValue={answerId}
          render={({ field: { onChange, value } }) => (
            <Radio.Group onChange={onChange} value={value} size="large">
              <Space direction="vertical">
                {question.choice.map((choice, index) => (
                  <StyledRadio value={choice.id} key={`choice-${index}`}>{choice.text}</StyledRadio>
                ))}
              </Space>
            </Radio.Group>
          )}
        />
        <p className="errorText">
          {errors.answerId?.type === "required" && "โปรดเลือกคำตอบ"}
        </p>
      </div>
      
      <div className={styles.buttonBox}>
        <EditNameButton className="btn btn-danger" onClick={() => openModal()}>
          แก้ไขชื่อ
        </EditNameButton>
        
        <div className="hstack w-auto">
          <PageButton 
            className="btn btn-danger" 
            onClick={handleSubmit((data) => onSubmit(data, false))}
          >
            {'<'}
          </PageButton>
          <PageButton 
            className="btn btn-danger" 
            onClick={handleSubmit((data) => onSubmit(data, true))}
          >
            {'>'}
          </PageButton>
        </div>
      </div>
    </StyledForm>
  );
}
