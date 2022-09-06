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
    <div className="mb-2">
      <SaladImg>
        <GradeBoxStyle className={showGradeBg(saladDetail.grade)}>
          {saladDetail.grade}
        </GradeBoxStyle>
        <img src={saladDetail.imgUrl} alt="saladImg" className="h-full" />
      </SaladImg>
    </div>
  );
}

const SaladImg = tw.div`
h-[96px]
flex
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
