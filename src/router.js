import Vue from 'vue'
import VueRouter from 'vue-router'
import Photo from './components/pages/Photo.vue';

Vue.use(VueRouter)

function load(componentName){
    return () => import(`@/components/pages/${componentName}`)
}

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'Home',
            component: load('Home')
        },
        {
            path:'/photography',
            name:'Photography',
            component: load('Photography')
        },
        {
            path: '/photo/:id',
            name: 'photo',
            component: Photo,
        },
        {
            path:'/library',
            name:'Library',
            component: load('Library')
        },
    ]
})

export default router

