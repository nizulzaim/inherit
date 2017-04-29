import { Template } from 'meteor/templating';
import { Class } from 'meteor/jagi:astronomy';
import { Human } from '../imports/humans.js';
import { Mamal, Mamals } from '../imports/mamals.js';

import './main.html';

Template.body.onCreated(function() {
  Meteor.subscribe('allMamals');
});

Template.body.events({
  'submit form': function(event) {
    event.preventDefault();

    let person = new Human();

    const target = event.target;
    const name = target.name.value;
    const language = target.language.value;

    person.name = name;
    person.language = language;

    Meteor.call('insertHuman', person, function(error, result) {
      //console.log(`Error: ${error}`);
      //console.log(`Result: ${result}`);
    });

    target.name.value = "";
    target.language.value = "";
  }
});

Template.body.helpers({
  humans() {
    return Mamals.find().fetch();
  }
});
