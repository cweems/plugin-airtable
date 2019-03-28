import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import Airtable from './Airtable';

const PLUGIN_NAME = 'AirtablePlugin';

export default class AirtablePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    var link = document.createElement( 'link' );
    link.rel  = 'stylesheet';
    link.href = 'https://telemagenta-herring-9688.twil.io/assets/styles.css';
    document.head.appendChild( link );

    flex.AgentDesktopView.defaultProps.splitterOptions = {
      minimumSecondPanelSize: '70%',
    }

    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      flex.CRMContainer.Content.replace(<Airtable key={'Airtable'} task={task} />)
    }
  }
}
