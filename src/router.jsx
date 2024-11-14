import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Goals from "./pages/Goals";
import Feelings from "./pages/Feelings";
import FeelingDetail from "./pages/FeelingDetail";
import Relaxation from "./pages/Relaxation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Memories from "./pages/Gallery";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "goals",
      element: <Goals />,
    },
    {
      path: "feelings",
      element: <Feelings />,
    },
    {
      path: "feelings/:id",
      element: <FeelingDetail />,
    },
    {
      path: "relaxation-corner",
      element: <Relaxation />,
    },
    {
      path: "memories",
      element: <Memories/>
    },
    {
      path: 'login',
      element: <Login/>
    },
    {
      path: 'register',
      element: <Register/>
    }
  ]
);

export default router;
