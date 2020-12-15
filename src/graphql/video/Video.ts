import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Video {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: string;

  @Field()
  author: string;

  @Field()
  _id: string;
}