/**
 * There is defined component `Title` from HTML element `h1`.
 * We use for it package `styled-components`.
 *
 * You can also see, that we append this component about class `h1` which is defined in `default.less`.
 *
 * Skeleton handle, that less files is compiled and append to HTML head element.
 *
 * Here is also example as you can handle props in CSS styles.
 */

import styled from "styled-components";

const Title = styled.h1.attrs({className: 'h1'})`
	color: ${props => props.color || 'black'};	
`;

export default Title;