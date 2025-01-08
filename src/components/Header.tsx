import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../common/Text';
import {SvgPeople, SvgScreen, SvgDesk} from '../../assets/icons';
import { Colors } from '../theme/colors';

interface HeaderProps {
  dateString: string;
  time: string;
}

export const Header = ({dateString, time}: HeaderProps) => (
  <View style={styles.headerContainer}>
    <Text style={styles.dateText} variant="bold">
      {dateString}
    </Text>
    <View style={styles.statsContainer}>
      <RoomStat icon={<SvgPeople />} value="5" />
      <RoomStat icon={<SvgScreen />} value="1" />
      <RoomStat icon={<SvgDesk />} value="2" />
    </View>
    <Text style={styles.timeText} variant="bold">
      {time}
    </Text>
  </View>
);

const RoomStat = ({icon, value}: {icon: React.ReactNode; value: string}) => (
  <View style={styles.statItem}>
    {icon}
    <Text variant="bold" style={styles.statValue}>
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.3,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    color: Colors.WHITE,
    marginLeft: 10,
  },
  dateText: {
    fontSize: 30,
    color: Colors.WHITE,
  },
  timeText: {
    fontSize: 30,
    color: Colors.WHITE,
  },
});
