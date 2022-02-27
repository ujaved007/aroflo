import styled from "styled-components";

export const MainWrapper = styled.section`
	padding: 0 2.5em 0 2.5em;
	@media (max-width: 768px) {
		padding: 0 1em 0 1em;
	}
	@media (max-width: 425px) {
		padding: 0 0.2em 0 0.2em;
	}
`;

export const WrapperCenter = styled(MainWrapper)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: start;
`;
