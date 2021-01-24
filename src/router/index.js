import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../components/Overview.vue";
import Product from "../components/Product.vue";
import Orders from "../components/Orders.vue";
import {fb} from "../firebase.js"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {requiresAuth:true},
    children: [
      {
          path: "overview",
          name: "overview",
          component: Overview
      },
      {
        path: "product",
        name: "product",
        component: Product
    },
    {
      path: "orders",
      name: "orders",
      component: Orders
  }
  ]
  },
  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach((to, from, next) => {
  console.log('to', to)
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser
  console.log('currentUser', currentUser)
  console.log('requiresAuth', requiresAuth)
 
  if(requiresAuth && !currentUser) {
    next('/')
  } else if(requiresAuth && currentUser){
    next()
  } else {
    next()
  }
})
export default router;
