import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { timelineItemInterface } from '../../types/timeline';

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

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeText: {
        color: 'white',
        fontSize: 20,
    },
    circleStyle: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        position: 'absolute',
        alignSelf: 'center',
    },
    lineStyle: {
        width: 3,
        height: 40,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: 10,
    },
});

export { TimeLineItem };