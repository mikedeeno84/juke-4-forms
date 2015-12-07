app.controller("CreatePlaylists", function($scope){
  $scope.newPlaylist = {};
  $scope.playlistSubmit = function(playlistName) {
    $scope.newPlaylist.name = playlistName;
    console.log($scope.newPlaylist);
  }

  $scope.isFormValid = function(playlistName) {
    if (playlistName.length > 16 && playlistName.length > 0) {
      return false;
    } else {
      return true;
    }
  }
});
