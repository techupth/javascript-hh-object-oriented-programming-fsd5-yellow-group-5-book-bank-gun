class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

let sendEmail = new EmailNotification(
  "BB@gmail.com",
  "12:00A.M.",
  "Hi!",
  "GG@gmail.com"
);
sendEmail.send();

let sendSMS = new SMSNotification(
  "082-222-2222",
  "13:00P.M.",
  "Hello!",
  "003-313-3321"
);
sendSMS.send();
