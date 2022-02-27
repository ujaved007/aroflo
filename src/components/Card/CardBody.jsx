import React from "react";
import { ListBodyText, HorizontalList } from "../../styles/Card.styles";

const CardBody = ({ item }) => {
	return (
		<div>
			<h2>{item.client}</h2>
			<ListBodyText>
				<span className="highlight">Assigned Resources:</span>
			</ListBodyText>
			<HorizontalList>
				{item.assignedResources.map((resource) => {
					return <li key={resource.id}>{resource.name}</li>;
				})}
			</HorizontalList>
			<ListBodyText>
				<span className="highlight">Address: </span>
				{item.address}
			</ListBodyText>
		</div>
	);
};

export default CardBody;
