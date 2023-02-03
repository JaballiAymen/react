import React from "react";
import PersonList from "../../Services/Api";

const Dashboard: React.FC = () => {

  

  return (
    <div id="page-dashboard">
      <h1> Dashboard </h1>
      <PersonList />
    </div>
  );
};

export default Dashboard;
