import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getUserName } from "../redux/actions/userAction";
import { useEffect } from "react";

export default function RouteGuard({ children }) {
  const router = useRouter();
  const userName = useSelector(getUserName);

  useEffect(() => {
    checkUserName()
  }, []);

  const checkUserName = () => {
    if (!userName || userName === "") {
      router.push("/");
    }
  }

  return children
}
