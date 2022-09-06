import tw from "tailwind-styled-components";

export default function Main() {
  return (
    <>
      <Title>푸드</Title>
      <RankText>🥗 샐러드 영양소 비율 랭킹</RankText>
    </>
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
`;
