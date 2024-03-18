import moment from 'moment';

export const parseDate = (date: Date | string) => {
  if (typeof date === 'string') {
    return date;
  }

  return moment(date).format('MM/YYYY');
};
