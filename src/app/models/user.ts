export class User{
    constructor(
        public _id: string,
        public name: string,
        public apellido: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string
    ){

    }
}