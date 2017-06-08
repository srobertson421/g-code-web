import React, { Component } from 'react';
import * as THREE from 'three';

class Renderer extends Component {
  constructor(props) {
    super(props);

    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }

  componentDidMount() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    this.camera.position.z = 100;
    this.renderer = new THREE.WebGLRenderer();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.refs.renderArea.appendChild(this.renderer.domElement);

    let light = new THREE.DirectionalLight(0xFFFF00);
    light.position.set(10, 0, 25);
    this.scene.add(light);
  }

  render() {
    return (
      <div ref="renderArea"></div>
    );
  }
}

export default Renderer;
