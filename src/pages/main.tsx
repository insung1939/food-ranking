import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import data from "../data.json";
import { ISaladData } from "../Types/saladData";
import SaladInfo from "../components/SaladInfo";
import { Link } from "react-router-dom";

export default function Main() {
  const [saladData, setSaladData] = useState<ISaladData[]>();
  useEffect(() => {
    setSaladData(data as ISaladData[]);
  }, []);
  return (
    <div className="pb-[50px]">
      <Title>νΈλ</Title>
      <RankText>π₯ μλ¬λ μμμ λΉμ¨ λ­νΉ</RankText>
      {saladData?.map((salad, index) => (
        <Link to="/detail" state={salad} key={index}>
          <SaladInfo saladDetail={salad} />
        </Link>
      ))}
    </div>
  );
}

const Title = tw.div`
pt-11
pb-[17px]
text-white
font-bold
text-2xl
`;

const RankText = tw.div`
text-white
font-bold
text-lg
mb-6
`;
