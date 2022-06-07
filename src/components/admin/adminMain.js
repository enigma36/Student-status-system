import React from "react";
import AdminGETall from "./adminGETall";

import PostAdminForm from "./postAdminForm";
import AdminDeleteByID from "./adminDeleteByID";
import AdminGETbyID from "./adminGETbyID";
import UpdateAdmin from "./adminUPDATE";


function AdminMain() {
  return (
    <>
      <AdminGETall />
      <PostAdminForm />
      <AdminDeleteByID /> <br/>
      <AdminGETbyID />
      <UpdateAdmin />
    </>
  );
}

export default AdminMain;
