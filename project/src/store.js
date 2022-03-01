import { createStore } from 'vuex';

const mutations = {
		updateAddress(state, address) {
			state.address = address;
		},
		updateEmail(state, eMail) {
			state.eMail = eMail;
		},
		updateFamilyName(state, familyName) {
			state.familyName = familyName;
		},
		updateMyPhone(state, myPhone) {
			state.myPhone = myPhone;
		},
		updateSurName(state, surName) {
			state.surName = surName;
		},
		updateUserName(state, userName) {
			state.userName = userName;
		},
		updateZipCode(state, zipCode) {
			state.zipCode = zipCode;
		}
	},
	state = {
		address: '',
		eMail: '',
		familyName: '',
		myPhone: '',
		surName: '',
		userName: '',
		zipCode: ''
	};

export default createStore({ mutations, state, strict: true });
