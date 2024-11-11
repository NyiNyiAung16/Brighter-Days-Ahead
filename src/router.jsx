import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Goals from "./pages/Goals";
import Feelings from "./pages/Feelings";
import FeelingDetail from "./pages/FeelingDetail";

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
  ]
);

export default router;
