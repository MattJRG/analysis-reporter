function comment(x) {
	if (x === 'milk') {
		var pLevel = parseInt(document.getElementById("phosphorusMilk").value);
		var mnLevel = parseInt(document.getElementById("manganeseMilk").value);
		var znLevel = parseInt(document.getElementById("zincMilk").value);
		var cuLevel = parseInt(document.getElementById("copperMilk").value);
		var moLevel = parseInt(document.getElementById("molybdenumMilk").value);
		var iLevel = parseInt(document.getElementById("iodineMilk").value);
		var seLevel = parseInt(document.getElementById("seleniumMilk").value);


		phosphorus = new TraceElementMilk(pLevel, "Phosphorus", 350, 600, 900, 1500, 1750, 2500);
		manganese = new TraceElementMilk(mnLevel, "Manganese", 10, 15, 20, 30, 35, 70);
		zinc = new TraceElementMilk(znLevel, "Zinc", 2000, 2500, 3000, 4500, 5000, 7500);
		copper = new TraceElementMilk(cuLevel, "Copper", 35, 40, 50, 65, 75, 120);
		molybdenum = new TraceElementMilk(moLevel, "Molybdenum", 30, 35, 40, 60, 70, 100);
		iodine = new TraceElementMilk(iLevel, "Iodine", 20, 40, 60, 150, 250, 400);
		selenium = new TraceElementMilk(seLevel, "Selenium", 5, 10, 15, 25, 30, 65);

		var elements = [];
			elements.push(phosphorus);
			elements.push(manganese); 
			elements.push(zinc);
			elements.push(copper);
			elements.push(molybdenum); 
			elements.push(iodine);
			elements.push(selenium);

		var sorter = new TraceElementSorterMilk(elements);
		var veryLowElements = sorter.getVeryLowTraceElements()
		var lowElements = sorter.getLowTraceElements()
		var marginalElements = sorter.getMarginalTraceElements()
		var satisfactoryElements = sorter.getSatisfactoryTraceElements()
		var moderateElements = [];
		var highElements = sorter.getHighTraceElements()
		var veryHighElements = sorter.getVeryHighTraceElements()
		var extremelyHighElements = sorter.getExtremelyHighTraceElements()

		var sortedElements = [];
			sortedElements.push(new GroupedElements("satisfactory", satisfactoryElements));
			sortedElements.push(new GroupedElements("moderate", moderateElements));
			sortedElements.push(new GroupedElements("extremely high", extremelyHighElements));
			sortedElements.push(new GroupedElements("very high", veryHighElements));
			sortedElements.push(new GroupedElements("high", highElements));
			sortedElements.push(new GroupedElements("marginal", marginalElements));
			sortedElements.push(new GroupedElements("low", lowElements));
			sortedElements.push(new GroupedElements("very low", veryLowElements));

		var specificComments = new SpecificElementCommentsMilk();
		var elementComments = new ElementCommentsMilk();
		var lowlowlow = "lowlowlow";

		var allElementsLessThanSatisfactory = veryLowElements.concat(lowElements).concat(marginalElements);
		var allElementsMoreThanSatisfactory = moderateElements.concat(highElements).concat(veryHighElements).concat(extremelyHighElements);

		var nonSatisfactoryElements = veryLowElements.concat(lowElements).concat(marginalElements).concat(highElements).concat(veryHighElements).concat(extremelyHighElements)
		var nonSatisfactoryElementsLessMolybdenum = veryLowElements.concat(lowElements).concat(marginalElements).concat(highElements).concat(veryHighElements).concat(extremelyHighElements)

		var allElements = veryLowElements.concat(lowElements).concat(marginalElements).concat(satisfactoryElements).concat(highElements).concat(veryHighElements).concat(extremelyHighElements)

		specificComments.removeMolybdenum(nonSatisfactoryElementsLessMolybdenum, satisfactoryElements, moLevel, moderateElements, molybdenum);

		var allElementsMoreThanSatisfactory = moderateElements.concat(highElements).concat(veryHighElements).concat(extremelyHighElements);

		document.getElementById("milkComments").innerHTML = elementComments.areThereNoValues(allElements)
		+ elementComments.printAllElementComments(sortedElements, allElements, veryLowElements, lowElements, marginalElements) 
		+ specificComments.belowSatisfactoryCopper(veryLowElements, lowElements, marginalElements, moLevel) 
		+ specificComments.mainSatisfactory(satisfactoryElements, allElements, cuLevel, moLevel) 
		+ specificComments.mainCopper(marginalElements, cuLevel, moLevel) 
		+ specificComments.mainCopper2(extremelyHighElements, veryHighElements, highElements, cuLevel, moLevel) 
		+ specificComments.mainMolybdenum(cuLevel, moLevel) 
		+ specificComments.mainIodine(allElementsMoreThanSatisfactory) 
		+ specificComments.mainManganese(allElementsMoreThanSatisfactory) 
		+ specificComments.mainSelenium(allElementsMoreThanSatisfactory) 
		+ elementComments.variableIodineComment (allElements) 
		+ specificComments.reviewElements(nonSatisfactoryElementsLessMolybdenum, allElements) 
		+ specificComments.reviewCuHighMo(satisfactoryElements, allElements, allElementsMoreThanSatisfactory, cuLevel, moLevel) 
		+ specificComments.mainCommentPhosphorus(allElements);
	
	} else if (x === 'water') {
		var phLevel = parseFloat(document.getElementById("phWater").value);
		var conLevel = parseFloat(document.getElementById("conductivityWater").value);
		var tdsLevel = parseFloat(document.getElementById("tdsWater").value);
		var hardnessLevel = (parseFloat(document.getElementById("calciumWater").value)*2.497 + parseFloat(document.getElementById("magnesiumWater").value)*4.116);
		var no3Level = parseFloat(document.getElementById("nitrateWater").value);
		var nh4Level = parseFloat(document.getElementById("ammoniaWater").value);
		var caLevel = parseFloat(document.getElementById("calciumWater").value);
		var clLevel = parseFloat(document.getElementById("chlorideWater").value);
		var mgLevel = parseFloat(document.getElementById("magnesiumWater").value);
		var pLevel = parseFloat(document.getElementById("phosphorusWater").value);
		var kLevel = parseFloat(document.getElementById("potassiumWater").value);
		var naLevel = parseFloat(document.getElementById("sodiumWater").value);
		var so4Level = parseFloat(document.getElementById("sulphateWater").value);
		var alLevel = parseFloat(document.getElementById("aluminiumWater").value);
		var cuLevel = parseFloat(document.getElementById("copperWater").value);
		var feLevel = parseFloat(document.getElementById("ironWater").value);
		var pbLevel = parseFloat(document.getElementById("leadWater").value);
		var mnLevel = parseFloat(document.getElementById("manganeseWater").value);
		var znLevel = parseFloat(document.getElementById("zincWater").value);
		var bLevel = parseFloat(document.getElementById("boronWater").value);
		

		ph = new TraceElementWater(phLevel, "pH", 6, 8.5, 10, 12);
		conductivity = new TraceElementWater(conLevel, "Conductivity", 1000, 2000, 6000, 10000);
		tds = new TraceElementWater(tdsLevel, "Total Dissolved Solids", 500, 1000, 3000, 5000);
		hardness = new TraceElementWater(hardnessLevel, "Hardness", 150, 250, 420, 1000);
		nitrate = new TraceElementWater(no3Level, "Nitrate", 25, 50, 100, 200);
		ammonia = new TraceElementWater(nh4Level, "Ammonia", 0.5, 1.5, 3, 5);
		calcium = new TraceElementWater(caLevel, "Calcium", 100, 250, 500, 1000);
		chloride = new TraceElementWater(clLevel, "Chloride", 100, 250, 500, 1000);
		magnesium = new TraceElementWater(mgLevel, "Magnesium", 50, 75, 100, 300);
		phosphorus = new TraceElementWater(pLevel, "Phosphorus", 1, 2, 4, 6);
		potassium = new TraceElementWater(kLevel, "Potassium", 10, 20, 30, 50);
		sodium = new TraceElementWater(naLevel, "Sodium", 50, 100, 200, 400);
		sulphate = new TraceElementWater(so4Level, "Sulphate", 75, 250, 500, 1000);
		aluminium = new TraceElementWater(alLevel, "Aluminium", 200, 400, 500, 1000);
		copper = new TraceElementWater(cuLevel, "Copper", 100, 500, 2000, 5000);
		iron = new TraceElementWater(feLevel, "Iron", 100, 200, 750, 2500);
		lead = new TraceElementWater(pbLevel, "Lead", 25, 50, 75, 100);
		manganese = new TraceElementWater(mnLevel, "Manganese", 25, 50, 350, 500);
		zinc = new TraceElementWater(znLevel, "Zinc", 2500, 5000, 7500, 10000);
		boron = new TraceElementWater(bLevel, "Boron", 2500, 5000, 7500, 10000);

		var elements = [];
			elements.push(nitrate);
			elements.push(ammonia);
			elements.push(calcium);
			elements.push(chloride);
			elements.push(magnesium);
			elements.push(phosphorus);
			elements.push(potassium);
			elements.push(sodium);
			elements.push(sulphate);
			elements.push(aluminium);
			elements.push(copper);
			elements.push(iron);
			elements.push(lead);
			elements.push(manganese); 
			elements.push(zinc);
			elements.push(boron);

		var primeElements = [];
			primeElements.push(ph);
			primeElements.push(conductivity);
			primeElements.push(tds);
			primeElements.push(hardness);

		var sorter = new TraceElementSorterWater(elements);
		var satisfactoryElements = sorter.getSatisfactoryTraceElements();
		var raisedElements = sorter.getRaisedTraceElements();
		var highElements = sorter.getHighTraceElements();
		var veryHighElements = sorter.getVeryHighTraceElements();
		var extremelyHighElements = sorter.getExtremelyHighTraceElements();
		
		var allElements = satisfactoryElements.concat(raisedElements).concat(highElements).concat(veryHighElements).concat(extremelyHighElements);
		
		var nonSatisfactoryElements = raisedElements.concat(highElements).concat(veryHighElements).concat(extremelyHighElements);

		var allElementsMoreThanSatisfactory = raisedElements.concat(highElements).concat(veryHighElements).concat(extremelyHighElements);

		var allElementsMoreThanRaised = highElements.concat(veryHighElements).concat(extremelyHighElements);

		var allElementsRaisedAndLess = satisfactoryElements.concat(raisedElements);

		var allElementsMoreThanHigh = veryHighElements.concat(extremelyHighElements);

		var allElementsMoreThanHighLessSodium = veryHighElements.concat(extremelyHighElements);

		var allElementsRaisedAndHigh = raisedElements.concat(highElements);

		var seperatedMetalElements = [];

		var ammoniaNitratePotassium = [];

		var primeSorter = new TraceElementSorterWater(primeElements);

		var primeSatisfactoryElements = primeSorter.getSatisfactoryTraceElements();
		var primeRaisedElements = primeSorter.getRaisedTraceElements();
		var primeHighElements = primeSorter.getHighTraceElements();
		var primeVeryHighElements = primeSorter.getVeryHighTraceElements();
		var primeExtremelyHighElements = primeSorter.getExtremelyHighTraceElements();

		var sortedElements = [];
			sortedElements.push(new GroupedElements("raised", raisedElements));
			sortedElements.push(new GroupedElements("high", highElements));
			sortedElements.push(new GroupedElements("very high", veryHighElements));
			sortedElements.push(new GroupedElements("extremely high", extremelyHighElements));

		var specificComments = new SpecificElementCommentsWater();
		var elementComments = new ElementCommentsWater();

		specificComments.removeSodium(allElementsMoreThanHighLessSodium, naLevel);

		console.log(allElements);
		
		document.getElementById("waterComments").innerHTML = specificComments.phInitialComment(primeSatisfactoryElements, primeRaisedElements, primeHighElements, primeVeryHighElements, phLevel, hardnessLevel) 
		+ specificComments.hardnessComment(hardnessLevel, mgLevel, caLevel, primeSatisfactoryElements, primeHighElements, primeVeryHighElements, naLevel)
		+ specificComments.acidPhComment(primeSatisfactoryElements)
		+ specificComments.areThereNoValues(allElements, nonSatisfactoryElements, allElementsMoreThanRaised, raisedElements, primeSatisfactoryElements)
		+ specificComments.sodiumChlorideComment(naLevel, clLevel, tdsLevel)
		+ elementComments.printAllElementComments(sortedElements, allElements, raisedElements)
		+ specificComments.sodiumChlorideCommentGeneral(naLevel, clLevel)
		+ specificComments.magnesiumChlorideComment(allElementsMoreThanRaised, mgLevel, clLevel)
		+ specificComments.seperateIronManganeseAluminium(allElementsMoreThanRaised, seperatedMetalElements)
		+ specificComments.seperateAmmoniaNitratePotassium(allElementsMoreThanSatisfactory, ammoniaNitratePotassium)
		+ specificComments.phosphorusComment(veryHighElements, highElements)
		+ specificComments.firstIronManganeseComment(seperatedMetalElements, allElements)
		+ specificComments.secondIronManganeseComment(allElementsMoreThanRaised, mnLevel, feLevel, allElementsRaisedAndLess)
		+ specificComments.sulphateComment(so4Level)
		+ specificComments.sodiumSulphateComment(veryHighElements, raisedElements, highElements, allElementsMoreThanSatisfactory, naLevel, so4Level) 
		+ specificComments.sodiumComment(naLevel)
		+ specificComments.ammoniaComment(ammoniaNitratePotassium, allElements, nh4Level)
		+ specificComments.summaryComment(allElementsMoreThanHighLessSodium, allElements, allElementsMoreThanRaised, mnLevel, feLevel, raisedElements, naLevel, clLevel, tdsLevel, allElementsMoreThanHigh)
		+ specificComments.noLead(allElements, pbLevel); 
	
	} else if (x === 'micro') {
		var salLevel = parseFloat(document.getElementById("salmonellaMicro").value);
		var ecolLevel = parseFloat(document.getElementById("ecoliMicro").value);
		var colLevel = parseFloat(document.getElementById("coliformsMicro").value);
		var camLevel = parseFloat(document.getElementById("campylobacterMicro").value);
		var closLevel = parseFloat(document.getElementById("clostridiumMicro").value);
		var pseuLevel = parseFloat(document.getElementById("pseudomonasMicro").value);
	
		salmonella = new TraceElementMicro(salLevel, "Salmonella", 0, 8.5, 10, 12);
		ecoli = new TraceElementMicro(ecolLevel, "E-Coli", 0, 1, 25, 1500);
		coliforms = new TraceElementMicro(colLevel, "Total Coliforms", 0, 25, 100, 1300);
		campylobacter = new TraceElementMicro(camLevel, "Campylobacter", 0, 10, 420, 1000);
		clostridium = new TraceElementMicro(closLevel, "Clostridium perfringens", 10, 24, 50, 100);
		pseudomonas = new TraceElementMicro(pseuLevel, "Pseudomonas", 0, 10, 100, 300);
		
		var elements = [];
			elements.push(salmonella);
			elements.push(ecoli);
			elements.push(coliforms);
			elements.push(campylobacter);
			elements.push(clostridium);
			elements.push(pseudomonas);
	
		var sorter = new TraceElementSorterMicro(elements);
		var satisfactoryElements = sorter.getSatisfactoryTraceElements();
		var raisedElements = sorter.getRaisedTraceElements();
		var highElements = sorter.getHighTraceElements();
		var veryHighElements = sorter.getVeryHighTraceElements();
		var extremelyHighElements = sorter.getExtremelyHighTraceElements();
		
		var allElements = satisfactoryElements.concat(raisedElements).concat(highElements).concat(veryHighElements).concat(extremelyHighElements);
		
		var nonSatisfactoryElements = raisedElements.concat(highElements).concat(veryHighElements).concat(extremelyHighElements);
	
		var allElementsMoreThanRaised = highElements.concat(veryHighElements).concat(extremelyHighElements);
	
		var allElementsMoreThanHigh = veryHighElements.concat(extremelyHighElements);
	
		var sortedElements = [];
			sortedElements.push(new GroupedElements("raised", raisedElements));
			sortedElements.push(new GroupedElements("high", highElements));
			sortedElements.push(new GroupedElements("very high", veryHighElements));
			sortedElements.push(new GroupedElements("extremely high", extremelyHighElements));
	
		var specificComments = new SpecificElementCommentsMicro();
		var elementComments = new ElementCommentsMicro();
	
		console.log(extremelyHighElements);
		console.log(satisfactoryElements);
		
		document.getElementById("microComments").innerHTML = specificComments.areThereNoValues(allElements) 
		+ specificComments.mainComment(satisfactoryElements, raisedElements, highElements, veryHighElements, extremelyHighElements, allElements, colLevel, closLevel, ecolLevel, salLevel); 
	}
};

var milkGuide = document.getElementById("milkGuideBox");
var waterGuide = document.getElementById("waterGuideBox");
var microGuide = document.getElementById("microGuideBox");


function toggleGuide(x) {
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

var milkApp = document.getElementById("milk-app");
var waterApp = document.getElementById("water-app");
var microApp = document.getElementById("micro-app");
var homeApp = document.getElementById("home-app");

var milkNav = document.getElementById("milkNav");
var waterNav = document.getElementById("waterNav");
var microNav = document.getElementById("microNav");

function togglePage(activeNav, activeApp, nav2, nav2App, nav3, nav3App, homeApp) {
	activeNav.classList.add('active');
	nav2.classList.remove('active');	
	nav3.classList.remove('active');
	homeApp.style.display = "none";	

	if (activeApp.style.display === "none") {
		activeApp.style.display = "block";
		nav2App.style.display = "none";
		nav3App.style.display = "none";
	} else if (activeApp.style.display === "block") {
		activeApp.style.display = "block";
		nav2App.style.display = "none";
		nav3App.style.display = "none";
	}
}


function LiveUpdate(x) {

	if (x === "milk") {

	var liveElementStatus = new LiveElementStatus(x);
	var pLevel = parseInt(document.getElementById("phosphorusMilk").value);
	var mnLevel = parseInt(document.getElementById("manganeseMilk").value);
	var znLevel = parseInt(document.getElementById("zincMilk").value);
	var cuLevel = parseInt(document.getElementById("copperMilk").value);
	var moLevel = parseInt(document.getElementById("molybdenumMilk").value);
	var iLevel = parseInt(document.getElementById("iodineMilk").value);
	var seLevel = parseInt(document.getElementById("seleniumMilk").value);



	document.getElementById("pStatus").innerHTML = liveElementStatus.pStatusLive(pLevel);
	document.getElementById("mnStatus").innerHTML = liveElementStatus.mnStatusLive(mnLevel);
	document.getElementById("znStatus").innerHTML = liveElementStatus.znStatusLive(znLevel);
	document.getElementById("cuStatus").innerHTML = liveElementStatus.cuStatusLive(cuLevel);
	document.getElementById("moStatus").innerHTML = liveElementStatus.moStatusLive(moLevel);
	document.getElementById("iStatus").innerHTML = liveElementStatus.iStatusLive(iLevel);
	document.getElementById("seStatus").innerHTML = liveElementStatus.seStatusLive(seLevel);

	} else if (x === "water") {

	var liveElementStatus = new LiveElementStatus(x);
	var phLevel = parseFloat(document.getElementById("phWater").value);
	var pLevel = parseFloat(document.getElementById("phosphorusWater").value);
	var mnLevel = parseFloat(document.getElementById("manganeseWater").value);
	var znLevel = parseFloat(document.getElementById("zincWater").value);
	var cuLevel = parseFloat(document.getElementById("copperWater").value);
	var mgLevel = parseFloat(document.getElementById("magnesiumWater").value);
	var caLevel = parseFloat(document.getElementById("calciumWater").value);
	var iLevel = parseFloat(document.getElementById("ironWater").value);
	var seLevel = parseFloat(document.getElementById("sodiumWater").value);
	var hardnessLevel = (parseFloat(document.getElementById("calciumWater").value)*2.497 + parseFloat(document.getElementById("magnesiumWater").value)*4.116);

	document.getElementById("phStatus").innerHTML = liveElementStatus.phStatusLive(phLevel);
	document.getElementById("pStatus").innerHTML = liveElementStatus.pStatusLive(pLevel);
	document.getElementById("mnStatus").innerHTML = liveElementStatus.mnStatusLive(mnLevel);
	document.getElementById("znStatus").innerHTML = liveElementStatus.znStatusLive(znLevel);
	document.getElementById("cuStatus").innerHTML = liveElementStatus.cuStatusLive(cuLevel);
	document.getElementById("mgStatus").innerHTML = liveElementStatus.mgStatusLive(mgLevel);
	document.getElementById("caStatus").innerHTML = liveElementStatus.caStatusLive(caLevel);
	document.getElementById("feStatus").innerHTML = liveElementStatus.feStatusLive(iLevel);
	document.getElementById("naStatus").innerHTML = liveElementStatus.naStatusLive(seLevel);
	document.getElementById("hardnessStatus").innerHTML = liveElementStatus.hardnessStatusLive(hardnessLevel);
	document.getElementById("hardnessWater").value = (parseFloat(document.getElementById("calciumWater").value)*2.497 + parseFloat(document.getElementById("magnesiumWater").value)*4.116).toFixed(0);
	
	
	// if (caLevel.length === 0 && mgLevel.length === 0) {
	// 		document.getElementById("hardnessWater").value = "Enter Ca & Mg";
	// 	} else if (caLevel === false && mgLevel < 0) {
	// 		document.getElementById("hardnessWater").value = "Enter Ca";
	// 	} else if (mgLevel === false && caLevel < 0) {
	// 		document.getElementById("hardnessWater").value = "Enter Mg";
	// 	} else if (mgLevel < 0 && caLevel < 0) {
	// 		document.getElementById("hardnessWater").value = (parseFloat(document.getElementById("calciumWater").value)*2.497 + parseFloat(document.getElementById("magnesiumWater").value)*4.116).toFixed(0);
	// 	}
	}
}
/*
function showLiveStatus() {
		var stsChkBx = document.getElementById("statusCheckbox");
		var vis = "none";
	if (stsChkBx.checked) {
	 vis = "block";
	} else {
		vis ="none"
	}

	document.getElementById("pStatus").style.display = vis;
	document.getElementById("mnStatus").style.display = vis;
	document.getElementById("znStatus").style.display = vis;
	document.getElementById("cuStatus").style.display = vis;
	document.getElementById("moStatus").style.display = vis;
	document.getElementById("iStatus").style.display = vis;
	document.getElementById("seStatus").style.display = vis;
}
*/

function copyComments(x) {
	if (x === "milk") {
		contentHolder = document.getElementById("milkComments");
	} else if (x === "water") {
		contentHolder = document.getElementById("waterComments");
	} else if (x === "micro") {
		contentHolder = document.getElementById("microComments");
	}
    // We will need a range object and a selection.
    var range = document.createRange(),
        selection = window.getSelection();

    // Clear selection from any previous data.
    selection.removeAllRanges();

    // Make the range select the entire content of the contentHolder paragraph.
    range.selectNodeContents(contentHolder);

    // Add that range to the selection.
    selection.addRange(range);

    // Copy the selection to clipboard.
    document.execCommand('copy');

    // Clear selection if you want to.
	selection.removeAllRanges();
};

function clearPage(x){
	if (x === "milk") {
		document.getElementById("milkComments").innerHTML = "";
		document.getElementById("phosphorusMilk").value = "";
		document.getElementById("manganeseMilk").value = "";
		document.getElementById("zincMilk").value = "";
		document.getElementById("copperMilk").value = "";
		document.getElementById("molybdenumMilk").value = "";
		document.getElementById("iodineMilk").value = "";
		document.getElementById("seleniumMilk").value = "";
		document.getElementById("varICheckbox").checked = false;
		// document.getElementById("pStatus").innerHTML ="---";
		// document.getElementById("mnStatus").innerHTML ="---";
		// document.getElementById("znStatus").innerHTML ="---";
		// document.getElementById("cuStatus").innerHTML ="---";
		// document.getElementById("moStatus").innerHTML ="---";
		// document.getElementById("iStatus").innerHTML ="---";
		// document.getElementById("seStatus").innerHTML ="---";

	} else if (x === "water") {
		document.getElementById("waterComments").innerHTML = "";
		document.getElementById("phWater").value = "";
		document.getElementById("conductivityWater").value = "";
		document.getElementById("tdsWater").value = "";
		document.getElementById("nitrateWater").value = "";
		document.getElementById("ammoniaWater").value = "";
		document.getElementById("calciumWater").value = "";
		document.getElementById("chlorideWater").value = "";
		document.getElementById("magnesiumWater").value = "";
		document.getElementById("phosphorusWater").value = "";
		document.getElementById("potassiumWater").value = "";
		document.getElementById("sodiumWater").value = "";
		document.getElementById("sulphateWater").value = "";
		document.getElementById("aluminiumWater").value = "";
		document.getElementById("copperWater").value = "";
		document.getElementById("ironWater").value = "";
		document.getElementById("leadWater").value = "";
		document.getElementById("manganeseWater").value = "";
		document.getElementById("zincWater").value = "";
		document.getElementById("boronWater").value = "";
		document.getElementById("hardnessWater").value = "";
		document.getElementById("poultryCheckbox").checked = false;

	} else if (x === "micro") {
		document.getElementById("salmonellaMicro").value = "";
		document.getElementById("microComments").innerHTML = "";
		document.getElementById("ecoliMicro").value = "";
		document.getElementById("coliformsMicro").value = "";
		document.getElementById("campylobacterMicro").value = "";
		document.getElementById("clostridiumMicro").value = "";
		document.getElementById("pseudomonasMicro").value = "";
		document.getElementById("humanCheckbox").checked = false;
	}
};

function demo(x){
	if (x === "milk") {
		// document.getElementById("milkComments").innerHTML = "";
		document.getElementById("phosphorusMilk").value = "1150";
		document.getElementById("manganeseMilk").value = "21";
		document.getElementById("zincMilk").value = "3455";
		document.getElementById("copperMilk").value = "43";
		document.getElementById("molybdenumMilk").value = "44";
		document.getElementById("iodineMilk").value = "46";
		document.getElementById("seleniumMilk").value = "11";
		document.getElementById("varICheckbox").checked = false;
		comment(x)

	} else if (x === "water") {
		// document.getElementById("waterComments").innerHTML = "";
		document.getElementById("phWater").value = "7.2";
		document.getElementById("conductivityWater").value = "1441";
		document.getElementById("tdsWater").value = "835";
		document.getElementById("nitrateWater").value = "0.1";
		document.getElementById("ammoniaWater").value = "0.1";
		document.getElementById("calciumWater").value = "19";
		document.getElementById("chlorideWater").value = "357";
		document.getElementById("magnesiumWater").value = "2";
		document.getElementById("phosphorusWater").value = "0.1";
		document.getElementById("potassiumWater").value = "1";
		document.getElementById("sodiumWater").value = "328";
		document.getElementById("sulphateWater").value = "16";
		document.getElementById("aluminiumWater").value = "10";
		document.getElementById("copperWater").value = "10";
		document.getElementById("ironWater").value = "20";
		document.getElementById("leadWater").value = "5";
		document.getElementById("manganeseWater").value = "10";
		document.getElementById("zincWater").value = "5";
		document.getElementById("boronWater").value = "520";
		document.getElementById("hardnessWater").value = (parseFloat(document.getElementById("calciumWater").value)*2.497 + parseFloat(document.getElementById("magnesiumWater").value)*4.116).toFixed(0);
		document.getElementById("poultryCheckbox").checked = false;
		comment(x)

	} else if (x === "micro") {
		// document.getElementById("microCommentsMicro").innerHTML = "";
		document.getElementById("salmonellaMicro").value = "15";
		document.getElementById("ecoliMicro").value = "10120";
		document.getElementById("coliformsMicro").value = "15760";
		document.getElementById("campylobacterMicro").value = "0";
		document.getElementById("clostridiumMicro").value = "1152";
		document.getElementById("pseudomonasMicro").value = "1";
		document.getElementById("humanCheckbox").checked = false;
		comment(x)
	}
};

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
	  includedLanguages: 'en,fr',
      layout: google.translate.TranslateElement.InlineLayout
    }, 'google_translate_element');
  }