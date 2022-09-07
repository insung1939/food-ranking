import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components/dist/tailwind";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      <img
        src="/images/backBtn.png"
        alt="backBtn"
        className="h-full"
        onClick={() => navigate("/")}
      />
    </HeaderLayout>
  );
}

const HeaderLayout = tw.div`
h-[44px]
py-[10px]
`;
