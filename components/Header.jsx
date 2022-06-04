import styled from 'styled-components'
import { Layout } from "antd";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background-color: salmon;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`

export default function AppHeader(props) {
  return (
    <StyledHeader>
      <p>โปรแกรมทำข้อสอบออนไลน์</p>
      <p>{props.userName}</p>
    </StyledHeader>
  );
}
