import { createBrowserRouter } from "react-router-dom";
import UsersPage, { usersLoader } from "./pages/UsersPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/root";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/users",
                element: <UsersPage />,
                loader: usersLoader,
            },
        ]
    }
]);