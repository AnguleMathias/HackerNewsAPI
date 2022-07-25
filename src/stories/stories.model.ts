// story model definition
export class Story {
  constructor(
    public by: string,
    public descendants: number,
    public id: number,
    public kids: number[],
    public score: number,
    public time: number,
    public title: string,
    public type: string,
    public url: string,
  ) {}
}
