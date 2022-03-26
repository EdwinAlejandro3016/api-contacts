<template>
    <div class="contactos">
        <h1 class="titulo">Contactos</h1>
        <div class="contacto" v-for="(contacto,index) in contactos" :key="contacto.id">
            <div class="flex-nombre-foto">
                <h3 class="nombre">{{contacto.nombres}} {{contacto.apellidos}}</h3>
                <img :src="contacto.foto" alt="foto-perfil">
            </div>
            <h3 class="id">{{contacto.id}}</h3>
            <h3>Correo: <span>{{contacto.correo}}</span></h3>
            <h3>Teléfono: <span>{{contacto.telefono}}</span></h3>
            <h3>Creación: <span>{{contacto.fechaCreacion}}</span></h3>
            <button class="btn-eliminar" @click="eliminar(index)">Eliminar</button>
        </div>
    </div>
</template>

<style scoped>
    .contactos{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-top: 20px;
    }

    .btn-eliminar{
        background: #e01d1d60;
        outline: none;
        border: none;
        padding: 7px 15px;
        margin: 15px auto;
        display: block;
        transition: .2s all ease;
        cursor: pointer;
        color: #fff;
    }

    .btn-eliminar:hover{
        background: #e01d1d;
    }
    .contacto{
        padding: 20px;
        border: solid 3px #75E6DA;
        margin: 20px 0;
        border-radius: 5px;
    }

    .contacto .id,.contacto .nombre{
        text-align: center;
    }

    .contacto h3{
        line-height: 1.5em;
        color: rgba(255,255,255,.8);
        text-shadow: 2px 2px 1px rgba(0,0,0,.5);
        font-weight: lighter;
        text-align: left;
    }

    .contacto .nombre{
        margin-bottom: 10px;
        color: #fff;
    }

</style>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['contactos'])
    },
    methods: {
        eliminar(index){
            let res = confirm('¿Estas seguro que quisieras eliminar este contacto?');
            if(res){
                this.contactos.splice(index,1);
            }
        }
    }
}
</script>
