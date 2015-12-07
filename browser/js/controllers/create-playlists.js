app.controller("CreatePlaylists", function($scope, PlaylistsFactory){
  $scope.newPlaylist = {};


  $scope.postPlaylist = function(form){
    PlaylistsFactory.createPlaylist({name: $scope.playlistName}).then(function(response){
      $scope.playlistName
    })
    $scope.playlistName="";
    form.$setPristine();
  }
});
