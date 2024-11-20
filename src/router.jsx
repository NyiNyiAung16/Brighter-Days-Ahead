import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Goals from "./pages/Goals";
import Feelings from "./pages/Feelings";
import FeelingDetail from "./pages/FeelingDetail";
import Relaxation from "./pages/Relaxation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Memories from "./pages/Gallery";
import { RelaxationContextProvider } from "./contexts/relaxationContext";
import { FeelingContextProvider } from "./contexts/feelingContext";
import { GoalProvider } from "./contexts/goalContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import GuestRoutes from "./components/GuestRoutes";
import PatientRoutes from "./components/PatientRoutes";
import { GalleryProvider } from "./contexts/galleryContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <App />
      </ProtectedRoutes>
    ),
  },
  {
    path: "goals",
    element: (
      <ProtectedRoutes>
        <PatientRoutes>
          <GoalProvider>
            <Goals />
          </GoalProvider>
        </PatientRoutes>
      </ProtectedRoutes>
    ),
  },
  {
    path: "feelings",
    element: (
      <ProtectedRoutes>
        <FeelingContextProvider>
          <Feelings />
        </FeelingContextProvider>
      </ProtectedRoutes>
    ),
  },
  {
    path: "feelings/:id",
    element: (
      <ProtectedRoutes>
        <FeelingDetail />
      </ProtectedRoutes>
    ),
  },
  {
    path: "relaxation-corner",
    element: (
      <ProtectedRoutes>
        <RelaxationContextProvider>
          <Relaxation />
        </RelaxationContextProvider>
      </ProtectedRoutes>
    ),
  },
  {
    path: "memories",
    element: (
      <ProtectedRoutes>
        <GalleryProvider>
          <Memories />
        </GalleryProvider>
      </ProtectedRoutes>
    ),
  },
  {
    path: "login",
    element: (
      <GuestRoutes>
        
        <Login />
      </GuestRoutes>
    ),
  },
  {
    path: "register",
    element: (
      <GuestRoutes>
        
        <Register />
      </GuestRoutes>
    ),
  },
]);

export default router;
