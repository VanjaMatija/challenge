import React from "react";
import styled from "styled-components";

interface TextProps {
  weight?: string;
  size?: number;
  upper?: boolean;
  color?: string;
  letterSpacing?: boolean;
  lineHeight?: number;
  wrap?: string;
  underline?: boolean;
  paddingLeft?: number;
}

const CustomText = styled.span<TextProps>((props) => `
  font-size: ${props.size ? `${props.size}px` : ""};
  color: ${props.color ? props.color : ""};
  font-weight: ${props.weight ? props.weight : ""};
  text-transform: ${props.upper ? "uppercase" : ""};
  line-height: ${props.lineHeight ? `${props.lineHeight}px` : ""};
  letter-spacing: ${props.letterSpacing ? "-0.2px" : ""};
  white-space: ${props.wrap ? props.wrap : ""};
  text-decoration: ${props.underline ? "underline" : ""};
  padding-left: ${props.paddingLeft ? `${props.paddingLeft}px` : ""};
`);

const Text: React.FC<TextProps> = ({children, ...props}) => {
  return (
    <CustomText {...props}>{children}</CustomText>
  );
};

export default Text;