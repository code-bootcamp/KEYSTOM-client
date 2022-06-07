import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const ListItemContents = styled.div`
    font-size: 14px;
    line-height: 20px;
    text-align: center;
`;

export default function DescriptionPage(props: any) {
    const [newDescription, setNewDescription] = useState("");

    useEffect(() => {
        if (props.el.description.indexOf("png)") !== -1) {
            setNewDescription(
                props.el.description.substring(
                    props.el.description.indexOf("png)") + 5
                )
            );
            return;
        }
        if (props.el.description.indexOf("jpg)") !== -1) {
            setNewDescription(
                props.el.description.substring(
                    props.el.description.indexOf("jpg)") + 5
                )
            );
            return;
        }
        if (props.el.description) setNewDescription(props.el.description);

    }, [newDescription]);

    return <ListItemContents>{newDescription}</ListItemContents>;
}
