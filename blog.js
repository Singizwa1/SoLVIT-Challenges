class Blog{
    #id;
    title;
    content;
    author;
    createdAt;

    constructor(id,title,content,author,createdAt){
        if(!id||!title||!content||!author){
            throw new Error("All flieds are required");
        }
        this.#id=id;
        this.title=title;
        this.content=content;
        this.author=author;
        this.createdAt=new Date();

    }
    getId(){
        return this.#id;
    }

}
class BlogManager{
    #posts=[];
    addPost(Blogpost){
        if(this.#posts.find(post=>post.getId()===Blogpost.getId())){
            throw new Error("this Id is already used");
        }
        this.#posts.push(Blogpost);
    }
  getAllposts(){
    return this.#posts;
  }
   FindpostById(id){

    return this.#posts.find(post=>post.getId()===id);
   }
  FilterPostsByAuthor(author){
    return this.#posts.filter(post=>post.author===author);

}
FilterPostsByKeyword(keyword){
    return this.#posts.filter(post=>post.title.includes(keyword)||post.content.includes(keyword));
}
getRecentposts(limit){
    return this.#posts.sort((a,b) =>b.createdAt - a.createdAt).slice(0, limit);
}
}

const manager = new BlogManager();
try {
    const P1=new Blog(1,"First Post","This is the content of the first post","Serge");
    const P2=new Blog(2,"Second Post","This is the content of the second post","Alice");
    const P3=new Blog(3,"Third Post","This is the content of the third post","Serge");


manager.addPost(P1);
manager.addPost(P2);
manager.addPost(P3);
console.log("All Posts:", manager.getAllposts());
console.log("Post with ID 1:", manager.FindpostById(1));
console.log("Posts by Serge:", manager.FilterPostsByAuthor("Serge"));
console.log("Posts containing 'content':", manager.FilterPostsByKeyword("content"));
console.log("Recent Posts (limit 2):", manager.getRecentposts(2));

}catch (error) {
    console.error(error.message);
}


