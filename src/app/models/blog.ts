export interface BlogDetail{
    id:number;
    header:string;
    text:string;
    shortText:string;
    addDate:Date;
    updateDate:Date;
    categoryId:number;
    categoryName:string;
    images:string[]
}