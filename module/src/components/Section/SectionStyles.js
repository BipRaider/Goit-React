//https://styled-components.com/docs/basics#installation
//vscode-styled-components установить в VSCode
//Styled-Snippets
import styled from 'styled-components';

const mystyle = {
	Sections: styled.section`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0 auto;
		width: 50%;
		height: auto;
		list-style: none;
	`,
	Title: styled.h2`font-size: 2em;`
};

export default mystyle;
