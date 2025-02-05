import { createBrowserRouter } from "react-router-dom";
import UsersPage, { usersLoader } from "./pages/UsersPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/root";
import UserDetailsPage, { userDetailLoader } from "./pages/UserDetailsPage"
import UserPost from "./pages/UserPost";

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
            {
                path: "/users/:id",
                element: <UserDetailsPage />,
                loader: userDetailLoader,    
            },
            {
                path: "/users/:userId/posts/:postId",
                element: <UserPost />,
                
            }
        ]
    }
]);