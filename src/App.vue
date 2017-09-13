<template>
    <div id="wrapper">
        <nav class="navbar navbar-default">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <i class="glyphicon glyphicon-time"></i>
                    Vue Time Tracker
                </a>
                <ul class="nav navbar-nav">
                    <li><a v-link="'/home'">Home</a></li>
                    <li><a v-link="'/time-entries'">Time Entries</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <div class="col-sm-3">
                
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Hello from './components/Hello'

export default {
    name: 'app',
    components: {
        Hello
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
