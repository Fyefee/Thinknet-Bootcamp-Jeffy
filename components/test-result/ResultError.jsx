import styled from "styled-components";
import { Button, Result } from "antd";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import styles from '../../styles/Question.module.css'

const StyledButton = styled(Button)`
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
    width: 100% !important;
  }
`;

export default function ResultError() {
  const dispatch = useDispatch();
  const router = useRouter();

  const backToMainPage = () => {
    dispatch({ type: 'STARTTEST'})
    router.push('/')
  }

  const backToQuestionPage = () => {
    dispatch({ type: 'STARTTEST'})
    router.push('/question/1')
  }

  return (
    <Result
      status="warning"
      title="เกิดปัญหาอะไรบ้างอย่างกับผลสอบ"
      extra={
        <>
          <p className="errorText mb-3">** อาจเกิดจากทำข้อสอบไม่ครบ **</p>

          <div className={styles.buttonBox}>
            <StyledButton className="btn btn-danger" onClick={() => backToMainPage()}>
              กลับสู่หน้าหลัก
            </StyledButton>

            <StyledButton className="btn btn-danger" onClick={() => backToQuestionPage()}>
              กลับสู่ข้อสอบ
            </StyledButton>
          </div>
        </>
      }
    />
  );
}
