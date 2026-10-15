
export type InputValue = string | number | boolean;
// typeof narrowing : type InputValue creates a custom type named InputValue
// The | symbol means OR


// in operator :This is helpful when you have two object types with different properties
// backend can handle different object structures using one function, without blindly accessing properties that might not exist on a particular variant.
export interface EmailNotification {
  email: string;
  subject: string;
}

export interface SmsNotification {
  phone: string;
  message: string;
}

export type Notification =
  | EmailNotification
  | SmsNotification;
