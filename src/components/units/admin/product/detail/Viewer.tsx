import {Viewer} from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'

function PostViewer(props:any){

  console.log("viewer,",props.data?.fetchProduct.description);
  return(
      <>
      <Viewer 
      initialValue={props.data?.fetchProduct.description || ""}/>
        {/* {props.data?.fetchProduct.description} */}

        {/* <Image src={`https://storage.googleapis.com/${props.fileUrl}`}/> */}
      
      </>
  )
}


export default PostViewer
