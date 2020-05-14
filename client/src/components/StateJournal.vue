<template>
    <div>
        <h3 class="m-2">Journal for {{ state.name }} </h3>

        <label for="edit">edit?</label>
        <input id="edit" type="checkbox" v-model="edit">

        <div v-if="edit">
        <textarea id="journal" rows="10" cols="50" v-bind="state.journal">
        </textarea>
        <br>
        <button class="btn btn-primary mt-2" type="button"
            v-on:click="updateJournal(state.name, state.journal), edit=false">
                Save Journal
        </button>
        </div>

        <p id="savedJournal" v-else="">
            {{ state.journal }}
        </p>

    </div>
</template>

<script>
export default {
    name: 'StateJournal',
    data() {
        return {
            state: {
                name: '',
                journal: ''
            },
            edit: ''
        }
    },
    mounted() {
        this.state.name = this.$route.params.state
        this.fetchStateData()
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOne( this.state.name ).then( data => {
                this.state = data
            })
        },
        updateJournal(stateName, stateJournal) {
            this.$stateService.setJournal(stateName, stateJournal).then( ()  => {
                this.fetchStateData()
            })
        }
    }
}
</script>

<style scoped>



</style>