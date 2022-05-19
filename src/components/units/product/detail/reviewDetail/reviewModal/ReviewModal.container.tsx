import { useMutation } from "@apollo/client"
import { useState } from "react"
import ReviewModalPresenter from "./ReviewModal.presenter"
import {FETCH_COMMENTS} from './ReviewModal.queries'
import { useQuery } from "@apollo/client"

export default function ReviewModalContainer(){

    const {data} = useQuery(FETCH_COMMENTS)
    console.log(data)


// 리뷰 모달
const [isOpen, setIsOpen] = useState(true)

const showModal = () => {
    setIsOpen(true)
}

const handleOK = () => {
    setIsOpen(false)
}

const handleCancel = () => {
    setIsOpen(false)
}

    
    return<ReviewModalPresenter
    isOpen={isOpen}
    showModal={showModal}
    handleOK={handleOK}
    handleCancel={handleCancel}
    data={data}
    />
}