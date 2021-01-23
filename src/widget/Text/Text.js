import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../themes/colors';

const TextCustom = props => {
    const {
        children,
        style,
        mode,
        decoration,
        position,
        color,
        onPress,
        onRef,
        underline,
        numberOfLines,
    } = props;

    const color_style = color && {color};
    const underline_style = underline && styles.underline;

    return (
        <Text
            onRef={onRef}
            onPress={onPress}
            style={[
                styles.default,
                mode_styles[mode],
                decoration_styles[decoration],
                position_styles[position],
                color_style,
                style,
                underline_style]}
            numberOfLines={numberOfLines}>
            {children}
        </Text>
    );
};

Text.propTypes = {
    decoration: PropTypes.oneOf(['bold', 'medium', 'regular', 'demi']),
    position: PropTypes.oneOf(['left', 'center', 'right']),
    mode: PropTypes.string,
};

const styles = StyleSheet.create({
    default: {
        fontFamily: 'Avenir Next LT Pro Regular',
        color: colors.blackBekko,
        fontSize: 12,
    },
    underline: {
        textDecorationLine: 'underline',
    },
});

const mode_styles = StyleSheet.create({
    title: {
        fontFamily: 'Avenir Next LT Pro Bold',
        color: colors.blackBekko,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 20,
    },
    description: {
        fontFamily: 'Avenir Next LT Pro Regular',
        color: colors.blackBekko,
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 16,
    },
});

const decoration_styles = StyleSheet.create({
    bold: {fontFamily: 'Avenir Next LT Pro Bold'},
    medium: {fontFamily: 'Avenir Next LT Pro Medium'},
    regular: {fontFamily: 'Avenir Next LT Pro Regular'},
    demi: {fontFamily: 'Avenir Next LT Pro Demi'},
});

const position_styles = StyleSheet.create({
    left: {textAlign: 'left'},
    center: {textAlign: 'center'},
    right: {textAlign: 'right'},
});

export default TextCustom;
