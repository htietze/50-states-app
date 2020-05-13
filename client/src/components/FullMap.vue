<template>
    <div class="full-map p-2">

        <h2>Visited States!</h2>
        <h3>Here's a map of all the states you've visited</h3>

        <div id="map-container">
            <l-map
                ref="map"
                style="height: 100%; width: 100%"
                v-bind:zoom="zoom"
                v-bind:center="center"
                >
                <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
        </div>

    </div>
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer } from 'vue2-leaflet'

let icon = L.icon({
    iconUrl: require('../assets/icons8-push-pin-64.png'),
    iconSize: [30, 30],
    iconAnchor: [15, 15]
})

export default {
    name: 'FullMap',
    components: {
        LMap, LTileLayer
    },
    data() {
        return {
            states: [],
            visitedStates: [],
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 4,
            center: [38, -96]
        }
    },
    mounted() {
        this.getAll()
    },
    methods: {
        getAll() {
            this.$stateService.getAll().then(data => {
                this.states = data
                console.log(this.states)
                this.findVisited(this.states)
            })
        },
        findVisited(allStates) {
            allStates.forEach(element => {
                if (element.visited) {
                    this.visitedStates.push(element)
                }
            })
            this.addMarkers()
        },
        addMarkers() {
            this.visitedStates.forEach(element => {
                let lat = element.lat
                let long = element.lon
                L.marker([lat, long], {icon: icon})
                    .bindPopup(`${element.name}`)
                    .addTo(this.$refs.map.mapObject)
            })
        }
    }
}
</script>

<style scoped>
    #map-container {
        height: 30em;
    }
</style>