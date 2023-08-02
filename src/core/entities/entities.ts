import { randomUUID } from "node:crypto";

export class Entity<Props> {
  private _id: string;
  protected props: any;

  get content() {
    return this.props;
  }

  get id() {
    return this._id;
  }

  protected constructor(props: any, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }
}
