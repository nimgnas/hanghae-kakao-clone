import styled from "styled-components";

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Nav></Nav>
      <Container>{children}</Container>
    </LayoutContainer>
  );
}
export default Layout;

const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 500px;
  background-color: tomato;
  height: 100vh;
  display: flex;
  padding: 20px;
`;

const Nav = styled.div`
  background-color: blue;
  height: 100%;
  width: 100px;
`;
const Container = styled.div`
  background-color: teal;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 400px;
`;
