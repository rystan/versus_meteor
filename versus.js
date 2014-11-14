if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
  Session.setDefault("thumb_left", "img/mike_thumb.jpg");
  Session.setDefault("thumb_right", "img/ben_thumb.jpg");

  Session.setDefault("name_left", "Mike Simons");
  Session.setDefault("name_right", "Ben Rood");

  Template.fight.helpers({
    thumb_left : function () {
       return Session.get("thumb_left");
    },
    thumb_right : function () {
       return Session.get("thumb_right");
    },
    name_left : function () {
       return Session.get("name_left");
    },
    name_right : function () {
       return Session.get("name_right");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
