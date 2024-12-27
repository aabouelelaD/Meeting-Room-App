import React from "react";
import { View, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { TimeLineItem } from "./timelineItem";
import { timelineItemInterface } from "../../types/timeline";

//TODO: to be removed after API integration
const data = [
    { time: '14:00', isOccupied: false },
    { time: '14:15', isOccupied: false },
    { time: '14:30', isOccupied: false },
    { time: '14:45', isOccupied: false },
    { time: '15:00', isOccupied: false },
    { time: '15:15', isOccupied: true },
    { time: '14:00', isOccupied: false },
    { time: '14:15', isOccupied: false },
    { time: '14:30', isOccupied: false },
    { time: '14:45', isOccupied: false },
    { time: '15:00', isOccupied: false },
    { time: '15:15', isOccupied: true },
    { time: '14:00', isOccupied: false },
    { time: '14:15', isOccupied: false },
    { time: '14:30', isOccupied: false },
    { time: '14:45', isOccupied: false },
    { time: '15:00', isOccupied: false },
    { time: '15:15', isOccupied: true },
    { time: '14:00', isOccupied: false },
    { time: '14:15', isOccupied: false },
    { time: '14:30', isOccupied: false },
    { time: '14:45', isOccupied: false },
    { time: '15:00', isOccupied: false },
    { time: '15:15', isOccupied: true },
  ];


  const renderItem = ({item, index}: {item: timelineItemInterface, index: number}) => {
    const isLastItem = index === data.length - 1;

    return (
        <TimeLineItem item={item} isLastItem={isLastItem} index={index} />
    )
  }

const TimelineList = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
    <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={40}
    />
    </View>
  );
};

export {TimelineList}