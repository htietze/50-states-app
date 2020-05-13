<template>
    <h3 class="m-2">Journal for {{ state.name }} </h3>
</template>

<script>
export default {
    name: 'StateJournal',
    data() {
        return {
            state: {
                name: ''
            }
        }
    },
    mounted() {
        this.state.name = this.$route.params.state
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>