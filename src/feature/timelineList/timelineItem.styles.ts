import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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