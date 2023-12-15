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
  addPost(posts) {
    this.posts.push(posts);
  }
  sharePost(posts) {
    console.log(`You've shared post "${posts}" to your friend.`);
  }
}
class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [comment];
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
    return (this.like += 1);
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = [groupList];
    this.pageList = [pageList];
  }
  addGroup(group) {
    this.groupList.push(group);
  }
  addPage(page) {
    this.pageList.push(page);
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
    console.log(
      `Notification: ${this.createdBy} has just commented on this post—"${this.title}"`
    );
  }
}

//งงครับ แบบว่า งงมากครับ
let adasd = new Comment(123, 213, 123, 12);
adasd.addLike();
adasd.addLike();
adasd.addLike();
adasd.addLike();
adasd.addLike();
adasd.addLike();
adasd.addLike();
adasd.addLike();
adasd.addLike();
console.log(adasd);
let kkk = new Facebook("asdasd", "asdasdasdaxd");
kkk.addGroup("asdasd");
kkk.addGroup("asdasd");
console.log(kkk);
