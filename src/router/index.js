import Vue from 'vue';
import VueRouter from 'vue-router';
import User from '../views/User.vue';
// import NPprogress from 'nprogress';
import NotFound from '@/components/NotFound.vue';
import Login from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';
import Movie from '@/views/Movie.vue';

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', redirect: { name: 'movie-list' } 
  },
  {
    path: '/movie-list',
    name: 'movie-list',
    component: Movie
  },
  {
    path: '/user-list',
    name: 'user-list',
    component: User
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/404',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '*',
    redirect: { name: 'not-found'}
  }
];

const router = new VueRouter({
  mode:'history',
  routes
})
// router.beforeEach((to, from, next) => {
//   NPprogress.start();
//   next();
// });
// router.afterEach((to, from, next) => {
//   NPprogress.done();
//   next();
// });
export default router
