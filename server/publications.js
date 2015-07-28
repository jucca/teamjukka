    Meteor.publish('photos', function () {
      return Photos.find({});
    });

    Meteor.publish('users', function () {
      return Meteor.users.find();
    });

    Meteor.publish('comments', function () {
      return Comments.find({});
    });
  