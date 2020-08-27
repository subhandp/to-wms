// import User from "@/components/User"
// import Home from "@/components/Home";
// // import Posts from './views/Page.vue'
// import Photos from './views/Photo.vue'
// import Home from './views/Home.vue'
// import Album from './views/Album.vue'
// import Paginate from './components/Paginate'



const routes = [{
        path: "/dashboard",
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "posts" */ './views/Home.vue')
    },
    {
        path: "/posts",
        component: () =>
            import ( /* webpackChunkName: "posts" */ './views/Page.vue'),
        name: "postsindex",
        meta: { requiresAuth: true },
        children: [{
            path: "/posts/page/:id",
            name: 'postspage'
        }]
    },
    {
        path: "/posts/:id",
        component: () =>
            import ( /* webpackChunkName: "posts" */ './views/PageDetail.vue'),
        name: "postdetail",
        meta: { requiresAuth: true }
    },
    {
        path: "/photos",
        component: () =>
            import ( /* webpackChunkName: "photos" */ './views/Photo.vue'),
        name: "photosindex",
        children: [{
            path: "/photos/page/:id",
            name: 'photospage'
        }]
    },
    {
        path: "/photos/:id",
        component: () =>
            import ( /* webpackChunkName: "photos" */ './views/PhotoDetail.vue'),
        name: "photodetail"
    },
    {
        path: "/albums",
        component: () =>
            import ( /* webpackChunkName: "albums" */ './views/Album.vue'),
        name: "albumsindex",
        children: [{
            path: "/albums/page/:id",
            name: 'albumspage'
        }]
    },
    {
        path: "/albums/:id",
        component: () =>
            import ( /* webpackChunkName: "albums" */ './views/AlbumDetail.vue'),
        name: "albumdetail"
    }

];

export default routes;