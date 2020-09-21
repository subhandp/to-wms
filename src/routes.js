// import ProductEdit from "@/views/ProductEdit"
// import ProductCreate from "@/views/ProductCreate"


// import Home from "@/components/Home";
// // import Posts from './views/Page.vue'
// import Photos from './views/Photo.vue'
// import Home from './views/Home.vue'
// import Album from './views/Album.vue'
// import Paginate from './components/Paginate'



const routes = [
    // {
    //     path: '/',
    //     redirect: { name: 'home' }
    // },
    {
        path: '/',
        name: 'home',
        redirect: { name: 'dashboard' },
        component: () => import(/* webpackChunkName: 'index view' */'./views/Index.vue'),
        meta: {
            requiresAuth: true
        },
        children:[
            {
                name: 'dashboard',
                path: '',
                component: () => import(/* webpackChunkName: 'Dashboard view' */'./views/Dashboard.vue'),
            },
            {
                path: 'products',
                name: 'products',
                component: () =>
                    import ( /* webpackChunkName: "product all view" */ './views/Products.vue')
            },
            {
                path: "products/:id/edit",
                name: "product-edit",
                component: () =>
                    import ( /* webpackChunkName: "product all view" */ './views/ProductEdit.vue'),
                // component: ProductEdit,
                params: true,
            },
            {
                path: "product/new",
                name: "product-create",
                component: () =>
                    import ( /* webpackChunkName: "product all view" */ './views/ProductCreate.vue')
                // component: ProductCreate
              },
            
        ],
    },
    {
        path: '/login',
        name: 'user-login',
        component: () => import(/* webpackChunkName: 'user login view' */'./views/UserLogin.vue'),
        meta: {
            guest: true
        }
      },
    // {
    //     path: "/productin",
    //     name: 'productin',
    //     component: () =>
    //         import ( /* webpackChunkName: "productin" */ './views/ProductIn.vue'),
    //     children: [{
    //         path: "/productin/create",
    //         name: 'product-in-create',
    //         component: () =>
    //             import ( /* webpackChunkName: "productcrud" */ './views/productCrud'),
    //     }]
    // },
    // {
    //     path: "/product",
    //     name: 'product',
    //     component: () =>
    //         import ( /* webpackChunkName: "productin" */ './views/Product.vue')
    // }

];

  

export default routes;