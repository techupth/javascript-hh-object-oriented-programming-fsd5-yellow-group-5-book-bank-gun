//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
class postList {
  constructor(posts) {
    this.posts = posts;
  }
  addPost(addNewPost) {
    this.posts.push(addNewPost);
  }
  sharePost() {
    return console.log(`You've shared post "${this.title}" to your friend.`);
  }
}
class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }
  addComment(comment) {
    this.comment.push(comment);
  }
}
class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = like;
  }
  addLike() {
    this.like += 1;
  }
}
class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }
  addGroup() {
    this.groupList += 1;
  }
  addPage() {
    this.pageList += 1;
  }
}
class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}
class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}
class Notification {
  constructor(id) {
    this.id = id;
  }
  send() {
    return console.log(
      `Notification: ${this.createdBy} has just commented on this post—"${this.title}"`
    );
  }
}
const myPost = new Post(1, "testPost", "Hello", [12345]);
const myComment = new Comment(2, "Why am here?", "userGun");

myPost.addComment(myComment);
console.log(myPost);
