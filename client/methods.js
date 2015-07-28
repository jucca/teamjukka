Meteor.methods({
  addPhoto: function (imageData) {
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Photos.insert({source: imageData, userId: Meteor.userId(), createdAt: new Date()});
  },

  likePhoto: function (photo) {
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Photos.update({_id: photo._id}, {$inc: {'numberOfLikes': 1}, $addToSet: {'likedUserIds': Meteor.userId()}});
  },

  addComment: function (photo, comment) {
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    var commentId = Comments.insert({body: comment, userId: Meteor.userId(), createdAt: new Date()});
    Photos.update({_id: photo._id}, {$push: {commentIds: commentId}});
  }
});