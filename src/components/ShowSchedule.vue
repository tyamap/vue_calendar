<template>
  <V-dialog
    persistent
    v-model="showSchedule"
    max-width="290"
    @click:outside="closeDialog"
  >
    <V-card>
      <V-card-title class="headline"
        >{{ schedule.title }}
        <V-spacer></V-spacer>
        <V-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <V-btn v-on="on" v-bind="attrs" small icon @click="deleteSchedule">
              <V-icon>mdi-trash-can-outline</V-icon>
            </V-btn>
          </template>
          <span>delete</span>
        </V-tooltip>
        <V-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <V-btn v-on="on" v-bind="attrs" small icon @click="closeDialog">
              <V-icon>mdi-close</V-icon>
            </V-btn>
          </template>

          <span>close</span>
        </V-tooltip>
      </V-card-title>
      <V-card-text>
        <ul>
          <li><V-icon>mdi-calendar</V-icon> {{ schedule.date }}</li>
          <li>
            <V-icon>mdi-google-maps</V-icon>
            {{ schedule.location ? schedule.location : "none" }}
          </li>
          <li>
            <V-icon>mdi-format-align-left</V-icon>
            {{ schedule.note ? schedule.note : "none" }}
          </li>
        </ul>
      </V-card-text>
    </V-card>
  </V-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["showSchedule", "schedule"]),
  methods: {
    closeDialog: function() {
      this.$store.dispatch("toggleShowSchedule");
    },
    deleteSchedule: function() {
      this.$store.dispatch("deleteSchedule", this.schedule);
      this.$store.dispatch("toggleShowSchedule");
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  display: table;
}
</style>
