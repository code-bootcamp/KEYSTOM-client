import { Page, PageWrapper } from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <PageWrapper>
      <Page onClick={props.onClickPrevPage}>이전페이지</Page>
      {/* 1로 채운 배열 10개 생성 후 map 메서드 사용 */}
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>다음페이지</Page>
    </PageWrapper>
  );
}
