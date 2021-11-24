import styled from "styled-components";

interface BoxProps {
  padding?: number;
  paddingBottom?: number;
  align?: "left" | "right" | "center";
  width?: string;
  flex?: boolean;
  alignItems?: string;
  justifyContent?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pv?: number;
  ph?: number;
  border?: string;
}

const Box = styled.div<BoxProps>((props) => `
  padding: ${props.padding ? `${props.padding}px` : ""};
  padding-bottom: ${props.paddingBottom ? `${props.paddingBottom}px` : ""};
  text-align: ${props.align};
  width: ${props.width};
  display: ${props.flex ? "flex" : ""};
  align-items: ${props.alignItems};
  justify-content: ${props.justifyContent};
  margin: ${props.mt || 0}px ${props.mr || 0}px ${props.mb || 0}px ${props.ml || 0}px;
  padding: ${props.pv || 0}px ${props.ph || 0}px;
  ${props.border && `border: ${props.border};`}
`);

export default Box;
