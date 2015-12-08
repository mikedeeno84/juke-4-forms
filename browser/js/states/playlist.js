app.config(function($stateProvider){
  $stateProvider.state("playlist",{
    url: "/playlists/:playlistId",
    templateUrl : "/templates/playlist.html",
    controller: 'PlaylistCtrl',
    resolve: {
      playlist: function(PlaylistsFactory, $stateParams) {
        debugger;
        return PlaylistsFactory.fetchById($stateParams.playlistId);
      },
      allsongs: function(SongFactory) {
        
      }
    }
  });
})
