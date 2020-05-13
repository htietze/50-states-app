// associates base url path with statelist component?
// sets home page?

import Router from 'vue-router'

import StateList from '@/components/StateList'
import About from '@/components/About'
import StateDetail from '@/components/StateDetail'
import FullMap from '@/components/FullMap'
import StateJournal from '@/components/StateJournal'


export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/detail/:state',
            name: 'detail',
            component: StateDetail
        },
        {
            path: '/journal/:state',
            name: 'journal',
            component: StateJournal
        },
        {
            path: '/fullmap',
            component: FullMap
        }
    ]
})