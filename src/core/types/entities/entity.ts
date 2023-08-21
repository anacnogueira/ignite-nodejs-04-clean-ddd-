import { UniqueEntityID } from "./unique-entity-id";

export abstract class Entity<Props> {
  private _id: UniqueEntityID;
  protected props: any;

  get content() {
    return this.props;
  }

  get id() {
    return this._id;
  }

  protected constructor(props: any, id?: UniqueEntityID) {
    this.props = props;
    this._id = id ?? new UniqueEntityID();
  }
}
