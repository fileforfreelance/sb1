// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/addon-designs';

import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.light,
    },
  },
};

export default preview;