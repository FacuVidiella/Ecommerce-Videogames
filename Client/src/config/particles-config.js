const particleConfig = {
    particles: {
      number: {
        value: 34,
        density: {
          enable: true,
          value_area: 881.8766334760375
        }
      },
      color: {
        value: "#030503"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 4,
          color: "#ca9013"
        },
        polygon: {
          nb_sides: 10
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 0.8791208791208792,
          opacity_min: 0.04795204795204795,
          sync: true
        }
      },
      size: {
        value: 15.782952832645451,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 3.996003996003996,
          sync: true
        }
      },
      line_linked: {
        enable: true,
        distance: 157.82952832645452,
        color: "#007d5c",
        opacity: 1,
        width: 2.683101981549727
      },
      move: {
        enable: true,
        speed: 1.7,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "bubble"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 316.71011279752463,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 89.32849335314796,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }

export default particleConfig