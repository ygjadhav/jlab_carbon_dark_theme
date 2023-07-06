import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the carbon_dark_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'carbon_dark_theme:plugin',
  description: 'A JupyterLab theme extension which follows Carbon design system guidelines.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension carbon_dark_theme is activated!');
    const style = 'carbon_dark_theme/index.css';

    manager.register({
      name: 'carbon_dark_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
