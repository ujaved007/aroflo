import styled from "styled-components";

export const Card = styled.div`
	width: 450px;
	background-color: ${(props) => props.theme.purple};
	border-radius: 19px;
	padding: 15px 15px 15px 15px;
	&.margin-right {
		margin-right: 20px;
	}
`;

export const CardTitle = styled.h1`
	color: ${(props) => props.theme.yellow};
	text-align: center;
`;

export const ListItemContainer = styled.div`
	background-color: ${(props) => props.theme.lightPurple};
	padding: 0 10px 15px 10px;
	max-width: 100%;
	border-radius: 10px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const ListBodyText = styled.p`
	display: flex;
	margin-top: -10px;
	margin-bottom: 5px;
	.highlight {
		color: ${(props) => props.theme.yellow};
	}
`;

export const HorizontalList = styled.ul`
	display: inline-flex;
	flex-wrap: wrap;
	list-style-position: outside;
	margin-top: -50px;
	padding-left: 15px;
	li {
		padding-left: 0px;
		margin-right: 30px;
	}
`;
