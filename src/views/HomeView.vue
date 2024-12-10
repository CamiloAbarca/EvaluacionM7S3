<template>
  <div class="home">
    <BannerVue></BannerVue>
    <br>
    <h2>Categorías</h2>
    <p>Número de albums: {{ totalAlbums }}</p>
    <div class="buttons-box">
      <button type="button" class="btn btn-success" @click="mostrarDiscos('rap')">Rap ({{ countRap }})</button>
      <button type="button" class="btn btn-success" @click="mostrarDiscos('pop')">Pop ({{ countPop }})</button>
      <button type="button" class="btn btn-success" @click="mostrarDiscos('rock')">Rock ({{ countRock }})</button>
    </div>
    <hr>
    <div class="addAlbum">
      <h2>Agregar nuevo Album</h2>
      <div class="formAlbum">
        <form class="form-horizontal" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="artist" class="form-label">Artista</label>
            <input type="text" v-model="newAlbum.artist" class="form-control" id="artist" required>
          </div>
          <div class="form-group">
            <label for="album" class="form-label">Álbum</label>
            <input type="text" v-model="newAlbum.album" class="form-control" id="album" required>
          </div>
          <div class="form-group">
            <label for="image" class="form-label">Imagen Portada</label>
            <input type="text" v-model="newAlbum.image" class="form-control" id="image" required>
          </div>
          <div class="form-group">
            <label for="category" class="form-label">Género</label>
            <select v-model="newAlbum.category" class="form-select form-select-sm" id="category" required>
              <option value="" disabled selected>Seleccione...</option>
              <option value="rap">Rap</option>
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
            </select>
          </div>
          <button type="submit" class="btn btn-success">Agregar Álbum</button>
        </form>
      </div>
    </div>
    <br>
    <div class="box">
      <div class="box-disc" v-for="disco in discos" :key="disco.id">
        <div>
          <p>{{ disco.artist }}</p>
          <img :src="disco.image" alt="">
          <p>{{ disco.album }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerVue from '../components/Banner.vue'
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    BannerVue
  },
  data() {
    return {
      discos: [],
      newAlbum: {
        artist: '',
        album: '',
        image: '',
        category: ''
      }
    }
  },
  computed: {
    ...mapGetters(['countPop', 'countRap', 'countRock', 'totalAlbums']),
  },
  methods: {
    mostrarDiscos(categoria) {
      this.discos = this.$store.state[categoria];
    },

    ...mapMutations(['addAlbum']),
    
    submitForm() {
      this.addAlbum({ category: this.newAlbum.category, album: this.newAlbum });

      this.newAlbum = {
        artist: '',
        album: '',
        image: '',
        category: ''
      };

      this.mostrarDiscos(this.newAlbum.category);
    }
  }
}
</script>

<style scoped>
.buttons-box {
  text-align: center;
  margin: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  width: 200px;
}

.box {
  border: 2px solid grey;
  padding: 10px;
  margin-left: 10%;
  margin-right: 10%;
}

.box-disc {
  height: 250px;
  width: 250px;
  display: inline-block;
  margin: 1%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5%;
}

img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.form-horizontal {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}

.form-label {
  margin-bottom: 5px;
}

.form-control {
  width: 200px;
}
</style>