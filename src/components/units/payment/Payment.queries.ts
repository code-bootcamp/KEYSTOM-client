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

export const FETCH_ORDERS = gql`
  query fetchOrders {
    fetchOrders {
      id
      count
      price
      receiverName
      receiverPhone
      address {
        address
        addressDetail
        zipCode
      }

      user {
        email
        name
      }

      product {
        id
        title
        description
        price
      }
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
