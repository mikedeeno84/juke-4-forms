app.config(function ($stateProvider) {
	$stateProvider.state('createPlaylists', {
		url: '/playlists/new',
		templateUrl: '/templates/createPlaylists.html',
		controller: 'CreatePlaylists'
	});
});
