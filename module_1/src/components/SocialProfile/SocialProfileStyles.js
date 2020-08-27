import styled from 'styled-components';

const mystyle = {
	Article: styled.article`
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
		box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 1);
	`,
	Description: styled.div`margin-bottom: 25px;`,
	Name: styled.p`
		font-size: 1.6em;
		font-family: "Lato";
		color: rgb(18, 34, 54);
		font-weight: bold;
		line-height: 1.778;
		text-align: center;
	`,
	P: styled.p`
		font-size: 14px;
		font-family: "Lato";
		color: rgb(118, 134, 150);
		line-height: 2.286;
		text-align: center;
	`,
	Avatar: styled.img`
		width: 138px;
		height: 138px;
		border-radius: 100%;
	`,

	Label: styled.span`
		font-size: 12px;
		font-family: "Lato";
		color: rgb(118, 134, 150);
		line-height: 2.667;
		text-align: center;
	`,
	Count: styled.span`
		font-size: 14px;
		font-family: "Lato";
		color: rgb(31, 51, 73);
		line-height: 2.286;
		text-align: center;
	`,
	Stats: styled.ul`
		display: flex;
		justify-content: space-between;
		width: 100%;
	`,
	Li: styled.li`
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		margin: 0 5px;
	`
};

export default mystyle;
