import React, { useEffect, useState } from "react";
import * as S from "./styleMain.ts";
import dayjs from "dayjs";
import "dayjs/locale/ko"; //한국어
import { Link } from "react-router-dom";

const FishingPage = () => {
  dayjs.locale("ko");
  const [nowTime, setNowTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setNowTime(dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss dddd"));
    }, 1000);
  }, []);

  console.log(nowTime);
  return (
    <S.BackgroundStyle>
      <S.MainTittle>아무튼 낚시게임 </S.MainTittle>
      <S.ButtonLine>
        <S.GameButtonLink to="/fishing">
          <S.ButtonText>낚시터</S.ButtonText>
        </S.GameButtonLink>
        <S.TimeBox>지금 시간{nowTime}</S.TimeBox>
        <S.BetweenBox></S.BetweenBox>
        <S.GameButtonLink to="/realEstate">
          <S.ButtonText>부동산</S.ButtonText>
        </S.GameButtonLink>
      </S.ButtonLine>
    </S.BackgroundStyle>
  );
};

export default FishingPage;
