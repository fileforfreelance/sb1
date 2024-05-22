import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Free Online Tools',
  // brandUrl: 'https://appweb.cc',
  brandUrl: pkg.homepage,
  brandImage: 'https://movie.appweb.cc/wp-content/uploads/2017/03/doasfoplay.png',
  brandTarget: '_self',

  showRoots: true,
});