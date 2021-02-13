import React from 'react';
import {
  Tabs,
  Tab,
} from 'carbon-components-react';

const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};

const NewExamTab = () => {
  return (
    <Tabs {...props.tabs} aria-label="Tab navigation">
      <Tab {...props.tab} label="Първи триместър">
        <p>Първи триместър</p>
      </Tab>
      <Tab {...props.tab} label="Близнаци">
        <p>Първи триместър - близнаци</p>
      </Tab>
      <Tab {...props.tab} label="Втори триместър">
        <p>Втори триместър</p>
      </Tab>  
      <Tab {...props.tab} label="Втори триместър">
        <p>Втори триместър</p>
      </Tab>           
    </Tabs>

  );
}

export default NewExamTab;