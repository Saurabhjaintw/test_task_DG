export type updatedContentItem = {
    id: number;
    name: string;
    poster_image: string;
    isFavourite: boolean;
};

export type ContentItem = {
    id: number;
    name: string;
    'poster-image': string;
    isFavourite: boolean;
};

export type PageData = {
    page: {
        'content-items': {
            content: ContentItem[];
        };
    };
};