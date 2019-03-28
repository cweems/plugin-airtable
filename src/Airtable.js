import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import "./styles.css";



class Airtable extends Component {

  constructor() {
    super();

    this.state = {
      currentTab: 0
    }
  }

  componentWillReceiveProps(props) {

    if (props.task) {
      let tabIndex = parseInt(props.task.attributes.intent) - 1;

      console.log("TABABAB", tabIndex);
      this.setState({
        currentTab: tabIndex
      })
    }
  }

  donationIframe() {
    return { __html: `<iframe class="airtable-embed" src="https://airtable.com/embed/shrww4Ej1FLEwhW6c?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="${window.innerHeight}"></iframe>` }
  }

  suppliesIframe() {
    return { __html: `<iframe class="airtable-embed" src="https://airtable.com/embed/shrfhjKnaBinh7ONa?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="${window.innerHeight}"></iframe>` }
  }

  render() {

    return (
      <Tabs selectedIndex={this.state.currentTab} onSelect={tabIndex => this.setState({ currentTab: tabIndex })}>
        <TabList>
          <Tab>Donation Intake</Tab>
          <Tab>Available Supplies</Tab>
        </TabList>

        <TabPanel>
          <div dangerouslySetInnerHTML={this.donationIframe()}></div>
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={this.suppliesIframe()}></div>
        </TabPanel>
      </Tabs>
    );
  }

};

export default Airtable;
