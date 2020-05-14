<template>
    <div class="state-detail p-2">

        <h2>The State of {{state.name}}</h2>

        <p v-if="state.visited">You have visited this state</p>
        <p v-else>You have not visited this state</p>

        <div id="map-container">
            <l-map
                ref="map"
                style="height: 100%; width: 100%"
                v-bind:center="startCenter"
                v-bind:zoom="zoom">
                <l-marker 
                    v-bind:lat-lng="markerLatLong"
                    v-bind:icon="icon"
                    ></l-marker>
                <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
        </div>

    </div>
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
    name: 'StateDetail',
    components: {
        LMap, LTileLayer, LMarker
    },
    data() {
        return {
            state: {
                name: ''
            },
            startCenter: [40, -90],
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 0,
            markerLatLong: [0, 0],
            icon: L.icon({
                iconUrl: require('../assets/icons8-push-pin-64.png'),
                iconSize: [50, 50],
                iconAnchor: [30, 30]
            })
        }
    },
    mounted() {
        this.state.name = this.$route.params.state
        // this.$refs.map.mapObject.dragging.disable()
        this.fetchStateData()
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOne( this.state.name ).then( data => {
                this.state = data
                this.zoom = data.zoom
                this.center = [data.lat, data.lon]
                this.markerLatLong = this.center
                // flies to center of the states coords.
                this.$nextTick( () => {
                    this.$refs.map.mapObject.flyTo(this.center, this.zoom)
                })
            }).catch( err => console.error(err))
        }
    }
}
</script>

<style scoped>
    #map-container {
        height: 30em;
    }
</style>