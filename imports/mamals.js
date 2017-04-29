/*jshint esversion: 6*/
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

export const Mamals = new Mongo.Collection('mamals');

// Parent class
export const Mamal = Class.create({
    name: 'Mamal',
    collection: Mamals,
    typeField: 'type',
    fields: {
        name: String
    }
});

if (Meteor.isServer) {

  Meteor.methods({
    'insertHuman' (doc) {
      return doc.save();
    }
  });

  Meteor.publish('allMamals', function() {
    // Return all designs - no filtering
    const mamals = Mamals.find({});
    if (mamals) {
      return mamals;
    }
    return this.ready();
  });
}
