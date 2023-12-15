//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
class postList {
  constructor(post) {
    this.post = [post];
  }
  addPost(post) {
    this.post.push(post);
  }
  sharePost(postTitle) {
    console.log(`You've shared post “${postTitle}” to your friend.`);
  }
}
class Post {
  constructor(id, title, content, conment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [conment];
  }
  addComment(comment) {
    this.comment.push(comment);
  }
}

class Comment {
  constructor(id, content, creatBy) {
    this.id = id;
    this.content = content;
    this.creatBy = creatBy;
    this.like = 0;
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
  addGroup(groupList) {
    this.groupList.push(groupList);
  }
  addPage(pageList) {
    this.groupList.push(pageList);
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
  send(newComment) {
    console.log(
      `Notification: ${
        newComment.comment[newComment.comment.length - 1].creatBy
      } has just commented on this post—"${newComment.title}”`
    );
  }
}
