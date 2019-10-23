// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

const BlogPost = require('./blog_post.js');

const blog_post_1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');

const blog_post_2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, \
stick-figure-illustrated blog about almost everything.', '2010.10.10.');

const blog_post_3 = new BlogPost('William Turton', 'One Engineer Is Trying to \
Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, \
doesn’t want to be the center of attention. \
When I asked to take his picture outside one of IBM’s New York City offices, \
he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

class Blog{
  constructor(){
    this.list = [];
    this.list.push(blog_post_1);
    this.list.push(blog_post_2);
    this.list.push(blog_post_3);

  }
  delete(int){
    this.list.splice(int, 1);
  }
  update(int, BlogPost){
    this.list[int] = BlogPost;
  }
}

var newBlog = new Blog();
console.log(newBlog);

newBlog.delete(1);
console.log(newBlog);

var testBlog = new BlogPost('test','test','test','test');
newBlog.update(2,testBlog);
console.log(newBlog);