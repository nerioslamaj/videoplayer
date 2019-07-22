import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlists: [ 'Electronic', 'Radio' ],
    videos: [
      {
        id: 1,
        artist: 'Chopin',
        title: 'Nocturne',
        playlist: 'Radio',
        url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      },
      {
        id: 2,
        artist: 'Reuben Wu',
        title: 'Icebergs',
        playlist: 'Electronic',
        url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      },
      {
        id: 3,
        artist: 'NL',
        title: 'Kakome Beach',
        playlist: 'Electronic',
        url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      },
      {
        id: 4,
        artist: 'Big Buck Bunny',
        title: 'In the woods',
        playlist: 'Electronic',
        url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      },
      {
        id: 5,
        artist: 'Big Buck Bunny',
        title: 'In the woods',
        playlist: 'Radio',
        url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      }
    ],
    currentPlaylist: 'Electronic',
    currentVideoId: 3
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