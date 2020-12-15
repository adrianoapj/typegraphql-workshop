import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Author {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  username: string;

  @Field()
  email: string;
}