app.controller("PlaylistCtrl", function($scope, PlaylistsFactory, PlayerFactory, playlist, allsongs) {
  	$scope.playlist = playlist;
  	$scope.playlist.songs.forEach(function(song){
  		song.audioUrl = '/api/songs/' + song._id + '.audio'
  	})
  	$scope.songs = allsongs
  	$scope.new_song = {}
  	console.log(allsongs)
  	$scope.addSong = function(song, playlistId){
  	PlaylistsFactory.addSongToList(song, playlistId).then(function(addedSong){
  		addedSong.audioUrl = '/api/songs/' + addedSong._id + '.audio'
  		$scope.playlist.songs.push(addedSong)
  		// $scope.$digest();
  	})
  }
  	console.log($scope.playlist.songs)
	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		console.log(song)
		PlayerFactory.start(song, $scope.playlist.songs);
	};

});
