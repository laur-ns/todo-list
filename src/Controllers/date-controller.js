import format from "date-fns/format";
import { compareAsc, parseISO } from "date-fns";

function setHeaderDate() {
  const date = getTodayDate();
  const headerDate = document.querySelector('#header > h4');
  headerDate.textContent = format(parseISO(date), 'PPP');
}

function getTodayDate() {
  const today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  if (today.getMonth() < 10) {
    month = `0${month}`;
  }
  if (today.getDate() < 10) {
    day = `0${today.getDate()}`;
  }
  return `${today.getFullYear()}-${month}-${day}`
}

function validateDate(date) {
  // compareAsc returns -1 if first date is before second
  date = parseISO(date);
  const value = compareAsc(date, parseISO(getTodayDate()));
  if (value === -1) {
    return false;
  }
  return true;
}

const dateController = {
  setHeaderDate,
  getTodayDate,
  validateDate,
}

export default dateController;