import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function (date, dateFormat = 'LL') {
  if (!date) {
    return ''
  }
  return moment(date).format(dateFormat)
})