export class Initials {
    emailName: string;
    emailHost: string;

    constructor(emailName: string, emailHost: string) {
        this.emailName = emailName;
        this.emailHost = emailHost;
    }


    emailAdress(){
        return `${this.emailName}@${this.emailHost}`;
    }
}