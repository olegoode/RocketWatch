export const getTimeRemaining = (launch) => {
  const t0 = (launch.netstamp * 1000) - Date.parse(new Date());
  return {
    seconds: Math.floor((t0 / 1000) % 60),
    minutes: Math.floor((t0 / 1000 / 60) % 60),
    hours: Math.floor((t0 / (1000 * 60 * 60)) % 24),
    days: Math.floor(t0 / (1000 * 60 * 60 * 24)),
  };
};

export const padWithZeros = number => (`0${number}`).slice(-2);
