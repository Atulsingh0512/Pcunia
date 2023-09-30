export class Registration {
    private name!: string;
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    private password!: string;
    public getPassword(): string {
        return this.password;
    }
    public setPassword(value: string) {
        this.password = value;
    }
    private email!: string;
    public getEmail(): string {
        return this.email;
    }
    public setEmail(value: string) {
        this.email = value;
    }
    private confirmPassword!: string;
    public getConfirmPassword(): string {
        return this.confirmPassword;
    }
    public setConfirmPassword(value: string) {
        this.confirmPassword = value;
    }
    private username!: string;

    public getUsername(): string {
        return this.username;
    }
    public setUsername(value: string) {
       this.username = value;
    }
}
