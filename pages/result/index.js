import { useCallback, useEffect, useState } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import QuestionData from "../../shared/json/question.json";

import { getUserName, getIsFinished } from "../../redux/actions/userAction";
import { getResult } from "../../redux/actions/questionAction";

import Header from "../../components/Header";
import ResultError from "../../components/test-result/ResultError";
import ResultNotPass from "../../components/test-result/ResultNotPass";
import ResultPass from "../../components/test-result/ResultPass";

const { Content } = Layout;

export default function ResultPage(props) {
  const userName = useSelector(getUserName);
  const isFinished = useSelector(getIsFinished);
  const testResult = useSelector(getResult);

  const router = useRouter();

  const { questions, passScore, maxScore } = props;

  const [testScore, setTestScore] = useState(0);
  const [isError, setIsError] = useState(false);

  // Check answer score and error in test result
  const checkAnswer = () => {
    let isDoAllQuestion = true;
    let score = 0;

    // Turn object to map object
    const resultMap = new Map(Object.entries(testResult));

    for (let i = 0; i < questions.length; i++) {
      const answerId = resultMap.get(questions[i].id);

      // Check if not have question id in map object
      if (!answerId) {
        isDoAllQuestion = false;
      }

      // Check answer result and increase score
      if (answerId === questions[i].answerId) {
        score += 1;
      }
    }
    setTestScore(score);

    // Check if have error in test result return error state
    if (!isDoAllQuestion) {
      setIsError(true);
    }
  };

  useEffect(() => {
    // Check if not in Finish Test State it'll redirect to home page
    if (!isFinished) {
      router.push("/");
    }
    checkAnswer();
  }, []);

  // Render Test Result
  const renderTestResult = () => {
    if (isError) {
      return (
        <ResultError />
      );
    }

    if (testScore < passScore) {
      return (
        <ResultNotPass userName={userName} maxScore={maxScore} testScore={testScore} />
      )
    } else {
      return (
        <ResultPass userName={userName} maxScore={maxScore} testScore={testScore} />
      )
    }
  };

  return (
    <Layout className="layout-background">
      <Header userName={userName} />
      <Content className="container justify-content-center align-items-center d-flex pt-5">
        { renderTestResult() }
      </Content>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const passScore = (QuestionData.length * 4) / 5;
  return {
    props: {
      questions: QuestionData,
      passScore,
      maxScore: QuestionData.length,
    },
  };
}
