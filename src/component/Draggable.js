/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { StyleSheet, View, PanResponder, Animated, Text } from 'react-native';

export default class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY(),
    };

    const {
      pan: { x, y },
    } = this.state;

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: x,
          dy: y,
        },
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.setState({
            showDraggable: false,
          });
        }
      },
    });
  }

  isDropZone = gesture => {
    const { dropZoneValues } = this.state;
    const dz = dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  };

  setDropZoneValues = event => {
    this.setState({
      dropZoneValues: event.nativeEvent.layout,
    });
  };

  renderDraggable = () => {
    const { showDraggable, pan } = this.state;
    if (showDraggable) {
      return (
        <View style={styles.draggableContainer}>
          <View {...this.panResponder.panHandlers} style={[pan.getLayout(), styles.circle]}>
            <Text style={styles.text}>Drag me!</Text>
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View onLayout={this.setDropZoneValues} style={styles.dropZone}>
          <Text style={styles.text}>Drop me here!</Text>
        </View>
        {this.renderDraggable()}
      </View>
    );
  }
}

const CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'skyblue',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
});
