import { MouseEvent, ChangeEvent } from "react";

export interface IPaymentPresenter {
  requestPayment: (event: MouseEvent<HTMLButtonElement>) => void;

  productData: any;
  couponData: any;
  couponDetailData: any;
  customData: any;
  userData: any;

  couponHandleOk: () => void;
  couponHandleCancel: () => void;

  onClickAvailableCoupon: (event: MouseEvent<HTMLDivElement>) => void;
  onClickCoupon: (event: MouseEvent<HTMLDivElement>) => void;

  isClickedModal: boolean;

  showModal: (event: MouseEvent<HTMLButtonElement>) => void;

  handleOk: () => void;
  handleCancel: () => void;

  handleComplete: (data: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeReceiverName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeReceiverPhone: (event: ChangeEvent<HTMLInputElement>) => void;

  isOpen: boolean;
  zipCode: string;
  address: string;
  isClickedCoupon: boolean;
}
