import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { Layout } from "antd";

import Header from "../components/Header";
import NameForm from "../components/NameForm";

const { Content } = Layout;

export default function Home() {
  const dispatch = useDispatch();
  // const userName = useSelector(getUserName)

  const router = useRouter();

  const [userName, setUserName] = useState('')

  // Clear User name on redux persist when entering page
  useEffect(
    () => {
      dispatch({ type: "CLEARUSER" });
    },
    [],
  )

  // Submit User name Form Function with useCallback(?)
  const addUserName = useCallback((name) => {
    // Set Username to Redux persist
    dispatch({ type: "ADDUSER", userName: name });

    // Routing to Question Page
    router.push({
      pathname: '/question/[index]',
      query: { index: 0 },
    }, '/question/0')
  }, [dispatch]);

  return (
    <Layout className="layout">

      <Header userName={userName} />
      
      <Content className="container justify-content-center align-items-center d-flex pt-5">

        <NameForm submitForm={(name) => addUserName(name)} />

      </Content>

    </Layout>
  );
}
