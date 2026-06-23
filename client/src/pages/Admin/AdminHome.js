import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
           The Blood Bank Management System is designed to simplify and improve blood bank operations through a digital platform. 
            It helps manage donor information, blood inventory, hospitals, and organizations efficiently.
            The system maintains accurate records of blood donations and requests. 
            It allows quick tracking of available blood groups and stock levels. 
            The platform reduces manual paperwork and improves data management. 
            Administrators can monitor all activities from a centralized dashboard. 
            The system ensures better coordination between donors and healthcare organizations.
            It also helps in maintaining transparency and reliability in blood management.
            Built using the MERN Stack, the application provides a secure and user-friendly experience. 
            This project demonstrates the use of modern web technologies to solve real-world healthcare management challenges.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
