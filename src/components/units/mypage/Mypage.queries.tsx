import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      address
      addressDetail
      zipCode
      user {
        email
        name
        nickName
        profileImage
      }
    }
  }
`;

export const FETCH_ORDERS = gql`
  query fetchOrders {
    fetchOrders {
      id
      price
      product {
        id
        title
        thumbnail
      }
      createdAt
      isReview
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
