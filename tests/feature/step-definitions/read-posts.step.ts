import { binding, given, then, when, before, after } from 'cucumber-tsflow';
import assert from 'assert';
import { connect, close } from '../../../src/infra/db-connections';
import Post from '../../../src/app/domains/post/entities/Post';
import { getManager, EntityManager, getConnection } from 'typeorm';
import { getFactoryContainer } from '../../__faker__';
import { BasicPostFactory } from '../../__faker__/post-factory';

@binding()
export class ReadPostsStep {
   
    post: Post;
    manager: EntityManager;
    posts: Post[];

    @before('read-posts')
    public async before(){
        await connect();
        this.manager = getManager();
    }

    @after('read-posts')
    public async after() {
        await close();
    }

    @given('You want to What is published.')
    public async given() {
        const container = await getFactoryContainer(getConnection());
        const fac:BasicPostFactory = container.getFactory(Post);
        await fac.saveMany(10);
    }

    @when('You request post list to System.')
    public async when() {
        this.posts = await this.manager.find(Post);
    }

    @then('You get posts.')
    public async then() {
        assert.notEqual(this.posts,undefined);
    }
}