<template>
  <div>
    <input
      type="search"
      class="w-1/2 my-4 py-2 px-4 border border-gray-400 rounded"
      placeholder="Buscar.."
      v-on:input="handeSearch"
    />
    <table id="myTable" class="w-full h-full">
      <tr class="w-full">
        <th class="col-header">Nombre</th>
        <th class="col-header">Edad</th>
        <th class="col-header">Color</th>
        <th class="col-header">Color de Ojos</th>
        <th class="col-header">Editar</th>
        <th class="last-col-header">Eliminar</th>
      </tr>
      <tr class="text-center" v-bind:key="cat.cat_name" v-for="cat in cats">
        <td class="py-4">{{cat.name}}</td>
        <td class="py-4">{{cat.age}}</td>
        <td class="py-4">{{cat.eyesColor}}</td>
        <td class="py-4">{{cat.color}}</td>
        <td class="py-4 cursor-pointer" @click="() => $emit('editRow', cat.id)"><Icon key="edit" name="edit" class="inline w-4 h-4 text-black" /></td>
        <td class="py-4 cursor-pointer" @click="() => $emit('deleteRow', cat)"><Icon key="trash" name="trash" class="inline w-4 h-4 text-black" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Icon from '@/components/Icon.vue';
export default {
  name: 'List',
  data: function () {
    return {
      query: '',
      loading: false,
      selectedIndex: null,
      isDisabled: false,
    };
  },
  components: {Icon},
  props: {
    cats: {
      type: Array,
      required: true
    }
  },
  methods: {
    handeSearch(payload) {
        let table;
        let tr;
        let td;
        let i;
        let txtValue;
        let filter = payload.target.value.toLowerCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      },
  }
};
</script>
<style scoped>
  .col-header {
    @apply w-40 border border-gray-400;
  }
  .firts-col-header {
    @apply w-40 border border-gray-400;
    border-top-left-radius: 20px;
  }
  .last-col-header {
    @apply w-40 border border-gray-400;
    border-top-right-radius: 20px;
  }
</style>