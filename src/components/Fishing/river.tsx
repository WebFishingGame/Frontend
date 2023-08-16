import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko"; //한국어
import * as S from "./styleRiver";

export default () => {
  dayjs.locale("ko");
  const [test, setTest] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let time = dayjs();
  console.log("요일 : ", dayjs(new Date()).format("dddd"));
  return (
    <S.RiverBackground>
      <S.InventoryBoxes>
        {test.map((t) => {
          return <S.InventoryBox>{t}</S.InventoryBox>;
        })}
      </S.InventoryBoxes>
      <div></div>
    </S.RiverBackground>
  );
};
