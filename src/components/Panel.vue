<template>
    <v-layout row>
        <v-flex xs6 offset-xs3>
            <v-alert :value="error" color="error" icon="warning" class="mb-2">
                {{error}}
            </v-alert>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
                    <slot name="action"></slot>
                </v-toolbar>

                
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <slot>
                        No Slot defined
                    </slot>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: [
        'title'
    ]
    
}
</script>

<style scoped>

</style>
