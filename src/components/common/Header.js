import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { headerStyle, textStyle } = styles;
    return (
        <View style={headerStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
};

const styles = {
    headerStyle: {
        height: 60,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#ccc',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5
    },
    textStyle: {
        fontSize: 20,
        color: '#000',
    }
}

export { Header };
