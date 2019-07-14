function formatTime(num){
    const day_inmin = 1440;
    const hour_inmin = 60;
    const calc_days = Math.floor(num/day_inmin);
    const calc_hours = Math.floor((num % day_inmin)/hour_inmin);
    const calc_minutes = (num % day_inmin) % hour_inmin;
    let result = `${calc_days} days(s) ${calc_hours} hours(s) ${calc_minutes} minutes(s).`;
    return result;
}

formatTime(120);
formatTime(59);
formatTime(3601);