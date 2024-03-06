export interface BookData {
    id?: number,
    name: string,
    description:string,
    image: string,
    active?: boolean
}

export interface DeleteBookData {
    id: number
} 