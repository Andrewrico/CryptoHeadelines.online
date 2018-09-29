<template>

    <div id="Channels">

        <ul v-if="feeds && feeds.length">

            <li v-for="feed in feeds" :key="feed.title">

                <Link @click.native="selectFeed(feed)" :isActive="isActive(feed.title)" :linkText="feed.title" />

            </li>

        </ul>

    </div>

</template>


<script>
import Link from './Link.vue'

export default {

    name: 'Channels',

    components: {
        Link
    },

    props: ['feeds', 'selectedFeed'],

    methods: {
        selectFeed(feed) {
            this.$emit('onSelectFeed', feed)
        },
        isActive(title) {
            if (!this.selectedFeed) return ''
            return title === this.selectedFeed.title
        }

    }
}
</script>
