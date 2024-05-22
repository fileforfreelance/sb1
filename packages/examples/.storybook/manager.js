import { addons } from '@storybook/manager-api';
import yourTheme from './YourTheme';
import favicon from './assets/favicon1.svg';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

addons.setConfig({
  theme: yourTheme,
});