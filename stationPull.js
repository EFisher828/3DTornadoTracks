//Split Current Time/Date into Useable Strings
const currentDate	= new Date()
const stringDate = new String(currentDate)
const dateList = stringDate.split(' ')
console.log(dateList)

const month = monthConversion(dateList[1])
const day = dateList[2]
const year = dateList[3]

const timeFull = dateList[4]
const timeList = timeFull.split(':')
const hour = timeList[0]
const minuteEnd = round5(timeList[1])
const minuteStart = lessen(minuteEnd)
const hourStart = hourFunction(minuteStart,hour)

//Day less for iframe
const dayLess = day - 1
const hourLess = hour - 1

let url = `https://api.climate.ncsu.edu/data?loc=GRANDFATHR&var=airtemp10m,dewtemp10m,gustspeed10m,windspeed10m&start=${year}-${month}-${day}%20${hourStart}:${minuteStart}&end=${year}-${month}-${day}%20${hour}:${minuteEnd}&int=5%20MINUTE&obtype=O&output=json&attr=location,datetime,var,value,unit,obtime&hash=dfbe688cda05afac338c1541f177bc1019f89435`
console.log(url)
					
const xhr = new XMLHttpRequest();
					
					
xhr.responseType = 'json';
					
xhr.onreadystatechange = function() {
	if(xhr.readyState === XMLHttpRequest.DONE){
		let name = xhr.response.data.GRANDFATHR;
		let temperature;
		let time;
		let dew;
		let gust;
		let speed;
		for(key in name){
			try{
				let tempLoop = name[key].airtemp10m.value;
				let timeLoop = name[key].airtemp10m.obtime;
				let dewLoop = name[key].dewtemp10m.value;
				let gustLoop = name[key].gustspeed10m.value;
				let speedLoop = name[key].windspeed10m.value
				
				if(tempLoop !== 'NA'){
					temperature = tempLoop
					time = timeLoop
					dew = dewLoop
					gust = gustLoop
					speed = speedLoop
				}else if(tempLoop === 'NA'){
					break
				}
			}catch(err){
				break
			}
		}						
		
		renderResponse(time,temperature,dew,gust,speed)				
	}
}
					
xhr.open("GET",url)
xhr.send()

let tempDewFrame = document.getElementById('tempDew').src = `https://api.climate.ncsu.edu/data?loc=GRANDFATHR&var=airtemp10m,dewtemp10m&start=${year}-${month}-${dayLess}%20${hourLess}:00&end=${year}-${month}-${day}%20${hourLess}:00&int=1%20HOUR&obtype=H&output=chart&attr=location,datetime,var,value,value_accum,unit,score,nettype,paramtype,obtype,obnum,obtime&hash=dfbe688cda05afac338c1541f177bc1019f89435`
let speedGustFrame = document.getElementById('speedGust').src = `https://api.climate.ncsu.edu/data?loc=GRANDFATHR&var=windspeed10m,gustspeed10m&start=${year}-${month}-${dayLess}%20${hourLess}:00&end=${year}-${month}-${day}%20${hourLess}:00&int=1%20HOUR&obtype=H&output=chart&attr=location,datetime,var,value,value_accum,unit,score,nettype,paramtype,obtype,obnum,obtime&hash=dfbe688cda05afac338c1541f177bc1019f89435`
