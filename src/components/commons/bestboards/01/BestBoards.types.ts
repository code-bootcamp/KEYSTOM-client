import { MouseEvent } from "react";

export interface IBestBoards01UIProps {
  bestBoards?: any;
  onClickBestBoard: (event: MouseEvent<HTMLDivElement>) => void;
}
