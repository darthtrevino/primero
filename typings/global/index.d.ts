// declare chai's existence in the global scope for tests
declare const expect: Chai.ExpectStatic;

interface Window {
  I18n: typeof import("i18n-js");
}
