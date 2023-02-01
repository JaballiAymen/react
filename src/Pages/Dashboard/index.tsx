// dashboard page import header and footer

import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import Main from "../../Layouts/Main";

const Dashboard: React.FC = () => {
  return (
    <div id="page-dashboard">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Dashboard;
