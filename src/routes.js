// import User from "@/components/User"
// import Home from "@/components/Home";
// // import Posts from './views/Page.vue'
// import Photos from './views/Photo.vue'
// import Home from './views/Home.vue'
// import Album from './views/Album.vue'
// import Paginate from './components/Paginate'



const routes = [{
        path: "/productin",
        name: 'productin',
        component: () =>
            import ( /* webpackChunkName: "productin" */ './views/ProductIn.vue'),
        children: [{
            path: "/productin/create",
            name: 'product-in-create',
            component: () =>
                import ( /* webpackChunkName: "productcrud" */ './views/productCrud'),
        }]
    },
    {
        path: "/product",
        name: 'product',
        component: () =>
            import ( /* webpackChunkName: "productin" */ './views/Product.vue')
    }

];

export default routes;