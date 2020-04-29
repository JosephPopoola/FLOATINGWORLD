import styled, { keyframes, css } from 'styled-components';

export const createAnimation = function(_animation, _duration) {
	const animation = keyframes`${_animation}`;
	return css`
		animation: ${_duration} ${animation};
	`;
};
