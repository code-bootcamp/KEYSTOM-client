import { gql } from "@apollo/client";

export const PAYMENT = gql`
  mutation payment($createPaymentInput: CreatePaymentInput!) {
    payment(createPaymentInput: $createPaymentInput) {
      price
      impUid
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
        email
        name
        nickName
      }
    }
  }
`;
