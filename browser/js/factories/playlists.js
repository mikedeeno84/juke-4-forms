app.factory('PlaylistsFactory', function($http){
	var PlaylistsFactory ={}
	var cachedPlaylists = [];
	PlaylistsFactory.fetchAll = function(){
		return $http.get('/api/playlists').then(function(response){
			angular.copy(response.data, cachedPlaylists)
			return cachedPlaylists
		})
	}
	PlaylistsFactory.createPlaylist = function(playlist){
			return $http.post('/api/playlists', playlist)
			.then(function(response){
				var playlist = response.data;
				cachedPlaylists.push(playlist);
				return playlist;
			})
		}

	PlaylistsFactory.fetchById = function(id) {
		return $http.get('/api/playlists/' + id)
		.then(function(response) {
			console.log(response.data);
			debugger;
			return response.data;
		});
	}

	return PlaylistsFactory
})
