import styled from "styled-components";
import { Button, Result } from "antd";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

// Button Styled Component
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

// Result Styled Component (Change title color)
const NotPassResult = styled(Result)`
  .ant-result-title {
    color: #F00
  }
`

export default function ResultNotPass(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const { userName, testScore, maxScore } = props;

  const backToMainPage = () => {
    dispatch({ type: 'STARTTEST'})
    router.push('/')
  }

  return (
    <NotPassResult
      status="error"
      title="เสียใจด้วยคุณสอบไม่ผ่าน"
      extra={
        <>
          <p>{`คุณ ${userName} ได้คะแนนรวม ${testScore}/${maxScore} คะแนน`}</p>

          <div className="d-flex justify-content-center">
            <StyledButton className="btn btn-danger" onClick={() => backToMainPage()}>
              กลับสู่หน้าหลัก
            </StyledButton>
          </div>
        </>
      }
    />
  );
}
