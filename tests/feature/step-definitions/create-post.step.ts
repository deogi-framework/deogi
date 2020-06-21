import { binding, given, then, when, before, after } from 'cucumber-tsflow';
import assert from 'assert';
import { connect, close } from '../../../src/infra/db-connections';
import Post from '../../../src/app/domains/post/entities/Post';
import { getManager, EntityManager } from 'typeorm';

@binding()
export class CreatePostStep {
   
    post: Post;
    manager: EntityManager;

    @before('db')
    public async before(){
        console.log("before!!!");
        
        await connect();
        this.manager = getManager();
    }

    @after('db')
    public async after(){
        await close();
        console.log("after!!!");
    }

    @given('You write post on blog - title : {string} and description {string}.')
    public given(title: string, desc: string) {

        this.post = new Post();
        this.post.title = title;
        this.post.desc = desc;

    }

    @when('You save post.')
    public async when() {
       
       await this.manager.save(this.post);
    }

    @then('You get to have post on list.')
    public async then() {
        const post = await this.manager.findOne(Post,1);
        assert.notStrictEqual(post,undefined);
        assert.strictEqual(this.post.id,post?.id)
        assert.strictEqual(this.post.title,post?.title)
        assert.strictEqual(this.post.desc,post?.desc)
    }
}