import styled from "styled-components";

export const SquarePrimaryBtn = styled.button`
	padding: 2px 10px 2px 10px;
	font-size: 1.8em;
	border-radius: 5px;
	border-width: 0px;
	background-color: ${(props) => props.theme.yellow};
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
	&.danger {
		background-color: #ea5d0a;
		padding: 2px 14px 2px 14px;
	}
`;
