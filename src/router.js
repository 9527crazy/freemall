import Vue from 'vue'
import Router from 'vue-router'
import cart from './pages/cart'
import Address from './pages/address'

Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            name:'cart',
            component:cart
        },
        {
            path:'/address',
            name:'address',
            component:Address
        },
    ]
})