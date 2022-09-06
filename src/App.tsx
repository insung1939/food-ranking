import Main from "./pages/main";
import tw from "tailwind-styled-components";

export default function App() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

const Layout = tw.div`
bg-black
px-4
min-h-screen
`;
