import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
    width: 15%;
    height: 100%;
    color: #f1f1f1;
    padding: 100px 30px;
    border-right: 0.5px solid #999;
`;

const Title = styled.div`
    color: #888;
    padding-bottom: 10px;
`;

const AdminMenu = styled.div`
    font-size: 20px;
    padding-top: 20px;

    cursor: pointer;
    :hover {
        color: #b150f2;
    }
`;

const AdminMenu2 = styled.div`
    font-size: 16px;
    padding-top: 20px;
    padding-left: 20px;
    cursor: pointer;
    :hover {
        color: #b150f2;
    }
`;

export default function LayoutAdminSideBar() {
    const router = useRouter();

    const moveToAdminProduct = () => {
        router.push("/admin/product");
    };

    const moveToWriteProduct = () => {
        router.push("/admin/product/write");
    };

    const moveToAdminUser = () => {
        router.push("/admin/user");
    };

    return (
        <>
            <Wrapper>
                <Title>Admin Menu</Title>
                <AdminMenu onClick={moveToAdminProduct}>Product</AdminMenu>
                <AdminMenu2 onClick={moveToWriteProduct}>
                    new Product
                </AdminMenu2>

                <AdminMenu onClick={moveToAdminUser}>User</AdminMenu>
            </Wrapper>
        </>
    );
}
