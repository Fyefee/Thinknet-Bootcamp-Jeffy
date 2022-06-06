import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Radio, Space } from "antd";

import styles from "../styles/Question.module.css";

import { useForm, Controller } from "react-hook-form";

// Edit Name Button Styled Component
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

// Question Navigation Button Styled Component
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

// Radio Input Styled Component
const StyledRadio = styled(Radio)`
  font-size: 1.1rem;
  word-break: break-word;

  .ant-radio-wrapper {
    display: flex;
    align-items: center;
  }
`

// Form Styled Component
const StyledForm = styled('form')`
  width: 20rem;

  @media (max-width: 575.98px) {
    width: 100%;
    padding: 0 10vw;
  }
`

// Question Text Styled Component
const Question = styled('p')`
  font-size: 1.2rem;
  word-wrap: break-word;
`

export default function QuestionForm(props) {
  const { question, questionCount, goNext, goBack, saveResult, openModal, testResult } = props;

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();
  const onSubmit = (data, isNext) => {
    // Reset Form and Check which Button clicked
    if (isNext) {
      reset({ answerId: '' })
      goNext(data);
    } else {
      saveResult(data)
    }
  };

  const [answerId, setAnswerId] = useState('')

  // Check if already answer question and set answer to form
  const setDefaultValue = () => {
    const resultMap = new Map(Object.entries(testResult));
    const oldAnswerId = resultMap.get(question.id)
    if (oldAnswerId) {
      setAnswerId(oldAnswerId)
      reset({ answerId: oldAnswerId })
    }
  }

  useEffect(() => {
    setDefaultValue()
  }, [question]);

  // Reset Form before go back to past question
  const goBackHandler = () => {
    reset()
    goBack()
  }

  return (
    <StyledForm>

      {/* Question Text */}
      <Question>{`${questionCount}. ${question.name}`}</Question>

      {/* Question's Radio Input */}
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
      
      {/* Button Section */}
      <div className={styles.buttonBox}>
        <EditNameButton className="btn btn-danger" onClick={() => openModal()}>
          แก้ไขชื่อ
        </EditNameButton>
        
        <div className="hstack w-auto">
          <PageButton 
            className="btn btn-danger" 
            onClick={() => goBackHandler()}
          >
            {'<'}
          </PageButton>
          <PageButton 
            className="btn btn-danger" 
            onClick={handleSubmit((data) => onSubmit(data, false))}
          >
            {'Save'}
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
