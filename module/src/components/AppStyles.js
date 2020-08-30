import styled from 'styled-components';

const mystyle = {
	Nav: styled.nav`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0 auto;
		width: 90%;
		height: auto;
		list-style: none;
		border-radius: 4px;
		background-color: rgb(255, 255, 255);
	`,
	Ul: styled.ul`
		display: flex;
		justify-content: space-between;
		width: 100%;
	`,
	Li: styled.li`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 40px;
		margin: 0 5px;
		cursor: pointer;
		border-radius: 7px;
		box-shadow: 0px 1px 3px 0px rgba(1, 1, 222, 1);
	`,
	Link: styled.a`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: green;
	`
};

export default mystyle;
