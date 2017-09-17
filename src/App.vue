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
                <sidebar :time="totalTime"></sidebar>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar.vue'

    export default {
        components: {'sidebar': Sidebar},
        data() {
            return {
                //start with the same value as our first time entry.
                totalTime: 1.5
            }
        },
        events: {
            timeUpdate(timeEntry) {
                this.totalTime +=parseFloat(timeEntry.totalTime)
            },
            deleteTime(timeEntry) {
                this.totalTime -=parseFloat(timeEntry.totalTime)
            }
        }
    }
</script>

