import Router from 'vue-router'
import {mount,createLocalVue} from '@vue/test-utils'
import {createStore} from '@/store'
import * as filters from '@/util/filters'
import Vue from 'vue'

export function mountWithPlugins(componentToMount,options={},mockStoreState={}){
    const localVue=createLocalVue()
    Object.keys(filters).forEach(key=>{
        Vue.filter(key,filters[key])
    })

    Vue.use(Router)
    const router=new Router({})
    const store=createStore()
    store.replaceState({...store.state,...mockStoreState})
    
    return mount(componentToMount,{
        localVue,
        router,
        store,
        ...options
    })
}