<template>
    <div>
        <px-list/>
        <px-crear-contacto/>
    </div>
</template>

<script>
import PxCrearContacto from '@/components/PxCrearContacto'
import PxList from '@/components/PxList'
import {mapActions} from 'vuex'
export default {
  async created(){
    await this.getContactos();
    await this.getId();
  },
  components: { 
    PxCrearContacto,
    PxList
  },
   methods: {
    ...mapActions(['getContactos','getId'])
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body{
    background: #05445E;
  }
  img{
    width: 200px;
  }
    .titulo{
        color: #fff;
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: 1.5px;
        text-shadow: 2px 2px 1px rgba(0,0,0,.5);
    }

</style>
