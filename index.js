import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import _ from 'lodash';

const QuickActionsMenu = ({ actions, buttonLabel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(isOpen ? 1 : 0) }],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.menu, animatedStyle]}>
        {_.map(actions, (action, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={action.onPress}>
            <Text style={styles.menuItemText}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  menuItem: {
    paddingVertical: 8,
  },
  menuItemText: {
    fontSize: 14,
  },
});

export default QuickActionsMenu;
