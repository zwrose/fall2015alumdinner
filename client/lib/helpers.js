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
    Session.set("alreadyRSVPd", true);
    return $(window).scrollTop($('#insertRSVP').offset().top);
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
    Session.set("alreadyRSVPd", true);
    return $(window).scrollTop($('#insertRSVP').offset().top);
  }
})