import { useCallback, useEffect, useState } from "react";
import { Layout, Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'

import QuestionData from '../../shared/json/question.json'

import Header from "../../components/Header";
import QuestionForm from '../../components/QuestionForm'
import ChangeNameModal from '../../components/ChangeNameModal'

import { getUserName, getIsFinished } from "../../redux/actions/userAction";
import { getResult } from "../../redux/actions/questionAction";
import { checkUserName } from '../../utils/checkUserName'

const { Content } = Layout;

export default function Question(props) {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const isFinished = useSelector(getIsFinished);
  const testResult = useSelector(getResult);

  const router = useRouter();

  const { question, questionLangth, pageIndex, questionProgress } = props;

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Check if not set Username and Check is in Finish state
  useEffect(() => {
    if (!checkUserName(userName)) {
      router.push("/");
    }
    if (isFinished) {
      router.push("/result");
    }
  }, [question]);

  // Next Question Button Handler (Save answer and if in last question redirect to Result Page)
  const nextButtonHandler = useCallback((data) => {
    saveResult(data)
    if (pageIndex === (questionLangth)) {
      dispatch({ type: "FINISHTEST" });
      router.replace('/result')
    } else {
      router.replace(`/question/${pageIndex + 1}`)
    }
  })

  // Back Question Button Handler (check if in first question)
  const backButtonHandler = useCallback(() => {
    if (pageIndex === 1) {
      router.push('/')
    } else {
      router.replace(`/question/${pageIndex - 1}`)
    }
  })

  // Edit Username
  const editUserName = useCallback((name) => {
    // Set Username to Redux persist
    dispatch({ type: "ADDUSER", userName: name });
    closeModal()
  }, [dispatch]);

  // Add or Edit answer to Redux
  const saveResult = useCallback((data) => {
    dispatch({ type: "ADDRESULT", questionId: question.id, answerId: data.answerId });
  })

  return (
    <Layout className="layout-background">
      <Header userName={userName} />
      <Progress percent={questionProgress} showInfo={false} strokeColor='salmon' />
      <Content className="container justify-content-center align-items-center d-flex pt-5">
        <QuestionForm
          question={question}
          questionCount={pageIndex}
          goNext={(data) => nextButtonHandler(data)}
          goBack={() => backButtonHandler()}
          saveResult={(data) => saveResult(data)}
          openModal={() => openModal()}
          testResult={testResult}
        />
      </Content>
      <ChangeNameModal
        isModalOpen={isModalOpen}
        closeModal={() => closeModal()}
        submitForm={(name) => editUserName(name)}
      />
    </Layout>
  );
}

// Get All Question Path
export const getStaticPaths = async () => {
  const questions = QuestionData

  const pathList = questions.map((question, index) => ({ 
    params: { index: (index + 1).toString() }
  }));

  return {
    paths: pathList,
    fallback: false, 
  };
};

// Get Question's Data
export async function getStaticProps({ params }) {
  const question = QuestionData[params.index - 1]

  return {
    props: {
      question,
      questionLangth: QuestionData.length,
      pageIndex: parseInt(params.index),
      questionProgress: parseInt(params.index) / QuestionData.length * 100,
    },
  };
}
