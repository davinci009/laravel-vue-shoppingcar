<template>
    <div class="row justify-content-center mb-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">¿En que estas pensando?</div>

                <div class="card-body">
                    <form action="" v-on:submit.prevent="newThought()">
                        <div class="form-group">
                            <label for="thought"></label>
                            <input 
                            type="text" 
                            class="form-control" 
                            name="thought" 
                            v-model="description"
                            >
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar Pensamiento</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                description: ''
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            newThought(){
                const params = {
                    description: this.description
                };
                this.description = '';
                
                axios.post('/thoughts', params).then( response => {
                    // console.log(data);
                    const thought = response.data;
                    this.$emit('new', thought);
                });
                // let thought = {'id': 2,'description': this.description,'created_at': '11/22/2020'};
            }
        }
    }
</script>
