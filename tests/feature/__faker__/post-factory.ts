import { FactoryFor, EntityFactory } from 'typeorm-entity-factory'
import Post from '../../../src/app/domains/post/entities/Post';

@FactoryFor(Post)
export class BasicPostFactory extends EntityFactory<Post> {
  
  async make(): Promise<Post> {
    const post = new Post();

    post.title = this.faker.random.word(); 
    post.desc = this.faker.random.word();
    return post;
  }
}