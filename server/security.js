Attendees.permit(['insert']).apply();
Attendees.permit(['update','remove']).never().apply();