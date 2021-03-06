export const formatDate = (date, options) =>
  new Intl.DateTimeFormat('pt-BR', options).format(date);

export const fullFormatDate = (date) =>
  formatDate(date, { month: 'long', day: 'numeric', year: 'numeric' });

export const shortFormatDate = (date) => formatDate(date);

export const dateObjectBuider = (str = '2020-04-25') => {
  if (!str) return;

  const [year, month, day] = str.split('-');
  return new Date(+year, +month - 1, +day);
};
