import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

function PostViewer(props: any) {
    // console.log("뷰어", props);
    // console.log("viewer,", props.data?.fetchProduct.description);
    return (
        <>
            {props.data?.description ? (
                <Viewer initialValue={props.data?.description} />
            ) : (
                <></>
            )}
            {/* {props.data?.fetchProduct.description} */}
            {/* <Image src={`https://storage.googleapis.com/${props.fileUrl}`}/> */}
        </>
    );
}

export default PostViewer;
