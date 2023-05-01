import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
export default function Tes() {
  const [aku, setAku] = useState("yayan");
  const a = [1, 2, 3];
  const codeString = ` {/* code syntax highlighter window here */}
  <div className="h-full w-1/2 flex flex-col justify-center items-center">
     {/* copy to clipboard here */}
     <SyntaxHighlighter language="" style={docco}>
         {/* pass in code here */}
     </SyntaxHighlighter>
  </div>`;

  return (
    <>
      <div className="h-full m-10 justify-center items-center">
        <SyntaxHighlighter language="" style={atomOneDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
