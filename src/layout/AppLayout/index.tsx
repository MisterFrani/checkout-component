import { useRoutes } from "react-router-dom";
import { structureRoutes } from "../../routes";

const AppLayout = () => {
  const dynamicRoutes = useRoutes([...structureRoutes.routes]);

  return (
    <div>
      <header> </header>
      <main> {dynamicRoutes} </main>
      <footer> </footer>
    </div>
  );
};

export default AppLayout;
