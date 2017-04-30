/*jshint esversion: 6*/
import { Class } from 'meteor/jagi:astronomy';
import {Mamal} from './humans.js';

// Child class
export const Human = Mamal.inherit({
    name: 'Human',
    fields: {
        language: String
    }
});
