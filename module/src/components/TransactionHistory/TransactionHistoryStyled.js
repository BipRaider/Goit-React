import styled from 'styled-components';

const mystyle = {
	TransactionHistory: styled.table`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		padding: 0;
		margin: 0 auto;
		width: 80%;
		height: auto;
		list-style: none;
		border-radius: 4px;
		background-color: rgb(255, 255, 255);
		box-shadow: 0px 1px 3px 0px ${(props) => props.rgb};
	`,
	Thead: styled.thead`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: baseline;
		width: 100%;
		height: 100px;
		margin-bottom: 10px;
		background-color: rgb(24, 145, 214);
	`,
	Tbody: styled.tbody`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: baseline;
		width: 100%;
	`,

	Tr: styled.tr`
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 5px;
	`,
	Item: styled.th`
		display: flex;
		flex-direction: column;
		width: 100%;
		font-size: 1.1em;
		font-family: "HelveticaNeueCyr";
		color: rgb(0, 0, 0);
		line-height: 2;
		text-transform: capitalize;
	`,
	ItemT: styled.th`
		display: flex;
		flex-direction: column;
		width: 100%;
		font-size: 1.5em;
		font-family: "HelveticaNeueCyr";
		color: rgb(255, 255, 255);
		line-height: 2;
	`
};

export default mystyle;
