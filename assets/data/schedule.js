const PUBLIC_KEY = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k';
const CALENDAR_ID = 'f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com';

export const getData = (setData, setLoading) => {
    const dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/', CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');
    setLoading(true);

    return fetch(dataUrl)
        .then(response => response.json())
        .then((data) => {
            setTimeout(() => {
                setData(data.items);
                setLoading(false);
            }, 600);
        });
};