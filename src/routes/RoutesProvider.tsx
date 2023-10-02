import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Auth from "@pages/Auth";
import Video from "@pages/Video";

import PageLayout from "@components/Layout/PageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Video />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </>
  )
);
const RoutesProvider = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvider;
