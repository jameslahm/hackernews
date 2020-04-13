import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore() {
	return new Vuex.Store({
		state: {
			activeType: null, // current topic
			itemsPerPage: 20, 
			items: {}, // items 
			users: {}, // users
			lists: {
				top: [], //top ids
				new: [], //new ids
				show: [], //show ids
				ask: [], //ask ids
				job: [], //job ids
			},
		},
		actions,
		mutations,
		getters,
	})
}
