<template>
  <div class="w-full h-full flex flex-col bg-black">
    <Header />
    <div class="w-full h-full mt-14">
      <h1 class="title">Bienvenido {{`${user.name} ${user.lname}`}} a CatsTracker!</h1>
      <h3 class="text-center text-xl text-white">Tu Pokédex para tu mascota felino</h3>
    </div>
    <div class="modal-container p-4 my-14">
      <List
        :cats="cats"
        @deleteRow="removeCat"
        @editRow="EditCat"
      >
      </List>
    </div>
    <div class="create-section mb-4">
      <h2 class="text-white ml-40">Tienes más amigos peludos? No te preocupes, puedes agregarlo <router-link class="text-yellow-500 underline" :to="{ name: 'cat', params: { action: 'create' }}">aquí</router-link></h2>.
    </div>
  </div>
</template>
<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  import {mapGetters, mapActions} from 'vuex';
  import Header from '@/components/Header.vue';
  import List from '@/components/List.vue';
  export default {
    data() {
      return {
        user: {
          name: 'Roberto',
          lname: 'Ortiz'
        },
        cats: []
      }
    },
    computed: {
      ...mapGetters({
        getCat: 'cat/getCat'
      })
    },
    components: { Header, List },
    methods: {
      ...mapActions({
        deleteCat: 'cat/deleteCat'
      }),
      loadTable() {
        this.cats = this.getCat;
      },
      removeCat(payload) {
        this.deleteCat(payload);
      },
      EditCat(payload) {
        this.$router.push({name: 'cat', params: {action: 'edit'}, query: {id: payload}})
      },
    },
    mounted () {
      this.loadTable()
    }
  }
</script>
<style scoped>
  .title {
    @apply text-2xl font-bold text-white text-center;
  }
  .bg-main-container {
    background-color: #0055B8;
  }
  .modal-container {
    display: block;
    width: 80%;
    @apply bg-white self-center;
    -webkit-box-shadow: 0 2px 5px rgb(0 0 0 / 50%), 0 0 5px rgb(0 0 0 / 7%);
    box-shadow: 0 2px 5px rgb(0 0 0 / 50%), 0 0 5px rgb(0 0 0 / 7%);
    border-radius: 20px;
  }
</style>