import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { gql, useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCTS } from "../../../product/list/ProductList.queries";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Modal } from "antd";

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
    const [description, setDescription] = useState("");
    const [newDescription, setNewDescription] = useState("");
    console.log("확인?", props.data);

    useEffect(() => {
        setDescription(props.data?.description);
        return;
    }, [description]);
    console.log("디스크립션?", description);

    useEffect(() => {
        if (description.indexOf("png)") !== -1) {
            setNewDescription(
                description.substring(description.indexOf("png)") + 5)
            );
            return;
        }
        if (description.indexOf("jpg)") !== -1) {
            setNewDescription(
                description.substring(description.indexOf("jpg)") + 5)
            );
            return;
        }
        if (description) setNewDescription(description);
        return;
    }, [newDescription]);

    return (
        <ContentDiv style={{ width: "100%", height: "auto" }}>
            <PostViewer data={props.data} />
            {/* {data?.fetchProduct.description} */}
            {description}
        </ContentDiv>
    );
}
