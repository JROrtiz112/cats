<template>
  <div class="flex flex-col">
    <div class="flex flex-col modal-container mt-32">
      <label class="mt-4 block" for="name">Nombre</label>
      <input
        name="name"
        type="text"
        class="w-full my-4 pl-2 py-2 rounded border border-gray-400 block"
        placeholder="Peludo"
        v-model="name"
      />
      <label class="mt-4 block" for="age">Edad</label>
      <input
        name="age"
        type="text"
        class="w-full my-4 pl-2 py-2 rounded border border-gray-400 block"
        placeholder="2"
        v-model="age"
      />
      <label class="mt-4 block" for="color">Color</label>
      <input  
        name="color"
        type="text"
        class="w-full my-4 pl-2 py-2 rounded border border-gray-400 block"
        placeholder="Cafe"
        v-model="color"
      />
      <label class="mt-4 block" for="eyesColor">Color de Ojos</label>
      <input
        name="eyesColor"
        type="text"
        class="w-full my-4 pl-2 py-2 rounded border border-gray-400 block"
        placeholder="Gris"
        v-model="eyesColor"
      />
      <div class="flex justify-between w-full">
        <button class="btn" @click="cancel">Cancelar</button>
        <button @click="save" v-if="isCreate">Guardar</button>
        <button @click="update" v-else>Actualizar</button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'Cat',
  data() {
    return {
      isCreate: false,
      name: '',
      age: null,
      color: '',
      eyesColor: ''
    }
  },
  computed: {
    ...mapGetters({
      getCat: 'cat/getCat',
    })
  },
  methods: {
    ...mapActions({
      createCat: 'cat/createCat',
      clearCat: 'cat/clearCat',
      updateCat: 'cat/updateCat'
    }),
    loadCat() {
      const cats = this.getCat;
      const catId = this.$route.query.id;
      const cat = cats.find(cat => cat.id === catId);
      if (cat) {
        this.name = cat.name,
        this.age = cat.age,
        this.color = cat.color,
        this.eyesColor = cat.eyesColor
      }
    },
    save() {
      const cat = {
        id: `cat-${Math.random()}`,
        name: this.name,
        age: this.age,
        color: this.color,
        eyesColor: this.eyesColor
      }
      this.createCat(cat);
      this.$router.push({name: 'home'});
    },
    update() {
      const cat = {
        id: this.$route.query.id,
        name: this.name,
        age: this.age,
        color: this.color,
        eyesColor: this.eyesColor
      }
      this.updateCat(cat)
      this.$router.push({name: 'home'});
    },
    cancel() {
      this.clearCat();
      this.$router.push({name: 'home'});
    }
  },
  mounted() {
    if (this.$route.params.action === 'create') this.isCreate = true
    this.loadCat();
  }
}
</script>
<style scoped>
 .modal-container {
   display: block;
    width: 50%;
    @apply bg-white self-center py-4 px-8;
    -webkit-box-shadow: 0 2px 5px rgb(0 0 0 / 50%), 0 0 5px rgb(0 0 0 / 7%);
    box-shadow: 0 2px 5px rgb(0 0 0 / 50%), 0 0 5px rgb(0 0 0 / 7%);
    border-radius: 20px;
 }
</style>