import moment from 'moment'

const ago = (date, format) => {
	if(!date){
		return '';
	}

	let ago = moment(date, format || `YYYY-MM-DD`);
	let now = moment();

	let range = now.diff(ago);

	let key = ''

    if(range > 366 * 24 * 60 * 60 * 1000) {
		key = 'years'
    } else if(range > 31 * 24 * 60 * 60 * 1000) {
		key = 'months'
    } else if(range > 24 * 60 * 60 * 1000){
		key = 'days'
    } else if(range > 60 * 60 * 1000){
		key = 'hours'
    } else if(range > 60 * 1000){
		key = 'minutes'
    } else if(range > 1000){
		key = 'seconds'
    }

    return `${now.diff(ago, key)} ${key} ago` 
}

export default ago;