import React from "react";
import { AdminWrapper, AdminNav } from "./Admin-styled";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <AdminWrapper>
        <div>
          <AdminNav>
            <Link to="../../orderlist" style={{ textDecoration: "none" }}>
              주문 관리
            </Link>
          </AdminNav>

          <AdminNav>
            <Link to="/admin/category/manage" style={{ textDecoration: "none" }}>
              카테고리 관리
            </Link>
          </AdminNav>

          <AdminNav>
            <Link to="../../productlist" style={{ textDecoration: "none" }}>
              상품 내역
            </Link>
          </AdminNav>

          <AdminNav>
            <Link to="../../productadd" style={{ textDecoration: "none" }}>
              상품 추가
            </Link>
          </AdminNav>
        </div>
      </AdminWrapper>
    </>
  );
};

export default Admin;
