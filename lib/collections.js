Attendees = new Mongo.Collection("attendees");

AttendeeSchema = new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name"
  },
  lastName: {
    type: String,
    label: "Last Name"
  },
  classYear: {
    type: String,
    label: "Class Year",
    min: 4,
    max: 4
  },
  fri: {
    type: Boolean,
    label: "Will attend Friday",
    optional: true
  },
  friNum: {
    type: Number,
    label: "Number of attendees Friday",
    optional: true
  },
  sat: {
    type: Boolean,
    label: "Will attend Saturday",
    optional: true
  },
  satNum: {
    type: Number,
    label: "Number of attendees Saturday",
    optional: true
  },
  sun: {
    type: Boolean,
    label: "Will attend Sunday",
    optional: true
  },
  sunNum: {
    type: Number,
    label: "Number of attendees Sunday",
    optional: true
  },
  comments: {
    type: String,
    label: "Notes or Comments",
    optional: true
  },
  createdOn: {
    type: Date,
    label: "RSVP submitted on",
    defaultValue: new Date()
  }
});

Attendees.attachSchema(AttendeeSchema);