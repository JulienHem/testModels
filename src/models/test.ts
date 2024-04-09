export default class Test {
    public userId : number;
    public id : number;
    public title : string;
    public completed : boolean

    constructor(data: any) {
        this.userId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.completed = data.completed;
    }
}