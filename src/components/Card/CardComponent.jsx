import React from "react";
import { Card, CardTitle, ListItemContainer } from "../../styles/Card.styles";
import { SquarePrimaryBtn } from "../../styles/Buttons.styles";
import CardBody from "./CardBody";

const CardComponent = ({ data, title, btn, danger, handleClick }) => {
	return (
		<Card>
			<CardTitle>{title}</CardTitle>
			{data.length !== 0 &&
				data.map((item) => {
					return (
						<ListItemContainer key={item.id}>
							<CardBody item={item} />
							<div>
								<SquarePrimaryBtn
									className={danger}
									onClick={() => {
										handleClick(item.id);
									}}
								>
									{btn}
								</SquarePrimaryBtn>
							</div>
						</ListItemContainer>
					);
				})}
		</Card>
	);
};

export default CardComponent;
