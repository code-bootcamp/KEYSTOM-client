import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";

const PostViewer = dynamic(() => import("../detail/Viewer"), { ssr: false });

const ContentDiv = styled.div`
    border-radius: 10px;
    width: 800px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    padding-left: 20px;
    margin-left: 20px;
    background-color: #1b1b1b;
    ::placeholder {
        color: #666;
    }
`;

export default function AdminDescriptionPage(props: any) {
    const [newDescription, setNewDescription] = useState(null);

    useEffect(() => {
        if (props.data?.description.indexOf("png)") !== -1) {
            setNewDescription(
                props.data?.description.substring(
                    props.data?.description.indexOf("png)") + 5
                )
            );
            return;
        }
        if (props.data?.description.indexOf("jpg)") !== -1) {
            setNewDescription(
                props.data?.description.substring(
                    props.data?.description.indexOf("jpg)") + 5
                )
            );
            return;
        }
        if (props.data?.description) setNewDescription(props.data?.description);

    }, [props.data?.description]);


    return (
        <ContentDiv style={{ width: "100%", height: "auto" }}>
            <PostViewer data={props.data} />
            {newDescription}
        </ContentDiv>
    );
}
