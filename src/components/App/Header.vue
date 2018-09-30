<template>
    <div id="Header">

        <div class="title">
            <h1>
                Cryptoheadlines
            </h1>
            <p>
                by andrewrico.com
            </p>
        </div>

        <div class="icons">
            <a  v-bind:href="githubUrl" target="_blank" rel="noopener">

                 <i class="fab fa-github"></i>

            </a>

            <a  v-bind:href="twitterUrl" target="_blank" rel="noopener">

                <i class="fab fa-twitter"></i>

            </a> 

            <a  v-bind:href="home" target="_blank" rel="noopener">

                <i class="fa fa-globe"></i>

            </a>   

        </div>

        

    </div>

</template>

<script>
export default {

    
    data(){
        return {
            home:'https://www.andrewrico.com/',
githubUrl:'https://github.com/Andrewrico',
    twitterUrl:'https://twitter.com/andrewrico86',
        }
    }
    
}
</script>

