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
      <Title>푸드</Title>
      <RankText>🥗 샐러드 영양소 비율 랭킹</RankText>
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
