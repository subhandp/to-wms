// import User from "@/components/User"
// import Home from "@/components/Home";
import Posts from './views/Page.vue'
import Photos from './views/Photo.vue'
import Home from './views/Home.vue'
import Album from './views/Album.vue'




const routes = [
    { path: "/", component: Home },
    {
        path: "/posts",
        component: Posts,
        name: "postsindex",
        children: [{
            path: "/posts/page/:id",
            component: Posts
        }]
    },
    {
        path: "/photos",
        component: Photos,
        name: "photosindex",
        children: [{
            path: "/photos/page/:id",
            component: Photos
        }]
    },
    {
        path: "/albums",
        component: Album,
        name: "albumsindex",
        children: [{
            path: "/albums/page/:id",
            component: Album
        }]
    }
    // {
    //   path: "/user",
    //   component: UserIndex,
    //   name: "userIndex",
    //   children: [
    //     {
    //       path: "",
    //       component: UserList,
    //     },
    //     {
    //       path: "detail/:id",
    //       component: UserDetail,
    //       name: "userDetail",
    //     },
    //   ],
    // },
    //   { path: "/user/:id", component: UserDetail },
];

export default routes;