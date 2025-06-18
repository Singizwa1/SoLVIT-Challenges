const blogPosts=[];
function createPost(id,title,content,author){
    return {
        id,
        title,
        content,
        author,
        createdAt: new Date()
        };

}
function addPost(post) {
    if (!post.id || !post.title || !post.content || !post.author) {
        throw new Error("All fields are required");
    }
    if (blogPosts.some(p=> p.id === post.id)) {
        throw new Error("This ID is already used");
    }
    blogPosts.push(post);
}
function getAllPosts() {
    return blogPosts
}
function findPostById(id) {
    return blogPosts.find(post => post.id === id);
}
function filterPostsByAuthor(author) {
    return blogPosts.filter(post => post.author === author);
}
function filterPostsByKeyword(keyword) {
    return blogPosts.filter(post => post.title.includes(keyword) || post.content.includes(keyword));
}
function getRecentPosts(limit) {
    return blogPosts.sort((a, b) => b.createdAt - a.createdAt).slice(0, limit);
}
try{
    const post1 = createPost(1, "First Post", "This is the content of the first post", "Serge");
    const post2 = createPost(2, "Second Post", "Content of the second post", "Bob");

    const post3 = createPost(3, "Third Post", "Content of the third post with keyword", "Alice");
    addPost(post1);
    addPost(post2);
    addPost(post3);
    
    console.log(getAllPosts());
    console.log(findPostById(2));
    console.log(filterPostsByAuthor("Bob"));
    console.log(filterPostsByKeyword("keyword"));
    console.log(getRecentPosts(2));
}catch (error) {
    console.error("Error:", error.message);
}