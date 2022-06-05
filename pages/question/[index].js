import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Layout, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'

import QuestionData from '../../shared/json/question.json'

import Header from "../../components/Header";
import QuestionForm from '../../components/QuestionForm'
import ChangeNameModal from '../../components/ChangeNameModal'

const { Content } = Layout;

export default function Question(props) {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);

  const router = useRouter();

  const { question, questionCount, questionLangth, pageIndex } = props;

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const nextButtonHandler = useCallback((data) => {
    dispatch({ type: "ADDRESULT", questionId: question.id, answerId: data.answerId });
    if (pageIndex === (questionLangth - 1)) {
      console.log('result')
    } else {
      router.push(`/question/${pageIndex + 1}`)
    }
  })

  const backButtonHandler = useCallback((data) => {
    dispatch({ type: "ADDRESULT", questionId: question.id, answerId: data.answerId });
    if (pageIndex === 0) {
      router.push('/')
    } else {
      router.push(`/question/${pageIndex - 1}`)
    }
  })

  const editUserName = useCallback((name) => {
    // Set Username to Redux persist
    dispatch({ type: "ADDUSER", userName: name });
    closeModal()
  }, [dispatch]);

  return (
    <Layout className="layout-background">
      <Header userName={userName} />
      <Content className="container justify-content-center align-items-center d-flex pt-5">
        <QuestionForm
          question={question}
          questionCount={questionCount}
          goNext={(data) => nextButtonHandler(data)}
          goBack={(data) => backButtonHandler(data)}
          openModal={() => openModal()}
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
export const getStaticPaths = async () => {
  // const res = await fetch(`${router.basePath}/api/question`);
  // const questions = await res.json();
  const questions = QuestionData

  const pathList = questions.map((question, index) => ({ 
    params: { index: index.toString() }
  }));

  return {
    paths: pathList,
    fallback: false, 
  };
};

export async function getStaticProps({ params }) {
  // const res = await fetch(`${router.basePath}/api/question`);
  // const questions = await res.json();
  // console.log('test')
  const question = QuestionData[params.index]

  return {
    props: {
      question,
      questionCount: parseInt(params.index) + 1,
      questionLangth: QuestionData.length,
      pageIndex: parseInt(params.index),
    },
  };
}
