import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlists: [ 'Fun Playlist', 'Random' ],
    videos: [
      {
        id: 1,
        artist: 'Google',
        title: 'For Big Blazes',
        playlist: 'Fun Playlist',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
      },
      {
        id: 2,
        artist: 'Blender Foundation',
        title: 'Big Buck Bunny',
        playlist: 'Fun Playlist',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      },
      {
        id: 3,
        artist: 'Blender Foundation',
        title: 'Elephant\'s Dream',
        playlist: 'Fun Playlist',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      },
      {
        id: 4,
        artist: 'Chromecast',
        title: 'Elephant\'s Dream',
        playlist: 'Fun Playlist',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
      },
      {
        id: 5,
        artist: 'Blender Foundation',
        title: 'Tears of Steel',
        playlist: 'Random',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
      },
      {
        id: 6,
        artist: 'Google',
        title: 'For Bigger Escapes',
        playlist: 'Random',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
      },
      {
        id: 7,
        artist: 'Chromecast',
        title: 'For Bigger Joyrides',
        playlist: 'Random',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
      }
    ],
    currentPlaylist: 'Fun Playlist',
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