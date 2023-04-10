const config = {
  camera: {
    type: 'PerspectiveCamera',
  },
  render: {
    type: 'WebGLRenderer',
  },
  lights: [
    {
      name: 'ambientLight',
      type: 'AmbientLight',
    },
    {
      name: 'pointLight',
      type: 'PointLight',
      position: [100, 100, 100],
      castShadow: true,
    },
  ]
}

export default config