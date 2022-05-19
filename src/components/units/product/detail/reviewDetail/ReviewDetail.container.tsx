import ReviewDetailPresenter from "./ReviewDetail.presenter";
import { useQuery } from '@apollo/client';
import { FETCH_REVIEWS } from './ReviewDetail.queries';
import { useRouter } from 'next/router';


export default function ReviewDetail() {
  const router = useRouter()


  const {data} = useQuery(FETCH_REVIEWS,{
    variables:{
      page:1
    }
  })
  console.log(data)


  return <ReviewDetailPresenter
  data={data}
  />
}
