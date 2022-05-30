import { gql } from "@apollo/client";

export const PAYMENT = gql`
  mutation payment(
    $price: Float!
    $impUid: String!
    $createAddressInput: CreateAddressInput!
    $createOrderInput: CreateOrderInput!
  ) {
    payment(
      price: $price
      impUid: $impUid
      createAddressInput: $createAddressInput
      createOrderInput: $createOrderInput
    ) {
      price
      order
      user
      createdAt
    }
  }
`;

export const FETCH_USER = gql`
  query fetchUser($email: String!) {
    fetchUser(email: $email) {
      nickName
      email
      name
      address
    }
  }
`;

export const FETCH_USER_HAVE_COUPONS = gql`
  query fetchUserHaveCoupons {
    fetchUserHaveCoupons {
      id
      email {
        email
        name
        nickName
      }
      coupon {
        id
        discountPrice
        couponName
      }
      createdAt
    }
  }
`;

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      id
      title
      price
      thumbnail
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      address
      addressDetail
      zipCode
      user {
        name
        nickName
      }
    }
  }
`;

export const FETCH_CUSTOM = gql`
  query fetchCustom($productId: String!) {
    fetchCustom(productId: $productId) {
      id
      space
      enter
      esc
      rest
    }
  }
`;

export const FETCH_COUPON = gql`
  query fetchCoupon($couponId: String!) {
    fetchCoupon(couponId: $couponId) {
      id
      discountPrice
      couponName
    }
  }
`;

export const DELTETE_COUPON = gql`
  mutation deleteCoupon($couponId: String!) {
    deleteCoupon(couponId: $couponId)
  }
`;
