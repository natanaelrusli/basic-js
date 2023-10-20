// Non-curried function
function formatNotification(type, recipient, message) {
  return `Sending ${type} notification to ${recipient}: ${message}`;
}

console.log(formatNotification("Email", "john@tor.com", "Hello jon"));

// Curried function
function curryFormatNotification(type) {
  return function (recipient) {
    return function (message) {
      return `Sending ${type} notification to ${recipient}: ${message}`;
    };
  };
}

// Create specialized notification functions
const emailNotification = curryFormatNotification("Email");
const smsNotification = curryFormatNotification("SMS");
const pushNotification = curryFormatNotification("Push");

// Use the specialized functions
const emailMessage = emailNotification("john@example.com")("Hello, John!");
const smsMessage = smsNotification("+123456789")("Greetings via SMS!");
const pushMessage = pushNotification("DeviceID123")("New update available!");

console.log(emailMessage);
console.log(smsMessage);
console.log(pushMessage);
