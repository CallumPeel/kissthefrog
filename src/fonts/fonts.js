import { createGlobalStyle } from 'styled-components';
import amaticFontwoff from './amaticFontWoff.woff';
import amaticFontwoff2 from './amaticFontWoff2.woff2';
import satisfyFontwoff from './satisfyFontWoff.woff';
import satisfyFontwoff2 from './satisfyFontWoff2.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Amatic SC';
        src: local('amaticFontwoff'), local('amaticFontwoff2'),
        url(${amaticFontwoff2}) format('woff2'),
        url(${amaticFontwoff}) format('woff');
        font-weight: 300;
        font-style: cursive;
    }
    @font-face {
        font-family: 'satisfy';
        src: local('satisfyFontwoff'), local('satisfyFontwoff2'),
        url(${satisfyFontwoff2}) format('woff2'),
        url(${satisfyFontwoff}) format('woff');
        font-weight: 300;
        font-style: cursive;
    }
`;

