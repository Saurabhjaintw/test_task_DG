import { PageData } from "../type"

export const loadJSON = async (page: number): Promise<PageData> => {
    switch (page) {
        case 1:
            return require('../../API/CONTENTLISTINGPAGE-PAGE1.json');
        case 2:
            return require('../../API/CONTENTLISTINGPAGE-PAGE2.json');
        case 3:
            return require('../../API/CONTENTLISTINGPAGE-PAGE3.json');
        default:
            return { page: { 'content-items': { content: [] } } };
    }
};