<template>
  <div class="schedule">
    <V-list>
      <V-list-item subheader dense v-for="(schedule, i) in schedules" :key="i">
        <V-list-item-content @click.stop="showSchedule(schedule)">
          <V-list-item-title v-text="schedule.title"></V-list-item-title>
        </V-list-item-content>
      </V-list-item>
    </V-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["schedules"],
  data() {
    return{
      schedule: {},
    }
  },
  computed: {
    ...mapGetters(["year", "month"]),
  },
  methods: {
    showSchedule: function(schedule){
      this.$store.dispatch("setSchedule", schedule);
      this.$store.dispatch("toggleShowSchedule");
    }
  },
};
</script>

<style lang="scss" scoped>
$list-dense-min-height: 1em;
.schedule {
  margin: 0;
  padding: 0;
  max-height: calc(100vh / 6 - 45px);
  max-width: calc(100vw / 7 - 1px);
  overflow: scroll;
}
.v-list {
  padding: 0;
}
.v-list--dense .v-list-item .v-list-item__content,
.v-list-item--dense .v-list-item__content {
  padding: 3px;
  cursor: pointer;
}
.v-list--dense .v-list-item,
.v-list-item--dense {
  margin: 2px;
  padding: 0 3px;
  min-height: 15px;
  background-color: #F8BBD0;
  border-radius: 5px;
}
</style>
