import { createStore } from 'vuex';

const mutations = {
		updateEmail(state, eMail) {
			state.eMail = eMail;
		},

		updateUserName(state, userName) {
			state.userName = userName;
		}
	},
	state = {
		eMail: '',

		userName: ''
	};

export default createStore({ mutations, state, strict: true });
