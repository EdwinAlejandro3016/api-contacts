<template>
    <div class="crear-contacto">
        <h2 class="titulo">Crea un nuevo Contacto!</h2>
        <div class="form-crear">
            <form>
                <input type="text" placeholder="Nombres" name="nombres" v-model="nombres" maxlength="80">
                <input type="text" placeholder="Apellidos" name="apellidos" v-model="apellidos" maxlength="80">
                <input type="email" placeholder="Email" name="email" v-model="correo">
                <input type="text" placeholder="Telefono" name="telefono" v-model="telefono" maxlength="20">
                <input type="text" placeholder="Foto( URL )" name="foto" v-model="foto" maxlength="255">
                <button type="submit" @click="agregar">Agregar</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

    .crear-contacto h2{
        text-align: center;
        margin: 10px 0;
    }

    .form-crear form{
        max-width: 700px;
        width: 90%;
        margin: auto;
    }

    .form-crear button{
        background: #75e6da60;
        outline: none;
        border: none;
        padding: 7px 15px;
        margin: 15px auto;
        display: block;
        transition: .2s all ease;
        cursor: pointer;
        color: #fff;
    }

    .form-crear button:hover{
        background: #75e6da;
    }
    .form-crear form input{
        border: none;
        outline: none;
        background: none;
        display: block;
        width: 100%;
        padding: 10px 7px;
        border-bottom: solid 3px #75E6DA;
        color: #fff;
    }
</style>

<script>
export default {
    data(){
        return {
            nombres: null,
            apellidos: null,
            correo: null,
            telefono: null,
            foto: null,
        }
    },
    methods: {
         agregar(e){
            e.preventDefault();
            let nombres = this.nombres;
            let apellidos = this.apellidos;
            let correo = this.correo;
            let telefono = this.telefono;
            let foto = this.foto;
            // this.contactos.push(this.nombres);
            // console.log(this.contactos)
            // validacion de campos vacios
            if(!nombres || !apellidos || !correo || !telefono || !foto){
                alert('Debes rellenar todos los campos');
                return false;
            }
            // validar longitud de los inputs
            //pueden ajustarlo desde las herramientas de desarrollador validar!!!
            if(nombres.length > 80 || apellidos.length > 80){
                alert('Maximo 80 caracteres en los nombres y apellidos')
                return false;
            }
             if(telefono.length > 20){
                alert('Maximo 20 caracteres en el numero de telefono');
                return false;
            }
            if(foto.length > 255){
                alert('Maximo 255 caracteres en la direccion de la imagen');
                return false;
            }
            const date = new Date();
            let day = date.getDay();
            let month = date.getMonth();
            let year = date.getFullYear();
            let id = Number(localStorage.getItem('id'));
            console.log(id++)
            localStorage.setItem('id',id++);
            // https://th.bing.com/th/id/OIP.LRZkPHSxI1Gssby2xshObwHaH3?pid=ImgDet&rs=1
            let contacto = {
                id: localStorage.getItem('id'),
                nombres,
                apellidos,
                correo,
                telefono,
                foto,
                fechaCreacion: `${day}/${month}/${year}`
            }
            this.$store.state.contactos.push(contacto);

            let contactos = JSON.stringify(this.$store.state.contactos);
            
            if (typeof(Storage) !== "undefined") {
            // LocalStorage disponible
            localStorage.setItem("contactos", contactos);
            }

            this.nombres = '';
            this.apellidos = '';
            this.correo = '';
            this.telefono = '';
            this.foto = '';

        }
    }
}
</script>