import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { Layout } from "antd";

import { getIsFinished } from "../redux/actions/userAction";

import Header from "../components/Header";
import NameForm from "../components/NameForm";

const { Content } = Layout;

export default function Home() {
  const dispatch = useDispatch();
  const isFinished = useSelector(getIsFinished);

  const router = useRouter();

  const [userName, setUserName] = useState('')

  // Clear User name on redux persist when entering page
  useEffect(
    () => {
      // Check if state in Finish state it'll redirect to Result Page
      if (isFinished) {
        router.push("/result");
      } else {
        dispatch({ type: "CLEARUSER" });
        dispatch({ type: "CLEARRESULT", userName: name });
      }
    },
    [],
  )

  // Submit User name Form Function with useCallback(?)
  const addUserName = useCallback((name) => {
    // Set Username to Redux persist and Set state to start test
    dispatch({ type: 'STARTTEST'})
    dispatch({ type: "ADDUSER", userName: name });

    // Routing to Question Page
    router.push('/question/1')
  }, [dispatch]);

  return (
    <Layout className="layout-background">

      <Header userName={userName} />
      
      <Content>

        <NameForm
          submitForm={(name) => addUserName(name)}
          buttonText={'เริ่มทำข้อสอบ'}
        />

      </Content>

    </Layout>
  );
}
