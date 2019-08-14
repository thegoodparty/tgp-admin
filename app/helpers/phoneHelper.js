// receives a phone number in the raw format 3106665555 or 13106665555
// returns formatted phone number 310-666-5555
export const PHONE_FORMAT_ERROR = '';

export default function (rawPhoneInput) {
  if (!rawPhoneInput) {
    return PHONE_FORMAT_ERROR;
  }
  let rawPhone = rawPhoneInput.trim();
  if (rawPhone.length === 11) {
    if (rawPhone[0] === '1') {
      rawPhone = rawPhone.substr(1);
    } else {
      return PHONE_FORMAT_ERROR;
    }
  }

  if (rawPhone.length !== 10) {
    return PHONE_FORMAT_ERROR;
  }
  return `${rawPhone.substr(0, 3)}-${rawPhone.substr(3, 3)}-${rawPhone.substr(6, 4)}`;
}
