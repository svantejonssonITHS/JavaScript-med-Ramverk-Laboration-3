<!-- I create this payment.vue to be the payment page -->
<template>
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>PaymentPage</title>
			<link href="paymentform.css" rel="stylesheet" />
			<link
				href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
				rel="stylesheet"
				integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
				crossorigin="anonymous"
			/>
		</head>
		<body>
			<div class="wrapper">
				<h2>Betalning</h2>
				<form method="POST">
					<h4>Dina uppgifter</h4>
					<div class="input-group">
						<div class="input-box">
							<input type="text" placeholder="Förnamn" required class="name" :value="surName" />
							<i class="fa fa-user icon"></i>
						</div>
						<div class="input-box">
							<input type="text" placeholder="Efternamn" required class="name" :value="familyName" />
							<i class="fa fa-user icon"></i>
						</div>
					</div>
					<div class="input-group">
						<div class="input-box">
							<input type="text" placeholder="Gatuadress" required class="name" :value="address" />
						</div>
						<div class="input-box">
							<input type="text" placeholder="Postadress" required class="name" :value="zipCode" />
						</div>
						<div class="input-box">
							<input type="text" placeholder="Telefonnummer" required class="name" :value="myPhone" />
							<i class="fa fa-phone icon"></i>
						</div>
					</div>
					<div class="input-group">
						<div class="input-box">
							<input type="email" placeholder="Epost" required class="name" :value="eMail" />
							<i class="fa fa-envelope icon"></i>
						</div>
					</div>
					<div class="input-group">
						<div class="input-box">
							<h4>Födelsedatum</h4>
							<input type="text" placeholder="DD" class="dob" />
							<input type="text" placeholder="MM" class="dob" />
							<input type="text" placeholder="YYYY" class="dob" />
						</div>
						<div class="input-box">
							<h4>Kön</h4>
							<input type="radio" id="b1" name="gendar" checked class="radio" />
							<label for="b1">Man</label>
							<input type="radio" id="b2" name="gendar" class="radio" />
							<label for="b2">Kvinna</label>
						</div>
					</div>
					<div class="input-group">
						<div class="input-box">
							<h4>Betalningsinformation</h4>
							<input type="radio" name="pay" id="bc1" checked class="radio" />
							<label for="bc1"
								><span><i class="fa fa-cc-visa"></i> Kreditkort</span></label
							>
							<input type="radio" name="pay" id="bc2" class="radio" />
							<label for="bc2"
								><span><i class="fa fa-cc-paypal"></i> Paypal</span></label
							>
						</div>
					</div>
					<div class="input-group">
						<div class="input-box">
							<input type="tel" placeholder="Kortnummer" required class="name" />
							<i class="fa fa-credit-card icon"></i>
						</div>
					</div>
					<div class="input-group">
						<div class="input-box">
							<input type="tel" placeholder="CVC" required class="name" />
							<i class="fa fa-user icon"></i>
						</div>
						<div class="input-box">
							<select>
								<option>januari</option>
								<option>februari</option>
								<option>mars</option>
								<option>april</option>
								<option>maj</option>
								<option>juni</option>
								<option>juli</option>
								<option>augusti</option>
								<option>september</option>
								<option>oktober</option>
								<option>november</option>
								<option>december</option>
							</select>
							<select>
								<option>2022</option>
								<option>2023</option>
								<option>2024</option>
								<option>2025</option>
							</select>
						</div>
					</div>
					<div class="input-group">
						<div class="input-box">
							<button class="btn btn-dark" type="submit">Betala nu</button>
						</div>
					</div>
				</form>
			</div>
		</body>
	</html>
</template>
<script>
	export default {
		computed: {
			address() {
				return this.$store.state.address;
			},
			eMail() {
				return this.$store.state.eMail;
			},
			familyName() {
				return this.$store.state.familyName;
			},
			myPhone() {
				return this.$store.state.myPhone;
			},
			surName() {
				return this.$store.state.surName;
			},
			zipCode() {
				return this.$store.state.zipCode;
			}
		}
	};
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		background-color: #f5f5f5;
		font-family: Arial, Helvetica, sans-serif;
	}
	.wrapper {
		background-color: #fcfcfc;
		width: 500px;
		padding: 25px;
		margin: 25px auto 0;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
	}
	.wrapper h2 {
		background-color: #fcfcfc;
		color: #2d4b0d;
		font-size: 24px;
		padding: 10px;
		margin-bottom: 20px;
		text-align: center;
		border: 1px dotted #333;
	}
	h4 {
		padding-bottom: 5px;
		color: #2d4b0d;
	}
	.input-group {
		margin-bottom: 8px;
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: row;
		padding: 5px 0;
	}
	.input-box {
		width: 100%;
		margin-right: 12px;
		position: relative;
	}
	.input-box:last-child {
		margin-right: 0;
	}
	.name {
		padding: 14px 10px 14px 50px;
		width: 100%;
		background-color: #fcfcfc;
		border: 1px solid #00000033;
		outline: none;
		letter-spacing: 1px;
		transition: 0.3s;
		border-radius: 3px;
		color: #333;
	}
	.name:focus,
	.dob:focus {
		-webkit-box-shadow: 0 0 2px 1px #7ed32180;
		-moz-box-shadow: 0 0 2px 1px #7ed32180;
		box-shadow: 0 0 2px 1px #7ed32180;
		border: 1px solid #7ed321;
	}
	.input-box .icon {
		width: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0px;
		left: 0px;
		bottom: 0px;
		color: #333;
		background-color: #f1f1f1;
		border-radius: 2px 0 0 2px;
		transition: 0.3s;
		font-size: 20px;
		pointer-events: none;
		border: 1px solid #00000033;
		border-right: none;
	}
	.name:focus + .icon {
		background-color: #333;
		color: #fff;
		border-right: 1px solid #333;
		border: none;
		transition: 1s;
	}
	.dob {
		width: 30%;
		padding: 14px;
		text-align: center;
		background-color: #fcfcfc;
		transition: 0.3s;
		outline: none;
		border: 1px solid #c0bfbf;
		border-radius: 3px;
	}
	.radio {
		display: none;
	}
	.input-box label {
		width: 50%;
		padding: 13px;
		background-color: #fcfcfc;
		display: inline-block;
		text-align: center;
		border: 1px solid #838181;
	}
	.input-box label:first-of-type {
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		border-right: none;
	}
	.input-box label:last-of-type {
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
	}
	.radio:checked + label {
		background-color: #333;
		color: #fff;
		transition: 0.5s;
	}
	.input-box select {
		display: inline-block;
		width: 50%;
		padding: 12px;
		background-color: #fcfcfc;
		text-align: center;
		font-size: 16px;
		outline: none;
		border: 1px solid #c0bfbf;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	.input-box select:focus {
		background-color: #d1b464;
		color: #fff;
		text-align: center;
	}
	button {
		width: 100%;
		background: transparent;
		border: none;
		background: #333;
		color: white;
		padding: 15px;
		border-radius: 4px;
		font-size: 16px;
		transition: all 0.35s ease;
	}
	button:hover {
		cursor: pointer;
		background: #d1b464;
	}
</style>
