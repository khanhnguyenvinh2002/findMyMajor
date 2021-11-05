// import PropTypes from 'prop-types'
// import React from 'react'
// import styled from 'styled-components/native'

// export const COLORS = {
//     white: '#FFFFFF',
//     gray: '#AAAAAA',
//     red: '#FF5555',
//   }

// const Wrapper = styled.View`
//   margin-bottom: 15px;
// `

// const StyledInput = styled.TextInput`
//   border-color: ${(props) => (props.isError ? COLORS.red : COLORS.gray)};
//   border-width: 1px;
// `

// const Label = styled.Text`
//   color: ${COLORS.gray};
//   font-size: 10px;
//   letter-spacing: 2px;
// `

// const Error = styled.Text`
//   color: ${COLORS.red};
// `

// export const Input = ({ label, error, ...textInputProps }) => {
//   const isError = Boolean(error)

//   return (
//     <Wrapper>
//       {Boolean(label) && <Label>{label}</Label>}
//       <StyledInput isError={isError} {...textInputProps} />
//       {isError && <Error>{error}</Error>}
//     </Wrapper>
//   )
// }

// Input.propTypes = {
//   label: PropTypes.string,
//   error: PropTypes.string,
// }


import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { t } from 'react-native-tailwindcss';

export default function Input(props) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[styles.input, props.error && t.borderRed500, props.style]}
        {...props}
      />
    </View>
  );
}

const styles = {
  wrapper: [t.selfStretch, t.mB5],
  input: [
    t.h11,
    t.border,
    t.selfStretch,
    t.p2,
    t.borderGray500,
    t.rounded,
    t.textBase,
    t.textGray700
  ],
  errorText: [t.mT1, t.textRed500]
};
