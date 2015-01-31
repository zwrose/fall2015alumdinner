Template.body.helpers({
  friAttendees: function () {
    return Attendees.find({fri: true});
  },
  satAttendees: function () {
    return Attendees.find({sat: true});
  },
  sunAttendees: function () {
    return Attendees.find({sun: true});
  }
});
