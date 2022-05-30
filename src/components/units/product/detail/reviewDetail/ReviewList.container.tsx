import ReviewDetailPresenter from "./ReviewList.presenter";
import { useQuery } from '@apollo/client';
import { FETCH_REVIEWS } from './ReviewList.queries';
import { useRouter } from 'next/router';


export default function ReviewDetail() {
  const router = useRouter()

  // console.log("router", router)


  const {data} = useQuery(FETCH_REVIEWS,{
    variables:{
      page:1,
      productId:String(router.query.productId) 
    }
  })
  // console.log("review-data", data)


  return <ReviewDetailPresenter
  data={data}
  />
}
