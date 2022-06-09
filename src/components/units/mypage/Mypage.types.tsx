import { ChangeEvent, MouseEvent } from "react";

export interface IMypagePresenter {
  data: any;
  orderData: any;
  userHaveCouponData: any;
  baskets: any;
  isModalOpen: boolean;
  isModalTracking: boolean;
  isReview: boolean;

  onClickSeeCoupon: () => void;
  onClickTracking: () => void;
  handleOk: () => void;
  handleOk2: () => void;
  handleCancel: () => void;
  handleCancel2: () => void;
  onClickMoveToPayment: () => void;

  onClickDeleteBasket: (event: any) => void;
  moveToReviewWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  moveToProductDetail: (
    event: MouseEvent<HTMLImageElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  onClickTrackingSubmit: () => void;
  onChangeCode: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeInvoice: (event: ChangeEvent<HTMLInputElement>) => void;
  moveToCancel: (event: MouseEvent<HTMLInputElement>) => void;
}
