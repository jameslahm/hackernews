import {mountWithPlugins} from '../../unit/test-utils/mountWithPlugins'
import Item from '@/components/Item.vue'

describe('snapshot - Item.vue',()=>{
    it('renders correctly',()=>{
        const wrapper=mountWithPlugins(Item,{
            propsData:{
                item:{
                    id:1,
                    score:22,
                    url:'https://www.google.com',
                    type:'job'
                }
            }
        })
        expect(wrapper.element).toMatchSnapshot()
    })
    
})