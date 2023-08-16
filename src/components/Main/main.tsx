import * as S from "./styleMain.ts";
import { Link } from "react-router-dom";

const FishingPage = () => {
  return (
    <S.BackgroundStyle>
      <S.MainTittle>아무튼 낚시게임 </S.MainTittle>
      <S.ButtonLine>
        <S.GameButtonLink to="/fishing">
          <S.ButtonText>낚시터</S.ButtonText>
        </S.GameButtonLink>
        <S.BetweenBox></S.BetweenBox>
        <S.GameButtonLink to="/realEstate">
          <S.ButtonText>부동산</S.ButtonText>
        </S.GameButtonLink>
      </S.ButtonLine>
    </S.BackgroundStyle>
  );
};

export default FishingPage;
