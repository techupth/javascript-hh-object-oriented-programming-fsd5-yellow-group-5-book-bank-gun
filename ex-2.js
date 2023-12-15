class Notification {
  constructor(notification, createdTime, content, receiver) {
    this.notification = notification;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
}

class EmailNotification extends Notification {
  constructor(notification, createdTime, content, receiver) {
    super(notification, createdTime, content, receiver);
  }
  send(receiver) {
    return console.log(`Notification has been sent to ${receiver}`);
  }
}

class SMSNotification extends Notification {
  constructor(notification, createdTime, content, receiver) {
    super(notification, createdTime, content, receiver);
  }
  send(receiver) {
    return console.log(`Notification has been sent to ${receiver}`);
  }
}
const abcde = new EmailNotification(
  "Mr.Ha HokJedPad",
  "12:12 PM 12/12/2012",
  "Diary"
);
abcde.send("ieiezaza5678@gmail.com");

const abcdefg = new SMSNotification(
  "Mr.Ha HokJedPad",
  "12:12 PM 12/12/3012",
  "The Future Diary"
);
abcdefg.send("0619841002");
