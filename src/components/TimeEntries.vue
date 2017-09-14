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

                        <div class="col-sm-2 text-center time-block">
                            <h3 class="list-group-item-text total-time">
                                <i class="glyphicon glyphicon-time"></i>
                                {{ timeEntry.totalTime }}
                            </h3>
                            <p class="label label-primary text-center">
                                <i class="glyphicon glyphicon-calendar"></i>
                                {{ timeEntry.date }}
                            </p>
                        </div>

                        <div class="col-sm-7 comment-section">
                            <p>{{ timeEntry.comment }}</p>
                        </div>

                        <div class="col-sm-1">
                            <button class="btn btn-xs btn-danger delete-button"
                                @click="deleteTimeEntry(timeEntry)">
                                X
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>