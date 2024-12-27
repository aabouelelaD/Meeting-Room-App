import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { timelineItemInterface } from '../../types/timeline';
import { styles } from './timelineItem.styles';

interface Props {
    item: timelineItemInterface;
    isLastItem?: boolean;
    index: number;
}

const TimeLineItem: React.FC<Props> = ({ item, isLastItem, index }) => {
    const isEven = index % 2 === 0;
    const { container, rowContainer, timeText, lineStyle, circleStyle } = styles;
    const marginFromPoint = 120;

    return (
        <View style={container}>
            <View style={rowContainer}>
                {isEven && <Text style={[timeText, { marginLeft: marginFromPoint }]}>{item?.time}</Text>}
                <View style={[circleStyle, { backgroundColor: item?.isOccupied ? 'red' : 'green' }]} />
                {!isEven && <Text style={[timeText, { marginRight: marginFromPoint }]}>{item?.time}</Text>}
            </View>
            {!isLastItem && <View style={lineStyle} />}
        </View>
    );
};

export { TimeLineItem };