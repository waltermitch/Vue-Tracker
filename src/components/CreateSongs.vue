<template>
<v-layout>
    <v-flex xs8>
        <panel title="Song Metadata">
            <v-text-field label="Title: " v-model="song.title" required
            :rules="[rules.required]"
            ></v-text-field>
            <v-text-field label="Artist: " :rules="[rules.required]" v-model="song.artist"></v-text-field>
            <v-text-field label="Genre: " :rules="[rules.required]" v-model="song.genre"></v-text-field>
            <v-text-field label="Album: " :rules="[rules.required]" v-model="song.album"></v-text-field>
            <v-text-field label="Album Image URL: " :rules="[rules.required]" v-model="song.albumImage"></v-text-field>
            <v-text-field label="Youtube ID: " :rules="[rules.required]" v-model="song.youtubeId"></v-text-field>
        </panel>
    </v-flex>

    <v-flex xs4>
        
        <v-text-field label="Lyrics: " :rules="[rules.required]" v-model="song.lyrics" multi-line="true"></v-text-field>
        <v-text-field label="Tab: " :rules="[rules.required]" v-model="song.tab" multi-line="true"></v-text-field>
        <v-alert :value="error" color="error" icon="warning" class="mb-2">{{error}}</v-alert>
        <v-btn class="cyan" block dark @click="createSong()">Save Song</v-btn>
    </v-flex>
</v-layout>
    
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {

    components : {
        Panel
    },
    data () {
        return {
            song: {
                "title": null,
                "artist": null,
                "genre": null,
                "album": null,
                "albumImage": null,
                "youtubeId": null,
                "lyrics": null,
                "tab": null
            },
            error: null,
            rules: {
                required: (value) => !!value || 'Required.'
            }
        }
    },
    methods: {
       async  createSong() {
           const allfilled = Object.keys(this.song).every(key => !!this.song[key])
           if(!allfilled){
               this.error = 'Please fill in all the required fields.'
               return
           }
           try{
                await SongsService.create(this.song)
                this.$router.push({'name': 'songs'})
           }catch(err){
               console.log(err)
           }
            
        }
    }
}
</script>

<style scoped>

</style>
