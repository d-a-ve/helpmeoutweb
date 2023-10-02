import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Auth from "@pages/Auth";
import Dashboard from "@pages/Dashboard";
import Video from "@pages/Video";

import PageLayout from "@components/Layout/PageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PageLayout />}>
        <Route path="/videos/:videoId" element={<Video />} />
      </Route>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard/my-videos" element={<Dashboard />} />
    </>
  )
);
const RoutesProvider = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvider;
