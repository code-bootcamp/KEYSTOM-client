import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

function PostViewer(props: any) {
    return (
        <>
            {props.data?.description ? (
                <Viewer initialValue={props.data?.description} />
            ) : (
                <></>
            )}
        </>
    );
}

export default PostViewer;
