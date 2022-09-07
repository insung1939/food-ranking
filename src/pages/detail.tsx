import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import tw from "tailwind-styled-components";
import { ISaladData } from "../Types/saladData";

export default function Detail() {
  const location = useLocation();
  const saladData = location.state as ISaladData;
  console.log(saladData.bigImgUrl);

  return (
    <>
      <Header />
      <SaladImgBg>
        <div
          style={{
            backgroundImage: `url(${saladData.bigImgUrl})`,
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(12, 15, 15, 0) 0%, rgba(12, 15, 15, 0.9) 100%)",
              height: "150px",
              width: "100%",
              position: "absolute",
              bottom: "0",
              padding: "40px 16px 16px",
            }}
          >
            <SaladName>{saladData.name}</SaladName>
            <SaladCompany>{saladData.company}</SaladCompany>
            <SaladPrice>{saladData.price}원</SaladPrice>
          </div>
        </div>
      </SaladImgBg>
    </>
  );
}

const SaladImgBg = tw.div`
h-[343px]
mt-[16px]
mb-[40px]
`;

const SaladName = tw.h1`
text-white
font-bold
text-2xl
mb-[4px]
`;

const SaladCompany = tw.span`
mr-[12px]
text-white
font-normal
text-sm
`;

const SaladPrice = tw.span`
text-white
font-bold
text-sm
`;
