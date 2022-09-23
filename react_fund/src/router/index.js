import About from "../components/UI/pages/About";
import Login from "../components/UI/pages/Login";
import PostIdPage from "../components/UI/pages/PostIdPage";
import Posts from "../components/UI/pages/Posts";

export const publicRoutes = [
    {key: 4,path: '/login', component: Login, exact: true}
]

export const privateRoutes = [
    {key: 1,path: '/about', component: About, exact: true},
    {key: 2,path: '/posts', component: Posts, exact: true},
    {key: 3,path: '/posts/:id', component: PostIdPage, exact: true},
]

