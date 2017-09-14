<template>
    <div>
        <button
            v-if="$route.path !== '/time-entries/log-time'"
            v-if="'/time-entries/log-time'"
            class = "btn btn-primary">
            Log Time
        </button>

        <div v-if="$route.path === '/time-entries/log-time'">
            <h3>Log Time</h3>
        </div>

        <hr>

        <router-view></router-view>
        
        <div class="time-entries">
            <p v-if="!timeEntries.length"><strong>No time entries yet</strong></p>
            <div class="list-group">
                <a class="list-group-item" v-for="timeEntry in timeEntries">
                    <div class="row">
                        <div class="col-sm-2 user-detail">
                            <img: src="timeEntry.user.image" class="avatar img-circle img-responsive" />
                            <p class="text-center">
                                <strong>
                                    {{ timeEntry.user.firstName }}
                                    {{ timeEntry.user.lastName }}
                                </strong>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>