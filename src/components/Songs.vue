<template>
    <panel title="Songs">
        <v-btn :to="{name: 'songs-create'}" slot="action" class="cyan accent-2" light medium absolute right middle fab>
            <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">
            <v-layout>
                <v-flex xs6>
                    <div class="song-title">{{song.title}}</div>
                    <div class="song-artist">{{song.artist}}</div>
                    <div class="song-genre">{{song.genre}}</div>

                    <v-btn dark class="cyan" :to="{name: 'song', params: {songId: song.id}}">View</v-btn>
                </v-flex>
                <v-flex xs6>
                    <img class="album-image" :src="song.albumImage" />
                </v-flex>
            </v-layout>
            
        </div>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {

    components : {
        Panel
    },
    data() {
        return {
            songs: null
        }
    },
    async mounted () {
        //do a request to the backend for all the songs
        let response = await SongsService.index()
        this.songs = response.data
    }
    
}
</script>

<style scoped>
.song{
    padding: 20px;
}
.song-title{
    font-size: 30px;
}
.song-artist{
    font-size: 24px;
}
.song-genre{
    font-size: 18px;
}
.album-image{
    width:70%;
    margin: 0 auto;
}
</style>
