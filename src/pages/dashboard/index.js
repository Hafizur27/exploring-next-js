import React from "react";
import DashboardLayout from "../../../components/DashboardLayout/DashboardLayout";

const Dashboard = () => {
  return (
    <div>
      <h1>DashboardLayout</h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
