//Decide Month Numerical Value
const monthConversion = (month) => {
	if(month === 'January'){
		return '01'
	}else if(month === 'February'){
		return '02'
	}else if(month === 'March'){
		return '03'
	}else if(month === 'April'){
		return '04'
	}else if(month === 'May'){
		return '05'
	}else if(month === 'June'){
		return '06'
	}else if(month === 'July'){
		return '07'
	}else if(month === 'August'){
		return '08'
	}else if(month === 'September'){
		return '09'
	}else if(month === 'October'){
		return '10'
	}else if(month === 'November'){
		return '11'
	}else if(month === 'December'){
		return '12'
	}
}

//Rounding for Minute and Hour
const hourFunction = (minuteStart,hour) => {
	if(minuteStart === '45'){
		return hour - 1
	}else if(minuteStart === '50'){
		return hour - 1
	}else if(minuteStart === '55'){
		return hour - 1
	}else{
		return hour
	}
}

const round5 = (x) => { 
    let initRound = (x % 5) >= 2.5 ? parseInt(x / 5) * 5 - 5: parseInt(x / 5) * 5 - 5;
    if(initRound == 0){
    	return '00'
    }else if(initRound == 5){
    	return '05'
    }else{
    	return initRound
    }
}
const lessen = (x) => {
	console.log(x)
	if(x === '00'){
		return '45'
	}else if(x === '05'){
		return '50'
	}else if(x ==='10'){
		return '55'
	}else{
		return x - 15
	}
}

//Render API Response
const renderResponse = (time,temperature,dew,gust,speed) => {
	
	/*let weirdUnit = '°F'
	let unit = weirdUnit[1]*/
	
	let tableTemp = document.getElementById('temperature')
	tableTemp.innerHTML = `${temperature}°F`
	
	let tableDew = document.getElementById('dew')
	tableDew.innerHTML = `${dew}°F`
	
	let tableGust = document.getElementById('gust')
	tableGust.innerHTML = `${gust} mph`
	
	let tableSpeed = document.getElementById('speed')
	tableSpeed.innerHTML = `${speed} mph`
	
	let tableTime = document.getElementById('time')
	tableTime.innerHTML = time
}
