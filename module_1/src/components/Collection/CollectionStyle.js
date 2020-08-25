//https://styled-components.com/docs/basics#installation
//vscode-styled-components установить в VSCode
//Styled-Snippets
import styled from 'styled-components';

import { Button, ButtonGroup } from '@material-ui/core';

const mystyle = {
  List: styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0 auto;
    width: 600px;
    list-style: none;
    outline: 1px solid black;
  `,
  ListItem: styled.li`
    width: 100%;
    margin: 5px;
    background-color: teal;
    outline: 1px solid black;
    text-align: center;
    color: #ff0;
    &:hover {
      background-color: gray;
      cursor: pointer;
    }
  `,
  Button,
  ButtonGroup,
};

export default mystyle;
