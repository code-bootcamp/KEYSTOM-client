import UploadFilePage from "../../commons/uploadFile";
import * as S from "./ReviewWrite.styles";
import { IReviewWritePresenter } from './ReviewWrite.types';
import { v4 as uuidv4 } from "uuid";


export default function ReviewWritePresenter(props:IReviewWritePresenter) {
    return (
        <S.Wrapper>
            <S.ReviewWrapper>
                <S.ReviewTextWrapper>리뷰 쓰기</S.ReviewTextWrapper>

                <S.ReviewProductWrapper>
                    <S.ReviewProductImage></S.ReviewProductImage>
                    <S.ReviewProductTitleOptionWrapper>
                        <S.ReviewProductTitle>
                            구매한 키보드 타이틀
                        </S.ReviewProductTitle>

                        <S.ReviewProductOptionWrapper>
                            <S.ReviewProductOption>
                                적용한 커스텀 옵션
                            </S.ReviewProductOption>
                            <S.VerticalLine></S.VerticalLine>
                            <S.ReviewProductOption>
                                적용한 커스텀 옵션
                            </S.ReviewProductOption>
                            <S.VerticalLine></S.VerticalLine>
                            <S.ReviewProductOption>
                                적용한 커스텀 옵션
                            </S.ReviewProductOption>
                        </S.ReviewProductOptionWrapper>
                    </S.ReviewProductTitleOptionWrapper>
                </S.ReviewProductWrapper>

                <S.ReviewTitleContentsWrapper>
                    <S.ReviewTitle>
                        <S.ReviewTitleInput 
                        onChange={props.onChangeReviewTitle}
                        placeholder="제목을 입력해 주세요."
                        />
                    </S.ReviewTitle>
                    <S.ReviewContents 
                    onChange={props.onChangeReviewContent}
                    placeholder="리뷰를 작성해주세요!"></S.ReviewContents>
                    <S.ReviewContentsMaxLength>
                        0/1000
                    </S.ReviewContentsMaxLength>
                </S.ReviewTitleContentsWrapper>

                <S.ReviewUploadWrapper>
                            <UploadFilePage
                            imageFile={props.imageFile}
                            setImageFile={props.setImageFile}
                            />
                   
                </S.ReviewUploadWrapper>

                <S.ReviewButtonWrapper>
                    <S.ReviewSubmitButton onClick={props.onClickSubmit}>작성하기</S.ReviewSubmitButton>
                    <S.ReviewCancelButton>작성취소</S.ReviewCancelButton>
                </S.ReviewButtonWrapper>
            </S.ReviewWrapper>
        </S.Wrapper>
    );
}
