<template>
	<h4>Kontakta oss på support@accessoriesbyfive.se:</h4>
	<div class="FormContainer">
		<form action="mailto:" method="post" enctype="application/x-www-form-urlencoded; charset=UTF-8" accept-charset="utf-8">
			<div class="form-group">
				Namn:<br />
				<input type="text" name="name" class="form-control" /><br />
			</div>
			<div class="form-group">E-post:<br /><input type="email" name="e-mail" class="form-control" /><br /></div>
			<div class="form-group">Meddelande:<br /><textarea type="text" name="text" class="form-control" /><br /></div>
			<button class="btn btn-dark" type="submit">Skicka</button>
			<button class="btn btn-dark" type="reset">Avbryt</button>
		</form>
	</div>
</template>
<style lang="scss" scoped>
	button {
		margin-right: 10px;
		margin-top: 20px;
	}
	.FormContainer {
		margin: auto;
		margin-bottom: 20px;
		margin-top: 20px;
		max-width: 50%;
	}
	h4 {
		margin-left: 30px;
		margin-top: 20px;
	}
</style>
