import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import * as THREE from 'three';
// import '../imports/client/lib/hello-three'
import '../imports/client/lib/first-person'


import './main.html';

var camera, scene, renderer;
var geometry, material, mesh;

Template.controls.onRendered(()=> {
  Meteor.threejs.fps('rgb(0,0,25)');
  // Meteor.threejs.deviceOrient();
})