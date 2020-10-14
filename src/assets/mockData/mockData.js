import data from './data.json';

// Converting date field to Date type and setting overwriting some dates with today's date to have 
// data to test the display date format for e-mails received today  
function formatDate (dataset) {
    return dataset.map((data, i) => {
        data.date = i < 3 ? new Date() : new Date(data.date);
        return data;
    });
}

export default formatDate(data);