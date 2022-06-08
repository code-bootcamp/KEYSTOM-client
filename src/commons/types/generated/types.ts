export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IUser = {
    __typename?: 'User';
    email: Scalars['String'];
    isAdmin: Scalars['Boolean'];
    name: Scalars['String'];
    nickName: Scalars['String'];
    profileImage: Scalars['String'];
  };
  
  export type IProduct = {
    __typename?: 'Product';
    createdAt: Scalars['DateTime'];
    deletedAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['String'];
    price: Scalars['Int'];
    productTags: Array<IProductTag>;
    thumbnail: Scalars['String'];
    title: Scalars['String'];
  };

  export type IProductTag = {
    __typename?: 'ProductTag';
    id: Scalars['String'];
    products: Array<IProduct>;
    tag: Scalars['String'];
  };

export type IAddress = {
  __typename?: 'Address';
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  id: Scalars['String'];
  user: IUser;
  zipCode: Scalars['String'];
};

export type IComment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  parentId?: Maybe<Scalars['String']>;
  user: IUser;
};

export type ICoupon = {
  __typename?: 'Coupon';
  couponName: Scalars['String'];
  discountPrice: Scalars['Int'];
  id: Scalars['String'];
};

export type ICreateAddressInput = {
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  zipCode: Scalars['String'];
};

export type ICreateCommentInput = {
  content: Scalars['String'];
  reviewId: Scalars['String'];
};

export type ICreateCouponInput = {
  couponName: Scalars['String'];
  discountPrice: Scalars['Int'];
};

export type ICreateCustomInput = {
  enter: Scalars['Int'];
  esc: Scalars['Int'];
  productId: Scalars['String'];
  rest: Scalars['Int'];
  space: Scalars['Int'];
};

export type ICreateOrderInput = {
  count: Scalars['Int'];
  price: Scalars['Int'];
  productId: Scalars['String'];
  receiverName: Scalars['String'];
  receiverPhone: Scalars['String'];
};

export type ICreateProductInput = {
  description: Scalars['String'];
  imageUrls?: InputMaybe<Array<Scalars['String']>>;
  price: Scalars['Int'];
  productTags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type ICreateReviewInput = {
  description: Scalars['String'];
  imageUrls?: InputMaybe<Array<Scalars['String']>>;
  orderId: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateUserCouponInput = {
  couponId: Scalars['String'];
  email: Scalars['String'];
};

export type ICreateUserInput = {
  address: ICreateAddressInput;
  email: Scalars['String'];
  name: Scalars['String'];
  nickName: Scalars['String'];
  password: Scalars['String'];
};

export type ICustom = {
  __typename?: 'Custom';
  enter: Scalars['Int'];
  esc: Scalars['Int'];
  id: Scalars['String'];
  product: IProduct;
  rest: Scalars['Int'];
  space: Scalars['Int'];
};




export type IMutationCheckEmailArgs = {
  email: Scalars['String'];
};


export type IMutationCheckTokenArgs = {
  token: Scalars['String'];
};


export type IMutationCreateAddressArgs = {
  createAddressInput: ICreateAddressInput;
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateCouponArgs = {
  createCouponInput: ICreateCouponInput;
};


export type IMutationCreateCustomArgs = {
  createCustomInput: ICreateCustomInput;
};


export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
};


export type IMutationCreateReCommentArgs = {
  commentId: Scalars['Float'];
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateReviewArgs = {
  createReviewInput: ICreateReviewInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationCreateUserCouponArgs = {
  createUserCouponInput: ICreateUserCouponInput;
};


export type IMutationDeleteAddressArgs = {
  addressId: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['Float'];
};


export type IMutationDeleteCouponArgs = {
  couponId: Scalars['String'];
};


export type IMutationDeleteProductArgs = {
  productId: Scalars['String'];
};


export type IMutationDeleteReviewArgs = {
  reviewId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
};


export type IMutationLikeUpArgs = {
  reviewId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationPaymentArgs = {
  createAddressInput: ICreateAddressInput;
  createOrderInput: ICreateOrderInput;
  impUid: Scalars['String'];
  price: Scalars['Float'];
};


export type IMutationRefundArgs = {
  createAddressInput: ICreateAddressInput;
  createOrderInput: ICreateOrderInput;
  impUid: Scalars['String'];
  paymentId: Scalars['String'];
};


export type IMutationSendTokenArgs = {
  phone: Scalars['String'];
};


export type IMutationUpdateAddressArgs = {
  createAddressInput: ICreateAddressInput;
};


export type IMutationUpdateProductArgs = {
  createProductInput: ICreateProductInput;
  productId: Scalars['String'];
};




export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUseCouponArgs = {
  couponId: Scalars['String'];
};

export type IOrder = {
  __typename?: 'Order';
  address: IAddress;
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isReview: Scalars['Boolean'];
  price: Scalars['Int'];
  product: IProduct;
  receiverName: Scalars['String'];
  receiverPhone: Scalars['String'];
  user: Scalars['String'];
};

export enum IPayment_Status_Enum {
  'CANCEL',
  'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  order: Scalars['String'];
  price: Scalars['Int'];
  status: IPayment_Status_Enum;
  user: Scalars['String'];
};



export type IProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['String'];
  isThumbnail: Scalars['Boolean'];
  url: Scalars['String'];
};




export type IQueryFetchCommentArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchCouponArgs = {
  couponId: Scalars['String'];
};


export type IQueryFetchCustomArgs = {
  productId: Scalars['String'];
};


export type IQueryFetchOrderArgs = {
  orderId: Scalars['String'];
};


export type IQueryFetchOrdersArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchProductArgs = {
  productId: Scalars['String'];
};


export type IQueryFetchProductImagesArgs = {
  productId: Scalars['String'];
};


export type IQueryFetchProductsArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchReCommentsArgs = {
  commentId: Scalars['Float'];
  reviewId: Scalars['String'];
};


export type IQueryFetchReviewArgs = {
  reviewId: Scalars['String'];
};


export type IQueryFetchReviewCommentsArgs = {
  reviewId: Scalars['String'];
};


export type IQueryFetchReviewImagesArgs = {
  reviewId: Scalars['String'];
};


export type IQueryFetchReviewsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  productId: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};


export type IQueryFetchUserCommentsArgs = {
  email: Scalars['String'];
};


export type IQueryFetchUserReviewArgs = {
  email: Scalars['String'];
};

export type IReview = {
  __typename?: 'Review';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  like: Scalars['Int'];
  order: IOrder;
  product: IProduct;
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  user: IUser;
};

export type IReviewImage = {
  __typename?: 'ReviewImage';
  id: Scalars['String'];
  isThumbnail: Scalars['Boolean'];
  url: Scalars['String'];
};

export type IUpdateReviewInput = {
  description: Scalars['String'];
  imageUrls?: InputMaybe<Array<Scalars['String']>>;
  reviewId: Scalars['String'];
  title: Scalars['String'];
};

export type IUpdateUserInput = {
  name: Scalars['String'];
  nickName: Scalars['String'];
};


export type IUserCoupon = {
  __typename?: 'UserCoupon';
  coupon: ICoupon;
  createdAt: Scalars['DateTime'];
  email: IUser;
  id: Scalars['String'];
  isEvent: Scalars['Boolean'];
};

export type IMutation = {
    __typename?: 'Mutation';
    checkEmail: Scalars['String'];
    checkToken: Scalars['String'];
    createAddress: IAddress;
    createComment: IComment;
    createCoupon: ICoupon;
    createCustom: ICustom;
    createEventCoupon: IUserCoupon;
    createProduct: IProduct;
    createReComment: IComment;
    createReview: IReview;
    createUser: IUser;
    createUserCoupon: IUserCoupon;
    deleteAddress: Scalars['String'];
    deleteComment: Scalars['String'];
    deleteCoupon: Scalars['String'];
    deleteProduct: Scalars['String'];
    deleteReview: Scalars['String'];
    deleteUser: Scalars['String'];
    likeUp: Scalars['Int'];
    login: Scalars['String'];
    logout: Scalars['String'];
    payment: IPayment;
    refund: IPayment;
    restoreAccessToken: Scalars['String'];
    sendToken: Scalars['String'];
    updateAddress: IAddress;
    updateProduct: IProduct;
    updateReview: IReview;
    updateUser: IUser;
    uploadFile: Array<Scalars['String']>;
    useCoupon: Scalars['String'];
  };

  export type IQuery = {
    __typename?: 'Query';
    fetchAddresses: Array<IAddress>;
    fetchBestReview: Array<IReview>;
    fetchComment: IComment;
    fetchComments: Array<IComment>;
    fetchCoupon: ICoupon;
    fetchCoupons: Array<ICoupon>;
    fetchCustom: ICustom;
    fetchCustoms: Array<ICustom>;
    fetchOrder: IOrder;
    fetchOrders: Array<IOrder>;
    fetchProduct: IProduct;
    fetchProductImages: Array<IProductImage>;
    fetchProductRowCount: Scalars['Int'];
    fetchProducts: Array<IProduct>;
    fetchReComments: Array<IComment>;
    fetchReview: IReview;
    fetchReviewComments: Array<IComment>;
    fetchReviewImages: Array<IReviewImage>;
    fetchReviewRowCount: Scalars['Int'];
    fetchReviews: Array<IReview>;
    fetchUser: IUser;
    fetchUserAddress: IAddress;
    fetchUserComments: Array<IComment>;
    fetchUserHaveCoupons: Array<IUserCoupon>;
    fetchUserLoggedIn: IAddress;
    fetchUserReview: Array<IReview>;
    fetchUsers: Array<IUser>;
  };
  

  export type IMutationUpdateReviewArgs = {
    updateReviewInput: IUpdateReviewInput;
  };
  
  
  export type IMutationUpdateUserArgs = {
    email: Scalars['String'];
    updateUserInput: IUpdateUserInput;
  };
  