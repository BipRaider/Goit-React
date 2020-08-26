//https://styled-components.com/docs/basics#installation
//vscode-styled-components установить в VSCode
//Styled-Snippets
import styled from 'styled-components';

const mystyle = {
	Section: styled.section`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		list-style: none;
		outline: 1px solid black;
	`,
	Title: styled.section`font-size: 2em;`
};

export default mystyle;
