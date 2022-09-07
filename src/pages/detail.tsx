import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import tw from "tailwind-styled-components";
import { ISaladData } from "../Types/saladData";
import { IStandard } from "../Types/standard";
import { useEffect } from "react";

export default function Detail() {
  const standard: IStandard = {
    carbohydratePer: 50,
    proteinPer: 20,
    fatPer: 30,
    totalCalorie: 2000,
    totalCarbohydrate: 328,
    totalProtein: 55,
    totalFat: 50,
    totalSodium: 2000,
  };
  const location = useLocation();
  const saladData = location.state as ISaladData;
  const calPercentDiff = (percent: string, standard: number) => {
    const diff = parseInt(percent) - standard;
    if (diff > 0) {
      return "+" + diff;
    } else {
      return "-" + Math.abs(diff);
    }
  };

  const carbohydrateChange = calPercentDiff(
    saladData.carbohydratePer,
    standard.carbohydratePer
  );
  const proteinChange = calPercentDiff(
    saladData.proteinPer,
    standard.proteinPer
  );
  const fatChange = calPercentDiff(saladData.fatPer, standard.fatPer);

  const showGradeBg = (grade: string) => {
    switch (grade) {
      case "A+":
        return "bg-green";
      case "A":
        return "bg-yellowGreen";
      case "A-":
        return "bg-boldYellow";
      case "B+":
        return "bg-yellow";
      case "B":
        return "bg-orange";
      case "B-":
        return "bg-boldOrange";
      case "C":
        return "bg-red";
      default:
        break;
    }
  };

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
      <TitleStyle>영양소 비율</TitleStyle>
      <InfoStyle>
        전문가들이 권장하는 탄수화물 5 : 단백질 2 : 지방3 비율을 기준으로
        A~C까지의 등급으로 표기하였습니다.
      </InfoStyle>
      <NutrientGrid>
        <GradeInfoBox className={showGradeBg(saladData.grade)}>
          <GradeTextStyle>{saladData.grade}</GradeTextStyle>
          <BottomTextStyle>영양소 비율 등급</BottomTextStyle>
        </GradeInfoBox>
        <InfoBox className="h-[140px]">
          <PercentTextStyle>{saladData.carbohydratePer}</PercentTextStyle>
          <SmallTextStyle>적정 비율 50%</SmallTextStyle>
          <PercentDiff
            className={
              carbohydrateChange[0] === "+" ? "text-red" : "text-green"
            }
          >
            {carbohydrateChange}%
          </PercentDiff>
          <BottomTextStyle>탄수화물</BottomTextStyle>
        </InfoBox>
        <InfoBox className="h-[140px]">
          <PercentTextStyle>{saladData.proteinPer}</PercentTextStyle>
          <SmallTextStyle>적정 비율 20%</SmallTextStyle>
          <PercentDiff
            className={proteinChange[0] === "+" ? "text-red" : "text-green"}
          >
            {proteinChange}%
          </PercentDiff>
          <BottomTextStyle>단백질</BottomTextStyle>
        </InfoBox>
        <InfoBox className="h-[140px]">
          <PercentTextStyle>{saladData.fatPer}</PercentTextStyle>
          <SmallTextStyle>적정 비율 30%</SmallTextStyle>
          <PercentDiff
            className={fatChange[0] === "+" ? "text-red" : "text-green"}
          >
            {fatChange}%
          </PercentDiff>
          <BottomTextStyle>지방</BottomTextStyle>
        </InfoBox>
      </NutrientGrid>
      <TitleStyle>칼로리 정보</TitleStyle>
      <InfoStyle>하루 2000칼로리의 식단을 기준으로 합니다.</InfoStyle>
      <InfoBox className="h-[78px] mt-[16px]"></InfoBox>
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

const TitleStyle = tw.h2`
text-white
font-bold
text-xl
pb-[8px]
border-b-[1px]
border-solid
border-borderColor
`;

const InfoStyle = tw.p`
mt-[8px]
text-lightGray
font-normal
text-sm
`;

const NutrientGrid = tw.div`
grid
grid-cols-2
grid-rows-2
gap-[16px]
pt-[8px]
pb-[40px]
`;

const GradeInfoBox = tw.div`
rounded-md
p-[16px]
h-[140px]
`;

const InfoBox = tw.div`
rounded-md
p-[16px]
bg-boxBgColor
relative
`;

const GradeTextStyle = tw.span`
font-bold
text-white
text-[40px]
`;

const PercentTextStyle = tw.span`
font-bold
text-white
text-[30px]
`;

const PercentDiff = tw.span`
font-bold
text-lg
absolute
right-[16px]
top-[16px]
`;

const SmallTextStyle = tw.p`
font-normal
text-lightGray
text-xs
`;

const BottomTextStyle = tw.p`
font-normal
text-white
text-sm
mt-[30px]
`;
