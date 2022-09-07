import { ISaladData } from "../Types/saladData";
import tw from "tailwind-styled-components";

type SaladProps = {
  saladDetail: ISaladData;
};

export default function SaladInfo({ saladDetail }: SaladProps) {
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
    <div className="mb-2 flex flex-auto">
      <SaladImg>
        <GradeBoxStyle className={showGradeBg(saladDetail.grade)}>
          {saladDetail.grade}
        </GradeBoxStyle>
        <img
          src={saladDetail.imgUrl}
          alt="saladImg"
          className="object-contain h-full min-w-[25%]"
        />
      </SaladImg>
      <div className="w-1/2">
        <SaladCompany>{saladDetail.company}</SaladCompany>
        <SaladName>{saladDetail.name}</SaladName>
      </div>
    </div>
  );
}

const SaladImg = tw.div`
h-[96px]
flex
mr-[12px]
w-3/8
`;

const GradeBoxStyle = tw.div`
text-white
text-lg
font-bold
min-w-[33px]
h-full
rounded-l-[10px]
flex
justify-center
items-center
`;

const SaladCompany = tw.h6`
mb-[2px]
text-lightGray
text-sm
font-normal
`;
const SaladName = tw.p`
font-normal
text-white
text-base
`;
