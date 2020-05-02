import {mountWithPlugins} from '../test-utils/mountWithPlugins'
import Comment from '@/components/Comment'

const mockState={
    items:{
        'item-id':{
            by:'john',
            time:Date.now(),
            test:'hello world',
            kids:[]
        }
    }
}

const mountOptions={
    propsData:{
        id:'item-id'
    }
}

describe('Comment.vue',()=>{
    it('has comment with data in the store',()=>{
        const wrapper=mountWithPlugins(Comment,mountOptions,mockState)
        expect(wrapper.contains('.comment')).toBe(true)
    })

    it('has no data with no store data',()=>{
        const wrapper=mountWithPlugins(Comment,mountOptions)
        expect(wrapper.contains('.comment')).toBe(false)
    })

    it('has no data with no comment id passed',()=>{
        const wrapper=mountWithPlugins(Comment)
        expect(wrapper.contains('.comment')).toBe(false)
    })
})