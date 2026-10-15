
import type { InputValue } from "../src/types.js";
import type { Notification } from "../src/types.js";

export function processValue(value: InputValue): string {
  if (typeof value === "string") {
    return `String value: ${value.toUpperCase()}`;
  }
  if (typeof value === "number") {
    return `Number value: ${value.toFixed(2)}`;
  }
  return `Boolean value: ${value}`;
}


export function sendNotification(
  notification: Notification
): string {
  if ("email" in notification) {
    return `Email sent to ${notification.email}: ${notification.subject}`;
  }
  return `SMS sent to ${notification.phone}: ${notification.message}`;
}
