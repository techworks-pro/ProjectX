import React from "react";
import Highlight from "react-highlight-js";
// import '../../../../../node_modules/highlight.js/styles/atom-one-dark.css';

const sources = () => {
  return (
    <>
      <Highlight>{"<p>Hello world</p>"}</Highlight>
      <Highlight language="javascript">
        {`function foo() { 
          let i = 0;
          return 'bar' 
          }`}
      </Highlight>
    </>
  );
};

export default sources;
