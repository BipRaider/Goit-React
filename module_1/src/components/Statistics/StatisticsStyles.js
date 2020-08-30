import styled from 'styled-components';

const mystyle = {
	Statistics: styled.section`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0 auto;
		width: 400px;
		height: 400px;
		list-style: none;
		border-radius: 4px;
		background-color: rgb(255, 255, 255);
		box-shadow: 0px 1px 3px 0px ${(props) => props.rgb};
	`,

	Titel: styled.h2`
		font-size: 26px;
		font-family: "ProximaNova";
		color: rgb(71, 89, 101);
		line-height: 1.2;
		margin-bottom: 30px;
	`,

	Label: styled.span`
		text-align: center;
		font-size: 18px;
		font-family: "ProximaNova";
		color: rgb(255, 255, 255);
		line-height: 1.111;
	`,
	Percentage: styled.span`
		font-size: 26px;
		text-align: center;
		font-family: "ProximaNova";
		color: rgb(255, 255, 255);
		line-height: 1.667;
	`,
	StatList: styled.ul`
		display: flex;
		justify-content: space-between;
		width: 100%;
	`,
	Item: styled.li`
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 80px;
		background-color: ${(props) => props.rgb};
	`
};

export default mystyle;
