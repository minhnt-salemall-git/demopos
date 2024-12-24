export default {
    component: (props) => ({
      component: 'svg',
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        role: 'img',
        'aria-label': props.name,
      },
      children: [
        {
          component: 'path',
          attrs: {
            d: props.path, // SVG path data
          },
        },
      ],
    }),
    aliases: {
      'custom-home': {
        component: 'custom-icon',
        props: {
          path: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', // Example SVG path for "home"
        },
      },
    },
  };
  