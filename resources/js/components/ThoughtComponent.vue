<template>
    <div class="row justify-content-center mb-3">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Publicado en {{ thought.created_at }} - Actualizado en {{ thought.updated_at }}</div>

                <div class="card-body">
                    <input v-if="editMode" type="text" class="form-control" v-model="thought.description">
                    <p v-else>{{ thought.description }}</p>
                </div>

                <div class="card-footer">
                    <button v-if="editMode" class="btn btn-success" v-on:click="onClickSave()">Guardar
                    </button>
                    <button v-else class="btn btn-primary" v-on:click="onClickEdit()">Editar
                    </button>


                    <button class="btn btn-secondary" v-on:click="onClickDelete()">Eliminar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['thought'], //thought viene externo no es necesario dentro de data
        data(){
            return {
                // thought : {
                //     'id' : '',
                //     'description': '',
                //     'created_at': ''
                // }
                editMode: false, //controla el modo edicion
            }
        },
        methods: {
            onClickDelete() {
                axios.delete(`/thoughts/${this.thought.id}`).then(() => {
                this.$emit('delete');
                })
            },
            onClickEdit() {
                this.editMode = true;
            },
            onClickSave() {
                const params = {
                    description: this.thought.description
                };

                axios.put(`/thoughts/${this.thought.id}`, params).then(response => {
                this.editMode = false;
                const thought = response.data;
                this.$emit('save', thought);
                });
            }
        }
        ,
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
