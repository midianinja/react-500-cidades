/**
 *
 * formatDate - that function transform an simple string "DDMMYYYY" to date format "DD/MM/YYYY"
 *
 * @function extractNumbers
 * @param  {string} date it's string "DDMMYYYY" to be formatted
 * @returns {string} it's formatted string
 */
export const formatDate = (date) => {
  let myDate = date;
  if (myDate.length > 2 && myDate[2] !== '/') {
    myDate = `${myDate.substring(0, 2)}/${myDate.substring(2, myDate.length)}`;
  }
  if (myDate.length > 5 && myDate[5] !== '/') {
    myDate = `${myDate.substring(0, 5)}/${myDate.substring(5, myDate.length)}`;
  }
  return myDate.substring(0, 10);
};

/**
 *
 * strToDateDDMMYYYY - that function transform an simple string "DDMMYYYY" to date js class
 *
 * @function extractNumbers
 * @param  {string} date it's string "DDMMYYYY" to be formatted
 * @returns {string} it's formatted string
 */
export const strToDateDDMMYYYY = (date) => {
  const day = date.slice(0, 2);
  const month = date.slice(2, 4);
  const year = date.slice(4, 8);
  const dateClass = new Date(`${month}/${day}/${year}`);
  return dateClass;
};

/**
 *
 * DateToString - that function transform an Date class to string "DDMMYYYY"
 *
 * @function extractNumbers
 * @param  {string} date it's string "DDMMYYYY" to be formatted
 * @returns {string} it's formatted string
 */
export const dateToStrDDMMYYYY = (date) => {
  let myDate = date;
  if (!myDate) return '';
  if (myDate.toString() ===  'Invalid Date') return '';
  const day = myDate.getDate();
  const month = myDate.getMonth() < 9 ? (`0${myDate.getMonth() +1 }`) : (myDate.getMonth() + 1);
  const year = myDate.getFullYear();
  const dateClass = `${day}${month}${year}`;
  return dateClass;
};