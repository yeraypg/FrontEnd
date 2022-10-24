/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import SpotView from '../views/SpotView.vue'
import FlopView from '../views/FlopView.vue'
import ExampleView from '../views/ExampleView.vue'
import NewSpotView from '../views/NewSpotView.vue'
import NewFlopView from '../views/NewFlopView.vue'
import NewExampleView from '../views/NewExampleView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/main',
        name: 'main',
        component: MainView
    },
    {
        path: '/spot',
        name: 'spot',
        props: true,
        component: SpotView
    },
    {
        path: '/newSpot',
        name: 'newSpot',
        props: true,
        component: NewSpotView
    },
    {
        path: '/flop',
        name: 'flop',
        props: true,
        component: FlopView
    },
    {
        path: '/newFlop',
        name: 'newFlop',
        props: true,
        component: NewFlopView
    },
    {
        path: '/example',
        name: 'example',
        props: true,
        component: ExampleView
    },
    {
        path: '/newExample',
        name: 'newExample',
        props: true,
        component: NewExampleView
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
