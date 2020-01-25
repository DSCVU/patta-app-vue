import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import ChangePassword from "../views/ChangePassword.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/sign_up",
    name: "sign_up",
    component: SignUp
  },
  {
    path: "/sign_in",
    name: "sign_in",
    component: SignIn
  },
  {
    path: "/forgot_password",
    name: "forgot_password",
    component: ForgotPassword
  },
  {
    path: "/reset_password",
    name: "reset_password",
    component: ResetPassword
  },
  {
    path: "/change_password",
    name: "change_password",
    component: ChangePassword
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
