import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import Add from './components/Add.vue';
import Update from './components/Update.vue';
import NotFound from './components/NotFound.vue';
import updateProfile from './components/updateProfile.vue';


import { createRouter,createWebHistory } from 'vue-router'



const routes =[
{
	name: "Home",
	component: Home,
	path: '/'
},
{
	name: "SignUp",
	component: SignUp,
	path: '/sign-up'
},
{
	name: "Login",
	component: Login,
	path: '/login'
},
{
	name: "Add",
	component: Add,
	path: '/add'
},
{
	name: "Update",
	component: Update,
	path: '/update/:id'
},
{
	name: "NotFound",
	component: NotFound,
	path: '/:name'
},
{
	name: "updateProfile",
	component: updateProfile,
	path: '/update-profile/:id'
},

];


const router= createRouter({ 
    history: createWebHistory(),
     routes, 

 })

export default router;