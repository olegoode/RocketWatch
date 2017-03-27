export const getLocalTime = utcdate => new Date(utcdate).toString();

export const getTimeRemaining = (launch) => {
  if (launch == null) {
    return {
      seconds: 0,
      minutes: 'GO',
      hours: 'NO',
      days: 0,
    };
  }
  const t0 = (Date.parse(launch.net)) - Date.parse(new Date());
  return {
    seconds: Math.floor((t0 / 1000) % 60),
    minutes: Math.floor((t0 / 1000 / 60) % 60),
    hours: Math.floor((t0 / (1000 * 60 * 60)) % 24),
    days: Math.floor(t0 / (1000 * 60 * 60 * 24)),
  };
};

export const padWithZeros = number => (`0${number}`).slice(-2);