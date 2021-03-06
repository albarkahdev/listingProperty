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
    label_tab: {
        fontFamily: 'Avenir Next LT Pro Demi',
        textAlign: 'left',
        fontSize: 14,
        lineHeight: 18,
    },
    sub_titile_card: {
        fontFamily: 'Avenir Next LT Pro Regular',
        color: colors.blackBekko,
        textAlign: 'left',
        fontSize: 10,
        lineHeight: 14,
    },
    promo_text: {
        fontFamily: 'Avenir Next LT Pro Bold',
        color: colors.blackBekko,
        textAlign: 'left',
        fontSize: 22,
        lineHeight: 23,
    },
    text_sold: {
        fontFamily: 'Avenir Next LT Pro Demi',
        color: colors.yellowPrimary,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 15,
        letterSpacing: 2,
    },
    title_description_card: {
        fontFamily: 'Avenir Next LT Pro Regular',
        color: colors.blackBekko,
        textAlign: 'left',
        fontSize: 14,
        lineHeight: 19,
    },
    ownership_property: {
        fontFamily: 'Avenir Next LT Pro Demi',
        color: colors.blackBekko,
        textAlign: 'center',
        fontSize: 8,
        lineHeight: 8,
    },
    price_property: {
        fontFamily: 'Avenir Next LT Pro Bold',
        color: colors.blackBekko,
        textAlign: 'left',
        fontSize: 20,
        lineHeight: 20,
    },
    type_property: {
        fontFamily: 'Avenir Next LT Pro Demi',
        color: colors.blackBekko,
        textAlign: 'left',
        fontSize: 14,
        lineHeight: 14,
    },
    is_rented_property: {
        fontFamily: 'Avenir Next LT Pro Demi',
        color: colors.blackBekko,
        textAlign: 'center',
        fontSize: 10,
        lineHeight: 12,
    },
    address_property: {
        fontFamily: 'Avenir Next LT Pro Medium',
        color: colors.blackBekko,
        textAlign: 'left',
        fontSize: 10,
        lineHeight: 14,
    },
    label_action_button: {
        fontFamily: 'Avenir Next LT Pro Medium',
        color: colors.grey,
        textAlign: 'left',
        fontSize: 10,
        lineHeight: 14,
    },
    description_action_button: {
        fontFamily: 'Avenir Next LT Pro Bold',
        color: colors.blackBekko,
        textAlign: 'left',
        fontSize: 16,
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
