
function getIndexThatIsNotPrize(prizeIndex){
	for(var i = 0; i <= 2; i++){
		if(i !== prizeIndex){
			return i;
		}
	}
}

function getIndexThatIsNotPrizeAndNotGoat1(prizeIndex, goat1Index){
	for(var i =0; i<= 2; i++){
		if(i !== prizeIndex && i !== goat1Index){
			return i;
		}
	}
}
function getIndexThatIsNotPrizeAndNotPlayerIndex(playerIndex, prizeIndex){
	for(var i = 0; i <= 2; i++){
		if(i !== playerIndex && i !== prizeIndex){
			return i;
		}
	}
}
function getIndexThatIsNotHostAndPlayer(hostIndex, playerIndex){
	for(var i = 0; i <= 2; i++){
		if(i !== hostIndex && i !== playerIndex){
				return i;
		}
	}
}
function game(stay){
	var playerIndex = Math.floor(Math.random() * 3);
	var prizeIndex = Math.floor(Math.random() * 3);
	var goat1Index = getIndexThatIsNotPrize(prizeIndex);
	var goat2Index = getIndexThatIsNotPrizeAndNotGoat1(prizeIndex, goat1Index);
	var hostIndex = getIndexThatIsNotPrizeAndNotPlayerIndex(playerIndex, prizeIndex);


	if(stay){
		if(playerIndex === prizeIndex){
			return 1;
		}
	}
	else{
		var lastAvailableIndex = getIndexThatIsNotHostAndPlayer(hostIndex, playerIndex);

		if(lastAvailableIndex === prizeIndex){
			return 1;
		}
	}
	return 0;
}
function simulation(stay){
	var stayCounter = 0;
	var switchCounter = 0;
	var attempts = 10000;

	for(var i = 1; i <= attempts; i++){
			stayCounter += game(true);
			switchCounter += game(false);
	}
	totalStay = stayCounter/attempts;
	totalSwitch = switchCounter/attempts;

	console.log('When a contestant STAYS with their choice: ', totalStay);
	console.log('When a contestant SWITCHES their choice: ', totalSwitch);
}
