import { DateTime } from 'luxon';
import moment from 'moment';

export const relativeDateTime = (timestamp: any) => {
    /* print datetime return Today else print the date.*/
    let dateString: string;
    const datetime = timestamp && timestamp.toDate();
    const days = moment().diff(datetime, 'days');
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    const yesterdayMidnight = new Date();
    yesterdayMidnight.setDate(yesterdayMidnight.getDate() - 1);
    yesterdayMidnight.setHours(0, 0, 0, 0);
    if (days === 0 && midnight < datetime) {
        return 'Today';
    }
    else if ((days === 1 && yesterdayMidnight < datetime) || (days === 0 && midnight > datetime)) {
        return 'Yesterday';
    }
    else {
        dateString = DateTime.fromJSDate(datetime).toFormat(`dd LLL yyyy`);
    }
    return dateString;
};

export const convertToLongDate = (date: string) => {
    const dateObject = new Date(date);
    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"][dateObject.getMonth()];
    const formattedStr = month + ' ' + dateObject.getDay() + ', ' + dateObject.getFullYear();
    return formattedStr;
}

export const convertToLongDate2 = (date: string) => {
    const dateObject = new Date(date);
    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"][dateObject.getMonth()];
    const formattedStr = dateObject.getDay() + ' ' + month + ' ' + dateObject.getFullYear();
    return formattedStr;
}


export const todayString = () => (
    `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
);

const addLeadingZero = (number: number, digitsCount = 2) => {
    let leadingZero = '';
    for (let i = 0; i < digitsCount - (number + '').length; i++) {
        leadingZero = '0' + leadingZero;
    }
    return leadingZero + number;
};

export const todayDateAndTimeString = () => {
    const d = new Date();
    return `${addLeadingZero(d.getDate())}/${addLeadingZero(d.getMonth() + 1)}/${d.getFullYear()}
 - ${addLeadingZero(d.getHours())}:${addLeadingZero(d.getMinutes())}:${addLeadingZero(d.getSeconds())}:${new Date().getMilliseconds()}`;
};

export const makeShortenedTextByDots = (text: string, savedCharNum: number) => (
    text.length >= savedCharNum ? text.substring(0, savedCharNum - 3) + '...' : text
);
