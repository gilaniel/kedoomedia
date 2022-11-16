import './src/styles/global.scss';

import { shouldPolyfill } from '@formatjs/intl-numberformat/should-polyfill';

function polyfill(locale) {
  if (shouldPolyfill()) {
    require('@formatjs/intl-numberformat/polyfill');
  }

  if (Intl.NumberFormat.polyfilled) {
    switch (locale) {
      default:
        require('@formatjs/intl-numberformat/locale-data/en');
        break;
      case 'ru':
        require('@formatjs/intl-numberformat/locale-data/ru');
        break;
    }
  }
}

export const wrapPageElement = ({ element, props }, pluginOptions) => {
  polyfill(props.pageContext.language);
  return element;
};
