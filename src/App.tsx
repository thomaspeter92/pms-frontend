import GlobalStyles from "./core/GlobalStyles";
import NormaliseCss from "./core/NormaliseCss";
import Router from "./core/Router";

// We're importing .css because @font-face in styled-components causes font files
// to be constantly re-requested from the server (which causes screen flicker)
// https://github.com/styled-components/styled-components/issues/1593
import "./core/fonts.css";

function App() {
  return (
    <>
      <NormaliseCss />
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
