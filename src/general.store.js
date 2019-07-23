import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlists: [ 'Movies', 'Random' ],
    videos: [
      {
        id: 1,
        artist: 'Toy Story',
        title: 'Trailer',
        playlist: 'Movies',
        url: 'http://www.html5videoplayer.net/videos/toystory.mp4'
      },
      {
        id: 2,
        artist: 'Big Buck Bunny',
        title: 'In the woods',
        playlist: 'Movies',
        url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      },
      {
        id: 3,
        artist: 'New Amsterdam',
        title: 'Series',
        playlist: 'Movies',
        url: 'http://fr.vid.web.acsta.net/nmedia/33/18/05/13/20/19578396_hd_013.mp4'
      },
      {
        id: 4,
        artist: 'Big Buck Bunny',
        title: 'In the woods',
        playlist: 'Random',
        url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      },
      {
        id: 5,
        artist: 'New Amsterdam',
        title: 'Series',
        playlist: 'Random',
        url: 'http://fr.vid.web.acsta.net/nmedia/33/18/05/13/20/19578396_hd_013.mp4'
      }
    ],
    currentPlaylist: 'Movies',
    currentVideoId: 1
  },
  
  getters: {
    // Here we will create a getter
  },
  
  mutations: {
    SELECT_PLAYLIST (state, index) {
      state.currentPlaylist = state.playlists[index];
    },
    SELECT_VIDEO (state, id) {
      state.currentVideoId = id
    },
    ADD_NEW_PLAYLIST (state, name) {
      state.playlists.push(name);
    },
    ADD_NEW_VIDEO (state, data) {
      state.videos.push({
        id: state.videos[state.videos.length-1].id + 1,
        artist: data.artist,
        title: data.title,
        playlist: state.currentPlaylist,
        url: data.url
      });
    }
  },
  
  actions: {
    async switchPlaylist ({ commit }, index) {
      commit('SELECT_PLAYLIST', index)
    },
    async switchVideo ({ commit }, id) {
      commit('SELECT_VIDEO', id)
    },
    async addNewPlaylist ({ commit }, name) {
      commit('ADD_NEW_PLAYLIST', name)
    },
    async addNewVideo ({ commit }, data) {
      commit('ADD_NEW_VIDEO', data)
    }
  }
});