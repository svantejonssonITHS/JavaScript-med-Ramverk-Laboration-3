<template>
	<div class="card mb-3">
		<div class="row g-0">
			<div class="col-md-4">
				<img src="../../assets/hund.jpg" class="img-fluid rounded-start" alt="..." />
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">Användarprofil</h5>
					<form>
						<div class="form-group">
							Förnamn:<br />
							<input type="text" name="name" class="form-control" /><br />
						</div>
						<div class="form-group">
							Efternamn:<br />
							<input type="text" name="name" class="form-control" /><br />
						</div>
						<div class="form-group">
							Gatuadress:<br />
							<input type="text" name="address" class="form-control" />
							<div id="emailHelp" class="form-text">Gata, nr, postbox etc.</div>
							<br />
						</div>
						<div class="form-group">
							Postadress:<br />
							<input type="text" name="address" class="form-control" />
							<div id="emailHelp" class="form-text">Postnummer, postort.</div>
							<br />
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">E-post:</label>
							<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
							<div id="emailHelp" class="form-text">Vi delar inte din e-postadress med någon annan.</div>
						</div>
						<div class="mb-3">
							<label for="exampleInputPassword1" class="form-label">Lösenord</label>
							<input type="password" class="form-control" id="exampleInputPassword1" />
							<div id="passwordHelpBlock" class="form-text">
								Ditt lösenord behöver vara 8-20 tecken, innehålla bokstäver och siffor, men inga mellanrum,
								specialtecken eller emojis.
							</div>
						</div>

						<button type="submit" class="btn btn-dark">Spara</button>
						<button class="btn btn-dark" type="reset">Avbryt</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	button {
		margin-right: 10px;
		margin-top: 20px;
	}
	.card {
		margin: 1em auto;
		width: 70%;
	}
</style>
