import { Resolver, Query, Mutation, InputType, Field, Arg } from "type-graphql";
import AuthorSchema from "../../models/AuthorSchema";

import Author from "./Author";

@InputType()
class AuthorInput {
  @Field()
  name: string;

  @Field()
  username: string;

  @Field()
  email: string;
}

@Resolver(Author)
export default class AuthorResolver {
  @Query(() => [Author])
  async authors() {
    const authors = await AuthorSchema.find();

    return authors;
  }

  @Mutation(() => Author)
  async createAuthor(@Arg('authorInput') authorInput: AuthorInput) {
    const author = await AuthorSchema.create(authorInput);

    return author;
  }
}