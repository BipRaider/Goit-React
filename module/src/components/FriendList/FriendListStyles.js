//https://styled-components.com/docs/basics#installation
import styled from 'styled-components';

const mystyle = {
	List: styled.ul`
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding: 0;
		margin: 0 auto;
		width: 400px;
		list-style: none;
		outline: 1px solid black;
	`,
	ListItem: styled.li`
		display: flex;
		align-items: center;
		width: 97%;
		height: 100px;
		margin: 5px auto;
		background-color: white;
		outline: 1px solid black;
		text-align: center;
		&:hover {
			background-color: gray;
			cursor: pointer;
		}
	`,
	ListImg: styled.img`
		width: 90px;
		height: 90px;
		border-radius: 10px;
		margin: 5px 20px 5px 0px;
	`,
	ListSpan: styled.span`
		width: 20px;
		height: 20px;
		margin: auto 20px;
		border-radius: 100%;
		background-color: ${(props) => (props.inStock ? 'green' : 'red')};
	`,
	ListP: styled.p`
		font-size: 1.5em;
		font-weight: 600;
		color: black;
	`
};
//background-color: ${(props) => (props.inStock ? 'green' : 'red')};  -- тернарного оператора if...else
//с помощью  него можно менять зависимости от пропсов можно менять значения
export default mystyle;
