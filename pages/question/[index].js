import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { Layout, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'

import QuestionData from '../../shared/json/question.json'

import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";

const { Content } = Layout;
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

export default function Question(props) {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm();
  const onSubmit = (data) => {
    addUserName(data.userName);
  };

  useEffect(() => {
    // console.log(props.question);
  }, []);

  return (
    <Layout className="layout">
      <Header userName={userName} />

      <Content className="container justify-content-center align-items-center d-flex pt-5">
        <form></form>
      </Content>
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
    },
  };
}
