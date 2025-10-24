
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
      <>
      <h1>Client Layout <Outlet/> </h1>
      </>
  );
};

export default ClientLayout;