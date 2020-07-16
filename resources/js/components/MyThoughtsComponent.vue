<template>
<div class="container">

    <form-component @new="addThought"></form-component> <!-- se recibe los datos que emite form component en el evento new y llama el metodo add -->

    <thought-component 
      v-for="(thought, index) in thoughts" 
      :key="thought.id" 
      :thought = thought
      @save="saveThought(index, ...arguments)"
      @delete="deleteThought(index)"> 
    </thought-component>

</div>
</template>

<script>
    export default {
        data(){
          return {
            thoughts: [
            // {
            //     'id' : 1, 
            //     'description': 'xyz',
            //     'created_at': '10/10/10'
            // }
            ]
          }
        },
        methods: {
            addThought(thought){ //ejecuta el metodo, recibe el parametro y lo agrega al array thoughts
              this.thoughts.push(thought)
            },
            deleteThought(index){
              this.thoughts.splice(index, 1);
            },
            saveThought(index, thought){
              this.thoughts[index] = thought;
            }
        },
        mounted() {
            //console.log('Component mounted.')
            axios.get('/thoughts').then(response => {
              this.thoughts = response.data;
            });
        }
    }
</script>
