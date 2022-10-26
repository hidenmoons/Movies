    export interface Genre {
        name: string;
        uuid: string;
    }

    export interface Country {
        name: string;
        uuid: string;
    }

    export interface EmbedUrl {
        server: string;
        url: string;
        priority: number;
    }

    export interface Movies {
        _id: string;
        image: string;
        title: string;
        rating: string;
        year: number;
        titleOriginal: string;
        uuid: string;
        description: string;
        genres: Genre[];
        countries: Country[];
        release: string;
        embedUrls: EmbedUrl[];
        episodes: any[];
        createdAt: Date;
        updatedAt: Date;
    }


