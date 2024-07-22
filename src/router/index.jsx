import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import App from "../App";

import { Main, Home, Bills, Lids, Payments } from "../pages";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Home />} >
        <Route index element={<Lids />} />
        <Route path="/main/bills" element={<Bills />} />
        <Route path="/main/payment" element={<Payments />} />
        </Route>
    </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
