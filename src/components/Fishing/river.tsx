import React, { useState } from "react";
import * as S from "./styleRiver";

export default () => {
  const [test, setTest] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <S.RiverBackground>
      <S.InventoryBoxes>
        {test.map((t) => {
          return <S.InventoryBox>{t}</S.InventoryBox>;
        })}
      </S.InventoryBoxes>
    </S.RiverBackground>
  );
};
