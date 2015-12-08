app.controller("CreatePlaylists", function($scope, PlaylistsFactory, $state){
  $scope.newPlaylist = {};


  $scope.postPlaylist = function(form){
    PlaylistsFactory.createPlaylist({name: $scope.playlistName}).then(function(response){
      var playlistId = response._id;
      $state.go("playlist", { playlistId :  playlistId });
    });
    // $state.go('albums');
    $scope.playlistName="";
    form.$setPristine();
  }
});
