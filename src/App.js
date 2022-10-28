import styled from "styled-components";
import Body from "./components/Layout/Body";
import Header from "./components/Layout/Header";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Header title="친구">헤더칠드런</Header>
      <Body>바디칠드런</Body>
    </Layout>
  );
}

export default App;

const Stdiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: yellow;
`;
