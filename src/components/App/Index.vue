<template>

    <div>

        <Loading :isLoading="isLoading" />

        <div v-if="!isLoading" class="app">

            <Header />

            <Channels :feeds="feeds" :selectedFeed="selectedFeed" @onSelectFeed="handleSelectFeed" />

            <News :articles="articles" :selectedArticle="selectedArticle" @onSelectArticle="handleSelectArticle" />

            <Article :article="selectedArticle" />

        </div>

    </div>

</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
import Channels from './Channels.vue'
import News from './News.vue'
import Article from './Article.vue'
import Loading from '@/components/Loading.vue'

export default {
    name: 'app',
    components: {
        Header,
        Channels,
        News,
        Article,
        Loading
    },
    data() {
        return {
            isLoading: false,
            feeds: [],
            articles: [],
            selectedFeed: null,
            selectedArticle: null
        }
    },

    created() {
        this.getFeeds()
    },

    methods: {
        async getFeeds() {
            this.isLoading = true

            let {
                data
            } = await axios.get('/.netlify/functions/feeds')

            this.feeds = data
            this.isLoading = false
        },

        handleSelectFeed(feed) {
            this.selectedFeed = feed
            this.articles = feed.items
            this.selectedArticle = null
        },
        handleSelectArticle(article) {
            this.selectedArticle = article
        }
    }
};
</script>

<style>
*::-webkit-scrollbar {
    width: 3px;
}

*::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #00837c49;
}

*::-webkit-scrollbar-thumb {
    background-color: #00eeff4b;
}

* {
    outline: none !important;
}

a {
    text-decoration: none !important;
}

ul {
    list-style: none !important;
    margin: 0;
    padding: 0;
}

html {
    display: block;
    overflow: hidden;
    overflow-y: scroll;
    background-color: #0b1717;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxyYWRpYWxHcmFkaWVudCBpZD0idnNnZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN4PSIwJSIgY3k9IjAlIiByPSIxNDEuNDIxMzU2MjM3MzA5NSUiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDJjMmMiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIwLjAxMTAwMDAwMDAwMDAwMDAwMSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNDA0MDQiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIwLjY1Nzk5OTk5OTk5OTk5OTkiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDcyNjI2IiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMSIvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3QgeD0iLTUwIiB5PSItNTAiIHdpZHRoPSIxMDEiIGhlaWdodD0iMTAxIiBmaWxsPSJ1cmwoI3ZzZ2cpIiAvPjwvc3ZnPg==);
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxyYWRpYWxHcmFkaWVudCBpZD0idnNnZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN4PSIwJSIgY3k9IjAlIiByPSIxNDEuNDIxMzU2MjM3MzA5NSUiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDJjMmMiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIwLjAxMTAwMDAwMDAwMDAwMDAwMSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNDA0MDQiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIwLjY1Nzk5OTk5OTk5OTk5OTkiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDcyNjI2IiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMSIvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3QgeD0iLTUwIiB5PSItNTAiIHdpZHRoPSIxMDEiIGhlaWdodD0iMTAxIiBmaWxsPSJ1cmwoI3ZzZ2cpIiAvPjwvc3ZnPg==);
    background-image: -webkit-radial-gradient(left top, ellipse farthest-corner, rgb(0, 44, 44) 1.1%, rgb(20, 4, 4) 65.8%, rgb(7, 38, 38) 100%);
    background-image: radial-gradient(ellipse farthest-corner at left top, rgb(0, 44, 44) 1.1%, rgb(20, 4, 4) 65.8%, rgb(7, 38, 38) 100%);
    background-image: -ms-radial-gradient(left top, ellipse farthest-corner, rgb(0, 44, 44) 1.1%, rgb(20, 4, 4) 65.8%, rgb(7, 38, 38) 100%);
}

@media \0screen\,screen\9 {
    html {
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff002c2c", endColorstr="#ff072626", GradientType=0);
    }
}

html,
body,
#app {

    display: block;
    padding: 0;
    margin: 0;
    min-height: 500px;
    color: #FFF;
    font-family: sans-serif;
    font-weight: 100;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/*
.app
-------------------------------------- */
.app {
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: 1fr;
    width: 80%;
    height: auto;
    margin: auto;
}

/*
#Header 
-------------------------------------- */
#Header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#Header .title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#Header h1 {
    text-align: center;
    margin: 0;
    padding: 0;
    letter-spacing: 5px;
    font-size: 2em;
}

#Header span {
    display: inline;
    align-self: center;
    text-align: left;
    align-self: center;
    text-indent: 10px;
    border-top: 1px solid#fff;
    letter-spacing: 12px;
    font-size: 0.7em;
}

#Header .icons {
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 80px;
    align-items: flex-end;
}

#Header i {
    margin: 4px;
    padding: 4px;
    color: rgb(165, 253, 253);
    font-size: 1.2em;
}

@media screen and (min-width: 768px) {
    #Header {
        height: 20vh;
        min-height: 100px;
        grid-column: 1 / -1;
        flex-direction: row;
        justify-content: space-between;
    }

    #Header h1 {
        letter-spacing: 1px;
        font-size: 3em;
    }

    #Header span {
        letter-spacing: 17px;
        font-size: 0.7em;
    }
}

/*
#Channels #News #Article
-------------------------------------- */
#Channels,
#News,
#Article {
    overflow: hidden;
    overflow-y: scroll;
    min-height: 500px;
    height: 80vh;
}

/*
#Channels 
-------------------------------------- */
#Channels {
    overflow: hidden;
    filter: drop-shadow(0 0 10px rgb(1, 140, 145));
    height: auto;
}

#Channels ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
}

#Channels a {
    display: flex;
    align-items: center;
    padding: 6px;
}

/*
#News 
-------------------------------------- */
#News ul {
    display: grid;
    grid-gap: 16px;
    margin: 16px;
    grid-template-columns: 1fr;
}

#News li {

    text-align: center;
    height: 150px;
    overflow: hidden;
    background: rgb(0, 0, 0);
    border: 0.5px solid rgba(0, 255, 234, 0.575);
    border-radius: 2px;
}

#News a {
    text-align: center;
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

@media screen and (min-width: 1268px) {
    #News ul {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (min-width: 1600px) {
    #News ul {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

/*
#Article 
-------------------------------------- */
#Article {
    display: grid;
    grid-gap: 16px;
    overflow: hidden;
    font-size: 0.9em;
    width: 100%;
    margin: 6px auto;
    padding: 16px;
    min-height: 100px;
    height: auto;
    max-height: 70vh;
    overflow: hidden;
    overflow-y: auto;
    color: rgb(165, 253, 253);
    letter-spacing: 1px;
    background: rgba(0, 0, 0, 0.137);
    filter: drop-shadow(0 0 10px rgb(1, 140, 145));
    border: 1px inset rgba(1, 140, 145, 0.288);
}

#Article h2 {
    color: #fff;
    margin: 0 !important;
    margin-top: 5px;
}

#Article span {
    color: aquamarine;
    font-weight: 900;
}

#Article .link-article {
    color: #00fff2 !important;
    padding: 8px;
    text-align: center;
    margin-right: auto;
    display: inline-flex;
    border: 1px solid #00fff2;
    border-radius: 32px;
}

#Article .link-article:hover {
    background: #00fff2;
    color: #000 !important;
}

/*
active
-------------------------- */
.active-1 {
    overflow: hidden;
    color: cyan;
}

.active-2 {
    overflow: hidden;
    color: #fff;
}

#Channels .active-1 {
    background: #000000be;
    color: aquamarine;
}

#Channels .active-1::before {
    content: ' \00BB';
    margin-right: 4px;
}

#News .active-1 {
    background: #00eeffbe;
    color: #000;
    filter: drop-shadow(0 0 0.75rem rgb(1, 140, 145));
}

#active-2 {
    color: rgb(255, 255, 255);
}

/*
LARGE
---------------------------------------- */
@media screen and (min-width: 1028px) {
    .app {
        display: grid;
        grid-template-columns: 275px 1fr 275px;
        width: 80%;
        height: 100%;
        margin: auto;
    }
}
</style>


