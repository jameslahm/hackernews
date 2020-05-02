import {mount} from '@vue/test-utils'
import ProgressBar from '@/components/ProgressBar.vue'

describe('snapshot - ProgressBar',()=>{
    it('render correctly',()=>{
        const wrapper=mount(ProgressBar)
        expect(wrapper.element).toMatchSnapshot()
    })
})