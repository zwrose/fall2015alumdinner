Session.set("alreadyRSVPd", false);

Template.body.helpers({
  friAttendees: function () {
    return Attendees.find({fri: true});
  },
  satAttendees: function () {
    return Attendees.find({sat: true});
  },
  sunAttendees: function () {
    return Attendees.find({sun: true});
  },
  nonAttendees: function () {
    return Attendees.find({sun: false, sat:false, fri: false});
  },
  checkAlreadyRSVPd: function() {
    return !Session.get("alreadyRSVPd");
  }
});

Template.insertRSVP.events({
  "click .already": function (event) {
    return Session.set("alreadyRSVPd", true);
  }
//   "submit": function (event) {
//     return Session.set("alreadyRSVPd", true);
//   }
});

Template.iveAlreadyRSVPd.events({
  "click .again": function (event) {
    return Session.set("alreadyRSVPd", false);
  }
});
AutoForm.addHooks("insertRSVP", {
  onSuccess: function() {
    return Session.set("alreadyRSVPd", true);
  }
})