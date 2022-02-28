import { createStore } from 'vuex';

const mutations = {
		updateEmail(state, eMail) {
			state.eMail = eMail;
		},
		updateMyPhone(state, myPhone) {
			state.myPhone = myPhone;
		},
		updateUserName(state, userName) {
			state.userName = userName;
		}
	},
	state = {
		eMail: '',
		myPhone: '',
		userName: ''
	};

export default createStore({ mutations, state, strict: true });
