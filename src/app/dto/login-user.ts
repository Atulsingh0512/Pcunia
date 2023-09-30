export class LoginUser {
    username!: string;
    password!: string;

    public setUsername(p_UserName : string) {
        this.username = p_UserName;
    }

    public getUserName() : string {
        return this.username;
    }

    public setPassword(p_Password : string) {
        this.password = p_Password;
    }

    public getPassword() : string {
        return this.password;
    }
}
