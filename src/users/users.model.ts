// user model definition
export class User {
  constructor(
    public about: string,
    public created: number,
    public id: string,
    public karma: string,
    public submitted: number[],
  ) {}
}
