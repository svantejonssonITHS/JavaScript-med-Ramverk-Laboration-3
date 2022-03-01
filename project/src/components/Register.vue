<template>
	<div class="container mt-5">
		<div class="row d-flex justify-content-center">
			<div class="col-md-7">
				<div class="card px-5 py-4" id="form1">
					<div class="form-data" v-if="!submitted">
						<div class="text-center mb-4">
							<h4>Registrera nu!</h4>
						</div>
						<div class="forms-inputs mb-4">
							<span>E-mail</span>
							<input
								type="text"
								v-model="eMail"
								:class="{ 'form-control': true, 'is-invalid': !validEmail(eMail) && emailBlured }"
								@blur="emailBlured = true"
							/>
							<div class="invalid-feedback">Skriv in ett giltigt mejl!</div>
						</div>
						<div class="forms-inputs mb-4">
							<span>Användarnamn</span>
							<input
								type="text"
								v-model="userName"
								:class="{ 'form-control': true, 'is-invalid': !validUsername(userName) && usernameBlured }"
								@blur="usernameBlured = true"
							/>
							<div class="invalid-feedback">Skriv in ett giltigt användarnamn!</div>
						</div>
						<div class="forms-inputs mb-4">
							<span>Telefonnummer</span>
							<input
								type="text"
								v-model="myPhone"
								:class="{ 'form-control': true, 'is-invalid': !validPhone(myPhone) && phoneBlured }"
								@blur="phoneBlured = true"
							/>
							<div class="invalid-feedback">Skriv in ett giltigt telefonnummer!</div>
						</div>
						<div class="forms-inputs mb-4">
							<span>Lösenord</span>
							<input
								type="password"
								v-model="password"
								:class="{ 'form-control': true, 'is-invalid': !validPassword(password) && passwordBlured }"
								@blur="passwordBlured = true"
							/>
							<div class="invalid-feedback">Lösenord måste minst vara 8 bokstäver!</div>
						</div>
						<div class="mb-3"><button @click.stop.prevent="submit" class="btn btn-dark w-100">Register</button></div>
					</div>
					<div class="success-data" v-else>
						<div class="text-center d-flex flex-column">
							<i class="bx bxs-badge-check"></i>
							<span class="text-center fs-3"
								>Your account has been created <br />
								Successfully</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	//importing bootstrap 5 Modules
	import 'bootstrap/dist/css/bootstrap.min.css';
	export default {
		computed: {
			eMail: {
				get() {
					return this.$store.state.eMail;
				},
				set(value) {
					this.$store.commit('updateEmail', value);
				}
			},
			myPhone: {
				get() {
					return this.$store.state.myPhone;
				},
				set(value) {
					this.$store.commit('updateMyPhone', value);
					console.log(this.myPhone);
					console.log('computed');
				}
			},
			userName: {
				get() {
					return this.$store.state.userName;
				},
				set(value) {
					this.$store.commit('updateUserName', value);
					console.log(this.userName);
					console.log('computed');
				}
			}
		},
		el: '#form1',
		data: function () {
			return {
				email: '',
				emailBlured: false,
				valid: false,
				submitted: false,
				password: '',
				passwordBlured: false,
				username: '',
				usernameBlured: false,
				phone: '',
				phoneBlured: false
			};
		},

		methods: {
			validate: function () {
				this.emailBlured = true;
				this.passwordBlured = true;
				this.usernameBlured = true;
				this.phoneBlured = true;
				if (
					this.validEmail(this.email) &&
					this.validPassword(this.password) &&
					this.validPhone(this.phone) &&
					this.validUsername(this.username)
				) {
					this.valid = true;
				}
			},

			validEmail: function (eMail) {
				var re = /(.+)@(.+){2,}\.(.+){2,}/;
				if (re.test(eMail.toLowerCase())) {
					return true;
				}
			},

			validPassword: function (password) {
				if (password.length > 7) {
					return true;
				}
			},

			validUsername: function (userName) {
				if (!/\s/.test(userName)) {
					return true;
				}
			},

			validPhone: function (myPhone) {
				if (myPhone.length > 9 && myPhone.length < 12) {
					return true;
				}
			},
			submit: function () {
				this.validate();
				if (this.valid) {
					this.submitted = true;
				}
			}
		}
	};
</script>
<style scoped>
	body {
		background: #000;
	}

	.card {
		border: none;
		height: 100%;
	}

	.forms-inputs {
		position: relative;
	}

	.forms-inputs span {
		position: absolute;
		top: -18px;
		left: 10px;
		background-color: #fff;
		padding: 5px 10px;
		font-size: 15px;
	}

	.forms-inputs input {
		height: 50px;
		border: 2px solid #eee;
	}

	.forms-inputs input:focus {
		box-shadow: none;
		outline: none;
		border: 2px solid #000;
	}

	.btn {
		height: 50px;
	}

	.success-data {
		display: flex;
		flex-direction: column;
	}

	.bxs-badge-check {
		font-size: 90px;
	}
</style>
