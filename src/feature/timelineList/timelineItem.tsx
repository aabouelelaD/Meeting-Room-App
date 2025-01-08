import React from 'react';
import { View, StyleSheet } from 'react-native';
import { timelineItemInterface } from '../../types/timeline';
import { styles } from './timelineItem.styles';
import { Colors } from '../../theme/colors';
import { Text } from '../../common/Text';

interface Props {
    item: timelineItemInterface;
    isLastItem?: boolean;
    index: number;
}

const TimeLineItem: React.FC<Props> = ({ item, isLastItem, index }) => {
    const isEven = index % 2 === 0;
    const { container, rowContainer, lineStyle, circleStyle } = styles;

    const getTimeTextStyle = (side: string) => ({
        color: Colors.WHITE,
        fontSize: 20,
        marginLeft: side === 'left' ? 120 : 0,
        marginRight: side === 'right' ? 120 : 0,
    });

    return (
        <View style={container}>
            <View style={rowContainer}>
                {isEven && <Text variant="bold" style={getTimeTextStyle('left')}>{item?.time}</Text>}
                <View style={[circleStyle, { backgroundColor: item?.isOccupied ? Colors.RED : Colors.PRIMARY }]} />
                {!isEven && <Text variant="bold" style={getTimeTextStyle('right')}>{item?.time}</Text>}
            </View>
            {!isLastItem && <View style={lineStyle} />}
        </View>
    );
};

export { TimeLineItem };