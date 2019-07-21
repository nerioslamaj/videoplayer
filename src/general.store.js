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
        url: 'https://scontent.cdninstagram.com/vp/2112e19c09d2ce5e324b7359dd798f77/5D352B4F/t50.2886-16/64961145_1061136724076325_790753155131653543_n.mp4?_nc_ht=scontent.cdninstagram.com'
      },
      {
        id: 3,
        artist: 'NL',
        title: 'Kakome Beach',
        playlist: 'Electronic',
        url: 'https://scontent.cdninstagram.com/vp/a02b3eede4209b78d65f83262709bb0c/5D358402/t50.2886-16/18277029_1908422776113886_5876934734734426112_n.mp4?_nc_ht=scontent.cdninstagram.com'
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
    }
  },
  
  actions: {
    async switchPlaylist ({ commit }, index) {
      commit('SELECT_PLAYLIST', index)
    },
    async switchVideo ({ commit }, id) {
      commit('SELECT_VIDEO', id)
    }
  }
});