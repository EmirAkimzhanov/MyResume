import ContentBox1 from "./components/ContentBox1";
import ContentBox2 from "./components/ContentBox2";
import ContentBox3 from "./components/ContentBox3";
import "react-slideshow-image/dist/styles.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <Header setOpen={setOpen} open={open} />
      <ContentBox1 open={open} />
      <ContentBox2 />
      <ContentBox3 />
    </>
  );
}

export default App;
