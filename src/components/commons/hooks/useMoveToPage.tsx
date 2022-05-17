import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../store/index";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path); // 이동하기전 현재 페이지의 패스(경로) 지정
    router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
}
