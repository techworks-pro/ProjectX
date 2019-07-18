import React from 'react';
import Highlight from 'react-highlight-js';
// import '../../../../../node_modules/highlight.js/styles/atom-one-dark.css';

const sources = () => {
    return(
    <div>
        <Highlight >{"<p>Hello world</p>"}</Highlight>
        <Highlight language="javascript">
            {`function foo() { 
          let i = 0;
          return 'bar' 
          }`}
        </Highlight>

    </div>
        )
    };

export default sources;

