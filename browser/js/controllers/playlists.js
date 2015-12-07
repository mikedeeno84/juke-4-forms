app.controller('PlaylistsCtrl', function ($scope, PlaylistsFactory){
	PlaylistsFactory.fetchAll().then(function(playlists){
		$scope.playlists = playlists;
		// console.log($scope.playlists)
	})

})