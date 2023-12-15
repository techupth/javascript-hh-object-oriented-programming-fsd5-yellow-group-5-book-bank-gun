class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    return console.log(`"Notification has been sent to ${this.receiver}"`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
  send() {
    return console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
  }
  send() {
    return console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}
const sendEmail = new EmailNotification(
  "X20A",
  "18.00",
  "Hype Boy",
  "WatBeater"
);
const sendSms = new SMSNotification("xGSx", "18.30", "Super Shy", "0882525766");
sendEmail.send();
sendSms.send();
