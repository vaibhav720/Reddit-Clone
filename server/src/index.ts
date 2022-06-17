import { Post } from './entities/Post';
import { __prod__ } from './constants';
import {MikroORM} from "@mikro-orm/core"
 

const main = async () =>{
    const orm = await MikroORM.init({
        entities:[Post],
        dbName: "lireddit",
        type: "postgresql",
        debug: !__prod__
    });

    const post = orm.em.create(Post , {title: "this my first post"});

    await orm.em.persistAndFlush(post);

    await orm.em.nativeInsert(Post,{title:"my first post"});
};


main();

console.log("Hello world");