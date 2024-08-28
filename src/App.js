import {Route, Routes} from "react-router-dom";
import WritePage from "./pages/write";
import styled from "styled-components";


function App() {
  return (
    <Wrapper>
      <Routes>
          <Route path="/write" element={<WritePage/>} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
    overflow-y: scroll;
    //-ms-overflow-style: none;
    //scrollbar-width: none;
`