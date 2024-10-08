export interface IBook {
    _id: string;
    title: string;
    authors: string;
    publisher: string;
    date: string;
    bookCoverURL: string;
    pages: number;
    rating: number;
    wishList: Boolean;
    completed: Boolean;
    deleted: Boolean;
}
