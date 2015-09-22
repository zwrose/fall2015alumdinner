Session.set("alreadyRSVPd", false);

Template.body.helpers({
  friAttendees: function () {
    return Attendees.find({fri: true}, {sort: {createdOn: -1}});
  },
  satAttendees: function () {
    return Attendees.find({sat: true}, {sort: {createdOn: -1}});
  },
  sunAttendees: function () {
    return Attendees.find({sun: true}, {sort: {createdOn: -1}});
  },
  nonAttendees: function () {
    return Attendees.find({noAttend: true}, {sort: {createdOn: -1}});
  },
  checkAlreadyRSVPd: function() {
    return !Session.get("alreadyRSVPd");
  }
});

Template.insertRSVP.events({
  "click .already": function (event) {
    Session.set("alreadyRSVPd", true);
    return $(window).scrollTop($('#flipcard').offset().top);
  },
  "change #fricheck": function(event) {
    return $('#fripeeps').toggleClass("glow");
  },
  "change #satcheck": function(event) {
    return $('#satpeeps').toggleClass("glow");
  },
  "change #suncheck": function(event) {
    return $('#sunpeeps').toggleClass("glow");
  }
});

Template.iveAlreadyRSVPd.events({
  "click .again": function (event) {
    return Session.set("alreadyRSVPd", false);
  }
});
AutoForm.addHooks("insertRSVP", {
  onSuccess: function() {
    Session.set("alreadyRSVPd", true);
    return $(window).scrollTop($('#flipcard').offset().top);
  }
})
