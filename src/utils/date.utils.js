/**
 *
 * extractNumbers - that function transform an simple string to date format 'DD/MM/YYYY'
 *
 * @function extractNumbers
 * @param  {string} date it's string to be formatted
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