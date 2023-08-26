import { useRoutes } from "react-router-dom";
import { structureRoutes } from "../../routes";

const AppLayout = () => {
  const dynamicRoutes = useRoutes([...structureRoutes.routes]);

  return <div>{dynamicRoutes}</div>;
};

export default AppLayout;
