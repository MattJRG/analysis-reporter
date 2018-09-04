function SpecificElementCommentsWater(){

	var forPoultry = document.getElementById("poultryCheckbox");

	this.elementComments = new ElementCommentsWater();

	this.joiningComment = function(raisedElements, nonSatisfactoryElements, allElementsMoreThanRaised) {
		if (nonSatisfactoryElements.length === 0) {
			return ".";
		} else if (raisedElements.length >= 1) {
			return " including the ";
		} else if (raisedElements.length === 0 && allElementsMoreThanRaised.length >= 1) {
			return ", with the exception of the ";
		}
	}

	this.areThereNoValues = function(allElements, nonSatisfactoryElements, allElementsMoreThanRaised, raisedElements, primeSatisfactoryElements) {
		if (allElements.length < 15) {
			return "Please enter all trace element levels".fontcolor("red");
		} else {
			return " All " + this.acidPh(primeSatisfactoryElements) + "parameters have analysed satisfactorily" + this.joiningComment(raisedElements, nonSatisfactoryElements, allElementsMoreThanRaised);
		}
	}

	this.acidPh = function(primeSatisfactoryElements) {
		if (arrayContainsElement(primeSatisfactoryElements, "ph") === true) {
			return "remaining ";
		} else {
			return "";
		}
	}

	this.livestockOrPoultry = function() {
		if (forPoultry.checked) {
			return "poultry";
		   } else {
			   return "livestock"
		   }
	}

	this.cowOrBird = function() {
		if (forPoultry.checked) {
			return "bird";
		   } else {
			   return "cow"
		   }
	}

	this.phInitialComment = function(primeSatisfactoryElements, primeRaisedElements, primeHighElements, primeVeryHighElements, phLevel) {
		if (arrayContainsElement(primeSatisfactoryElements, "pH") === true) {
			return "Water sample has a slightly acidic pH due to the “soft” nature of this supply, which in turn is related to the low Calcium level. The water pH may slightly increase the risk of rumen acidosis in cows receiving a high starch diet, particularly if forages being fed have a high acid load.";
		}
		if (arrayContainsElement(primeRaisedElements, "pH") === true && phLevel < 8.0) {
			return "This water sample has a pH within the target range and can be characterised ";
		}
		if (arrayContainsElement(primeRaisedElements, "pH") === true && phLevel >= 8.0) {
			return "This water sample has a slightly alkaline pH, which is within the target range and can be characterised ";
		}
		if (arrayContainsElement(primeHighElements, "pH") === true) {
			return "This water sample has an alkaline pH ";
		}
		if (arrayContainsElement(primeVeryHighElements, "pH") === true) {
			return "This water sample has a very alkaline pH ";
		}
		else {
			return "";
		}
	}

	this.howSoftComment = function(hardnessLevel) {
		if (hardnessLevel < 50) {
			return " very ";
		}
		if (hardnessLevel >= 50 && hardnessLevel < 150) {
			return " ";
		}
		if (hardnessLevel >= 150 && hardnessLevel <= 175) {
			return " slightly ";
		}
	}

	this.howHardComment = function(hardnessLevel) {
		if (hardnessLevel >= 175 && hardnessLevel < 250) {
			return " slightly ";
		}
		if (hardnessLevel >= 250 && hardnessLevel < 420) {
			return " ";
		}
		if (hardnessLevel >= 420 && hardnessLevel < 1000) {
			return " very ";
		}
		if (hardnessLevel >= 1000) {
			return " extremely ";
		}
	}

	this.hardnessAdverseComment = function(hardnessLevel) {
		if (hardnessLevel <= 750) {
			return ". This is not an adverse feature for " + this.livestockOrPoultry() + ", but will increase the risk of pipes and valves “furring up”.";
		}
		if (hardnessLevel > 750) {
			return ", which will increase the risk of loose dung and reduced nutrient absorption due to gut irritation."
		}
		else {
			return ".";
		}
	}

	this.calciumMagnesiumLow = function(caLevel, mgLevel) {
		if (mgLevel > 25 && caLevel < 50) {
			return "due to the low Calcium level.";
		}
		if (mgLevel <= 25 && caLevel > 50) {
			return "due to the low Magnesium level.";
		 }
		 else {
			return "due to the low Calcium and Magnesium levels.";
		}
	}

	this.calciumMagnesiumHard = function(caLevel, mgLevel) {
		if (caLevel>mgLevel) {
			return "due to the reported Calcium level";
		}
		if (caLevel<mgLevel) {
			return "due to the reported Magnesium level"
		}
		else {
			return "due to the reported Calcium and Magnesium level"
		}
	}

	this.hardnessComment = function(hardnessLevel, mgLevel, caLevel, primeSatisfactoryElements, primeHighElements, primeVeryHighElements, veryHighElements) {

		if (arrayContainsElement(primeHighElements, "pH") === true || (arrayContainsElement(primeVeryHighElements, "pH") === true)&& hardnessLevel < 175) {
			return "which is very unusual given the “soft” nature of this supply. This analysis is not able to determine the source of this high pH. As it is outside the target pH for " + this.livestockOrPoultry() + ", there is a risk that it will reduce the efficiency of digestion and nutrient absorption.";
		}
		if (arrayContainsElement(primeHighElements, "pH") === true || (arrayContainsElement(primeVeryHighElements, "pH") === true) && hardnessLevel > 175) {
			return "and can be characterised as “hard” " + this.calciumMagnesiumHard(caLevel, mgLevel) + "This analysis is not able to determine the source of this high pH. As it is outside the target pH for " + this.livestockOrPoultry() + ", there is a risk that it will reduce the efficiency of digestion and nutrient absorption.";
		}
		
		if (hardnessLevel <= 175 && arrayContainsElement(primeSatisfactoryElements, "pH") === false) {
			return "as" + this.howSoftComment(hardnessLevel) + "“soft” " + this.calciumMagnesiumLow(caLevel, mgLevel);
		}
		if (hardnessLevel >= 175 && arrayContainsElement(veryHighElements, "Sodium") === true) {
			return "as" + this.howHardComment(hardnessLevel) + "“soft” " + this.calciumMagnesiumHard(caLevel, mgLevel);
		}
		if (hardnessLevel >= 175) {
			return "as" + this.howHardComment(hardnessLevel) + "“hard” " + this.calciumMagnesiumHard(caLevel, mgLevel) + this.hardnessAdverseComment(hardnessLevel);
		}
		if (arrayContainsElement(primeSatisfactoryElements, "pH") === true) {
			return "";
		}
		else {
			return "";
		}
	}

	this.acidPhComment = function(primeSatisfactoryElements) {
		if (arrayContainsElement(primeSatisfactoryElements, "pH") === true && forPoultry.checked === false) {
			return " If rumen acidosis is considered to be an on-going problem, which is resistant to being resolved through the use of nutritional buffers then consideration should be given to installing treatment equipment designed to raise the pH to 7.0 (neutral).";	
		}
		else {
			return ""; 
		}
	}

	this.isMgVeryHigh = function(mgLevel) {
		if (mgLevel >= 100){
			return " very ";
		} else {
			return " ";
		}
	}

	this.isClVeryHigh = function(clLevel) {
		if (clLevel >= 500){
			return " very ";
		} else {
			return " ";
		}
	}

	this.magnesiumChlorideComment = function(allElementsMoreThanRaised, mgLevel, clLevel) {
		if (arrayContainsElement(allElementsMoreThanRaised, "Manganese") === true && arrayContainsElement(allElementsMoreThanRaised, "Chloride") === true) {
			return " This" + this.isMgVeryHigh(mgLevel) + "high Magnesium level is associated with a" + this.isClVeryHigh(clLevel) + "high Chloride level, which suggests a Magnesium Chloride/Chlorate salt has been added to this supply, as these salts are not generally found in underlying rock strata.";
		} else {
			return "";
		}
	}

	this.seperateIronManganeseAluminium = function(allElementsMoreThanRaised, seperatedMetalElements) {
		if (arrayContainsElement(allElementsMoreThanRaised, "Iron") === true)
			seperatedMetalElements.push(iron);

		if (arrayContainsElement(allElementsMoreThanRaised, "Manganese") === true)
			seperatedMetalElements.push(manganese);
	
		if (arrayContainsElement(allElementsMoreThanRaised, "Aluminium") == true)
			seperatedMetalElements.push(aluminium);
			return "";
		}

	this.theInFirstFeAndMnComment = function(seperatedMetalElements) {
		if (seperatedMetalElements.length < 1) {
			return " The ";
		} else {
			return " ";
		}
	}

	this.phosphorusComment = function(veryHighElements, highElements) {
		if (arrayContainsElement(veryHighElements, "Phosphorus") === true && forPoultry.checked === false) {
			return "The Phosphorus level although high based on expected norms for water, represents only about 0.5% of the Phosphorus intake of a lactating dairy cow. Consequently it is inconsequential in terms of Phosphorus supply and is not adverse to cow health or production.";
		} else if (arrayContainsElement(highElements, "Phosphorus") === true && forPoultry.checked === false) {
			return "The Phosphorus level although high based on expected norms for water, represents only about 0.25% of the Phosphorus intake of a lactating dairy cow. Consequently it is inconsequential in terms of Phosphorus supply and is not adverse to cow health or production.";
		} else {
			return "";
		}
	}

	this.firstIronManganeseComment = function(seperatedMetalElements, allElements) {
		if (arrayContainsElement(seperatedMetalElements, "Iron") === true || arrayContainsElement(seperatedMetalElements, "Manganese") === true || arrayContainsElement(seperatedMetalElements, "Aluminium") === true ) {
			return this.theInFirstFeAndMnComment(seperatedMetalElements) + this.elementComments.printElements(seperatedMetalElements, allElements.length) + " may increase the risk of both reducing the palatability of the supply and increase oxidative stress to the detriment of " + this.cowOrBird() + " health and productivity. " + this.elementComments.printElements(seperatedMetalElements, allElements.length) + " can also stimulate the growth of microbes including pathogens in the water storage and distribution network, which can increase the risk of disease in " + this.livestockOrPoultry() + ".";
		} 
		else {
			return "";
		}
	}

	this.secondIronManganeseComment = function(allElementsMoreThanRaised, mnLevel, feLevel, allElementsRaisedAndLess) {
		console.log(allElementsMoreThanRaised);
		if (arrayContainsElement(allElementsMoreThanRaised, "Manganese") === true && mnLevel < 450 && arrayContainsElement(allElementsRaisedAndLess, "Iron") === true) {
			return " To minimise these possible problems, the supply should be well aerated before " + this.livestockOrPoultry() + " have access to it.  This can be achieved by pumping into a header tank for example, which will oxidise the Manganese and thereby reduce its potentially deleterious effects.";
		}
		if (arrayContainsElement(allElementsMoreThanRaised, "Iron") === true && feLevel < 1000 && mnLevel <= 50) {
			return " To minimise these possible problems, the supply should be well aerated before " + this.livestockOrPoultry() + " have access to it.  This can be achieved by pumping into a header tank for example, which will oxidise the Iron and thereby reduce its potentially deleterious effects.";
		}
		if (arrayContainsElement(allElementsMoreThanRaised, "Manganese") === true && mnLevel < 450 && arrayContainsElement(allElementsMoreThanRaised, "Iron") === true && feLevel < 1000) {
			return " To minimise these possible problems, the supply should be well aerated before " + this.livestockOrPoultry() + " have access to it.  This can be achieved by pumping into a header tank for example, which will oxidise the Iron and Manganese and thereby reduce their potentially deleterious effects.";
		} 
		if (mnLevel > 450 || feLevel > 1000) {
			return "";
		} 
		else {
			return "";
		}
	}

	this.ifAerationFailsToReduceMnFe = function() {
		if (mnLevel > 400 && mnLevel < 450 && feLevel < 800) {
			return " If this action fails to resolve any water intake or health issues considered to be associated with this water quality, then advice should be sought from your local water engineer on filtration options designed to reduce the Manganese level.";
		}
		if (feLevel > 800 && feLevel < 1000 && mnLevel < 400) {
			return " If this action fails to resolve any water intake or health issues considered to be associated with this water quality, then advice should be sought from your local water engineer on filtration options designed to reduce the Iron level.";
		}
		if (feLevel > 800 && feLevel < 1000 && mnLevel > 400 && mnLevel < 450) {
			return " If this action fails to resolve any water intake or health issues considered to be associated with this water quality, then advice should be sought from your local water engineer on filtration options designed to reduce the Iron and Mangaense levels.";
		}
		else {
			return "";
		}
	}

	this.sulphateComment = function(so4Level) {
		if (so4Level > 450 && so4Level < 500) {
			return " The Sulphate level is equivalent to raising the Sulphur level of the typical dairy diet by about 0.08%DM, which represents an increase of a third. This contribution should be taken into account when formulating balancing mineral supplements.";
		} else {
			return "";
		}
	}

	this.sodiumComment = function(naLevel) {
		if (naLevel > 200 && naLevel < 300 && forPoultry.checked === false) {
			return " In terms of dietary intake, the Sodium level is equivalent to increasing the typical dairy diet concentration by 0.10-0.15% DM, which represents about a 50% increase. Consequently, this contribution should be accounted for when formulating diets for Sodium (Salt).";
		} else if (naLevel > 100 && naLevel <150 && forPoultry.checked === false) {
			return " The Sodium intake from this water supply is equivalent to increasing the total dietary supply of a milking cow by about 0.15%DM. This contribution should be accounted for when formulating balancing mineral supplements or concentrates.";
		} else {
			return "";
		}
	}

	this.sodiumSulphateComment = function(veryHighElements, raisedElements, highElements, allElementsMoreThanSatisfactory) {
		if (arrayContainsElement(veryHighElements, "Sodium") === true && arrayContainsElement(highElements, "Sulphate") === true && forPoultry.checked === false) {
			return " The presence of Sodium Sulphate will have a laxative effect on the cows and increase looseness and reduce nutrient absorption. Although at this level it should not represent a challenge to cow health it will increase the risk of nutritional scours for pre-weaned calves less than 3 months in age.";
		} else if (arrayContainsElement(veryHighElements, "Sodium") === true && arrayContainsElement(veryHighElements, "Sulphate") === true && forPoultry.checked === false) {
			return "  The presence of Sodium Sulphate will have a laxative effect on the cows and increase looseness and reduce nutrient absorption. Although at this level it could represent a challenge to cow health and will significantly increase the risk of nutritional scours for pre-weaned calves less than 3 months in age.";
		} else if (arrayContainsElement(raisedElements, "Sodium") === true && arrayContainsElement(raisedElements, "Sulphate") === true && forPoultry.checked === false) {
			return " It should be noted that although the raised Sodium and Sulphate levels will be well tolerated by adult stock there will be an increased risk of nutritional scours for pre-weaned calves less than 3 months in age.";
		} 
		else if (arrayContainsElement(allElementsMoreThanSatisfactory, "Sodium") === true && arrayContainsElement(raisedElements, "Sulphate") === false && forPoultry.checked === false) {
			return " It should be noted that although the Sodium level will be well tolerated by adult stock there will be an increased risk of nutritional scours for pre-weaned calves less than 3 months in age.";
		}
		else if (arrayContainsElement(raisedElements, "Sodium") === false && arrayContainsElement(raisedElements, "Sulphate") === true && forPoultry.checked === false) {
			return " It should be noted that although the raised Sulphate level will be well tolerated by adult stock there will be an increased risk of nutritional scours for pre-weaned calves less than 3 months in age.";
		}
		else {
			return "";
		}
	}

	this.sodiumChlorideComment = function(naLevel, clLevel, tdsLevel) {
		if (naLevel > 1500 && clLevel > 2500 && tdsLevel > 5000) {
			return " The key feature of this report is the very high “Total Dissolved Solids” content, which is largely composed of Salt (sodium chloride). The Salt concentration is reported at 0.45% (4.5g/litre) and will be a natural feature of this supply. However, for a cow consuming 100 litres per day the salt intake will equate to 450g, which is X 2-3 higher than for a typical dairy diet. Although water containing this Salt level is likely to be palatable to cattle it does have the potential to interfere with osmotic balance and water transport	to the detriment of milk production.";
		} else {
			return "";
		}

	}

	this.sodiumChlorideCommentGeneral = function(naLevel, clLevel) {
		if (naLevel >= 200 && clLevel >= 350) {
			return " The Sodium Chloride level is equivalent to a Salt level of " + Math.round((naLevel + clLevel)/100)/10 + "g/litre (" + (Math.round((naLevel + clLevel)/100)/10/10).toFixed(2) + "%).";
		} else {
			return "";
		}

	}

	this.seperateAmmoniaNitratePotassium = function(allElementsMoreThanSatisfactory, ammoniaNitratePotassium) {
		if (arrayContainsElement(allElementsMoreThanSatisfactory, "Ammonia") === true)
			ammoniaNitratePotassium.push(ammonia);

		if (arrayContainsElement(allElementsMoreThanSatisfactory, "Nitrate") === true)
			ammoniaNitratePotassium.push(nitrate);
	
		if (arrayContainsElement(allElementsMoreThanSatisfactory, "Potassium") == true)
			ammoniaNitratePotassium.push(potassium);
			return "";
	}

	this.ammoniaLivestock = function(nh4Level) {
		if (nh4Level <= 2 && forPoultry.checked === false){
			return "although not adverse to livestock,"
		} else if (nh4Level >= 2 && forPoultry.checked === false) {
			return "although not adverse to adult livestock at the reported level, it"
		} else if (nh4Level >=  1 && forPoultry.checked === true){
			return " could be a risk to poultry and"
		} else if (nh4Level <= 1 && forPoultry.checked === true){
			return " although not adverse to poultry,"
		}
	}


	this.ammoniaComment = function(ammoniaNitratePotassium, allElements, nh4Level) {
		if (arrayContainsElement(ammoniaNitratePotassium, "Ammonia") === true || arrayContainsElement(ammoniaNitratePotassium, "Potassium") === true || arrayContainsElement(ammoniaNitratePotassium, "Nitrate") === true){
			return " " + this.elementComments.printElements(ammoniaNitratePotassium, allElements.length) + " " + this.ammoniaLivestock(nh4Level) + " may be a marker for the presence of trace levels of organic manures. Therefore, it is advisable to have this supply checked for potentially pathogenic microbes, including E-Coli.";
		} else {
			return "";
		}
	}

	this.concentrationPlural = function(array) {
		if (array.length >= 2){
			return " concentrations.";
		} else {
			return " concentration.";
		}
	}

	this.removeSodium = function(allElementsMoreThanHighLessSodium, naLevel){

		for (var i=0; i<allElementsMoreThanHighLessSodium.length; i++){
			if (allElementsMoreThanHighLessSodium[i].name === "Sodium" && naLevel < 500) {
				allElementsMoreThanHighLessSodium.splice([i], 1);
			}
		}
	}

	this.summaryComment = function(allElementsMoreThanHighLessSodium, allElements, allElementsMoreThanRaised, mnLevel, feLevel, raisedElements, naLevel, clLevel, tdsLevel) {
		console.log(allElementsMoreThanHighLessSodium);
		if (allElements.length < 15) {
			return "";
		} else if (naLevel > 1500 && clLevel > 2500 && tdsLevel > 5000) {
			return " On the basis of this analysis, this supply is not fit for livestock use and advice should be sought on appropriate treatment options designed to reduce the high Salt concentration. As this may involve considerable cost, an alternative	action would be to dilute this supply on a 50:50 basis with mains water and to remove any supplementary Sodium (salt) from feed materials and supplements."
		} else if (forPoultry.checked === true && allElementsMoreThanHigh.length > 0 && mnLevel >= 450 || feLevel >= 1000 && arrayContainsElement(allElementsMoreThanRaised, "Sodium") === true && arrayContainsElement(allElementsMoreThanRaised, "Chloride") === true) {
			return " As poultry have a limited tolerance to Salt this supply is not fit for poultry use and advice should be sought, from your local water engineer on appropriate treatment options designed to reduce the very high " + this.elementComments.printElements(allElementsMoreThanHigh, allElements.length);
		} else if (allElementsMoreThanHighLessSodium.length > 0 || mnLevel >= 450 || feLevel >= 1000) {
			return " On the basis of this analysis, this supply is not fit for " + this.livestockOrPoultry() + " use and advice should be sought, from your local water engineer on appropriate treatment options designed to reduce the very high " + this.elementComments.printElements(allElementsMoreThanHighLessSodium, allElements.length) + this.concentrationPlural(allElementsMoreThanHighLessSodium);
		} else if (allElementsMoreThanRaised.length === 0 && arrayContainsElement(raisedElements, "Sodium") === false && arrayContainsElement(raisedElements, "Sulphate") === false) {
			return " Consequently, from a mineral perspective this supply is suitable for " + this.livestockOrPoultry() + " use."; //UNLESS Sodium or Sulphate is elevated attempted to fix above but needs testing
		} else {
			return " Having taken account of these points, from a mineral perspective this supply is fit for " + this.livestockOrPoultry() + " use."; 
		}
	}

	this.noLead = function(allElements, pbLevel) {
		if (allElements.length < 15) {
			return "";
		} else if (pbLevel){
			return ""
		} else {
			return " Please note Lead has not been analysed in this sample. If you require a Lead analysis, then please contact Julie or Matt (01603 781217).";
		}
	}
}


function arrayContainsElement(elements, name) {
	for(var i=0; i<elements.length; i++){
		if (elements[i].name === name)
			return true;
		}
	return false;
	}

function copperLessThanSatisfactory(satisfactoryElements, marginalElements) {
	if (arrayContainsElement(satisfactoryElements, "Copper") === true) {
		return true;
	} else if (arrayContainsElement(marginalElements, "Copper") === true) {
		return true;
	}
	return false;
}

function copperLevelIfBelowSatisfactory(satisfactoryElements, marginalElements) {
	if (arrayContainsElement(satisfactoryElements, "Copper") === true) {
		return "low Copper";
	} else if (arrayContainsElement(marginalElements, "Copper") === true) {
		return "marginal Copper";
	}
}