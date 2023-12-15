class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    return console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    return console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}
const email = new EmailNotification("x20a", "18.00", "Hype Boy", "WatBeater");
const sms = new SMSNotification("xGSx", "18.30", "Super Shy", "0882525766");

email.send();
sms.send();
