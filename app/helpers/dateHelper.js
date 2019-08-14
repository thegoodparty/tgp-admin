export const dateToString = utcDate => {
  if (!utcDate) {
    return utcDate;
  }
  // return new Date(utcDate).toLocaleString("en-US")
  try {
    const date = new Date(utcDate);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  } catch (err) {
    return utcDate;
  }
};

export const dateOnlyToString = utcDate => {
  if (!utcDate) {
    return utcDate;
  }
  // return new Date(utcDate).toLocaleString("en-US")
  try {
    const date = new Date(utcDate);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).format(date);
  } catch (err) {
    return utcDate;
  }
};

// response format: 20120109
export const responseYMDtoString = responseDate => {
  if (typeof responseDate !== 'string' || responseDate.length !== 8) {
    return responseDate;
  }

  const year = responseDate.substr(0, 4);
  const month = responseDate.substr(4, 2);
  const day = responseDate.substr(6, 2);

  return `${month}/${day}/${year}`;
};

export const todayDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return mm + '-' + dd + '-' + yyyy;
};
