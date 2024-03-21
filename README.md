# react-native-quick-actions-menu

A customizable React Native component for creating quick actions menus.

## Installation

```bash
npm install react-native-quick-actions-menu
```

## Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import QuickActionsMenu from 'react-native-quick-actions-menu';

const MyComponent = () => {
  const actions = [
    { label: 'Action 1', onPress: () => console.log('Action 1 pressed') },
    { label: 'Action 2', onPress: () => console.log('Action 2 pressed') },
    // Add more actions as needed
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <QuickActionsMenu actions={actions} buttonLabel="Toggle Menu" />
    </View>
  );
};

export default MyComponent;
```

## Props

- `actions`: An array of objects representing the actions in the menu. Each object should have `label` and `onPress` properties.
- `buttonLabel` (optional): The label text for the button to toggle the menu. Default is "Toggle Menu".
