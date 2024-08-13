import Image from "next/image";
import React, { FC } from "react";

type Props = {
  containerStyles?: any;
  imgSrc?: any;
  imgStyles?: any;
};

const DevImg: FC<Props> = ({ containerStyles, imgSrc, imgStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image className={`${imgStyles}`} src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default DevImg;
