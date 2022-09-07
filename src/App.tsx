import Main from "./pages/main";
import Detail from "./pages/detail";
import tw from "tailwind-styled-components";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Layout>
  );
}

const Layout = tw.div`
bg-black
px-4
min-h-screen
`;
