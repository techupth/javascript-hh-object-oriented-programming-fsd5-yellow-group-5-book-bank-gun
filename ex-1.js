class EmailNotification {
  constructor(notification, createdTime, content, receiver) {
    this.notification = notification;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send(email) {
    console.log(`Notification has been sent to ${email}`);
  }
}

class SMSNotification {
  constructor(notification, createdTime, content, phoneNumber) {
    this.notification = notification;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send(phoneNumber) {
    this.phoneNumber = phoneNumber;

    console.log(`Notification has been sent to ${phoneNumber}`);
  }
}
const abcde = new EmailNotification("Ha", "13/3039, Friday", "asdasdasfawfaw");
abcde.send("uijsdgvuagyhibhijo@gmail.com");

const abcdefg = new SMSNotification("Ha", "13/3039, Friday", "asdasdasfawfaw");
abcdefg.send("0619841002");
