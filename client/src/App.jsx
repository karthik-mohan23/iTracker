import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Home } from "./pages";
import { AddTask, ShowTasks } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/add-task",
    element: <AddTask />,
    children: [
      {
        path: "/show-tasks",
        element: <ShowTasks />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
};
export default App;
