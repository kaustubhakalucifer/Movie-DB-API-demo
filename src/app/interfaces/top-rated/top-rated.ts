export interface TopRated {
    page: number,
    results : {
        poster_path : string | null,
        adult: boolean,
        overview: string,
        release_date: string,
        genre_ids: number[],
        id: number,
        original_tital: string,
        original_language: string,
        
    }
}
