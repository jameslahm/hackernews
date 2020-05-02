import {mount} from '@vue/test-utils'
import Spinner from '@/components/Spinner.vue'

import Vue from 'vue'
Vue.prototype.hello='1'

describe('Spinner.vue',()=>{
    const wrapper=mount(Spinner)

    it('has svg',()=>{
        expect(wrapper.contains('svg')).toBe(true)
        expect(wrapper.vm.hello).toBe('1')
    })
})