import { createStore } from 'vuex'

export default createStore({
  state: {
    rap: [
      { id: 1, artist: "Tupac", category: "rap", album: "All Eyez on Me", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaGZ0zq68dwfejoDR0MEpM5CKS9iwgMVQxd1DBL0LS7OpN4yBSoWap54OO2jPrTcMLdo&usqp=CAU" },
      { id: 2, artist: "Tupac", category: "rap", album: "Greatest Hits", image: "https://upload.wikimedia.org/wikipedia/en/9/9b/2PacGreatestHits.jpg" },
      { id: 3, artist: "Kendrick Lamar", category: "rap", album: "DAMN.", image: "https://www.musicayvinos.cl/wp-content/uploads/2020/08/Kendrick-Lamar-%E2%80%93-Damn.jpg" },
      { id: 4, artist: "Kendrick Lamar", category: "rap", album: "good kid, m.A.A.d city", image: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d" },
      { id: 5, artist: "Eminem", category: "rap", album: "The Marshall Mathers LP", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V6bo2l7g0TIdEhzaDxe9Ez5VZFvLT0Sszr2nOpKaIWDO2xGFqLxD-8Pv4KCB8TQRvv4&usqp=CAU" },],

    pop: [
      { id: 6, artist: "Michel Jackson", category: "pop", album: "Thriller", image: "https://musiclife.cl/3161-superlarge_default/michael-jackson-thriller.jpg" },
      { id: 7, artist: "Michel Jackson", category: "pop", album: "Bad", image: "https://cdnx.jumpseller.com/discos-mayra/image/38262477/michael-jackson-bad-vinilo.jpeg?1691181540" },
      { id: 8, artist: "Madonna", category: "pop", album: "Madonna", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_adsLxBEfHdkWvcrHGezwnvzV14XqjpZifC3PhX5LP7njIFpfnuwwlIGB03uHMMA9yic&usqp=CAU" },
      { id: 9, artist: "Madonna", category: "pop", album: "Like a Virgin", image: "https://www.musicayvinos.cl/wp-content/uploads/2023/11/Madonna-%E2%80%93-Like-A-Virgin.jpg" },
      { id: 10, artist: "Madonna", category: "pop", album: "Madame X", image: "https://i.scdn.co/image/ab67616d0000b273fa3f9b299ec4a1b18164726d" },],

    rock: [
      { id: 11, artist: "Foo Fighters", category: "rock", album: "Greatest Hits", image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/c5/db/f8c5db15-620a-1ec6-36c5-43ba3c7c690a/dj.djjzfxdd.jpg/1200x1200bb.jpg" },
      { id: 12, artist: "Metallica", category: "rock", album: "Master of Puppets", image: "https://www.harrisonsrecords.cl/wp-content/uploads/2021/02/metallica-master-of-puppets.jpg" },
      { id: 13, artist: "AC/DC", category: "rock", album: "Highway to Hell", image: "https://resources.tidal.com/images/359644e5/f5ee/4e1a/a2a8/e103c85e98ec/640x640.jpg" },
      { id: 14, artist: "AC/DC", category: "rock", album: "Back in Black", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfOipdEq5caFODdptz2ib4QMOCgEm8PUvZyw&s" },
      { id: 15, artist: "Deep Purple", category: "rock", album: "Machine Head", image: "https://upload.wikimedia.org/wikipedia/en/0/00/Machine_Head_album_cover.jpg" },]
  },
  getters: {
    countPop(state) {
      return state.pop.length;
    },
    countRap(state) {
      return state.rap.length;
    },
    countRock(state) {
      return state.rock.length;
    },
    totalAlbums(state) {
      return state.pop.length + state.rap.length + state.rock.length;
    }
  },
  mutations: {
    addAlbum(state, { category, album }) {
      const newId = state[category].length + 1;
      const newAlbum = { ...album, id: newId };
      state[category].push(newAlbum);
    }
  },
  actions: {
  },
  modules: {
  }
})
