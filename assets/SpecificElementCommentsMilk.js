function SpecificElementCommentsMilk(){

	this.elementComments = new ElementCommentsMilk();

	this.mainSatisfactory = function(satisfactoryElements, allElements, cuLevel, moLevel){
		
		if (satisfactoryElements.length === allElements.length && moLevel - 5 <= cuLevel) {
			return " Based on this report there is a high probability that trace element supplementation is both appropriate to and well balanced in the total diet.";
		} else if (satisfactoryElements.length === allElements.length && moLevel < 50){
			return " Based on this report there is a high probability that trace element supplementation is both appropriate to and well balanced in the total diet.";
		} else {
			return "";
		}
	}

	this.mainCopper = function(marginalElements, cuLevel, moLevel){
		
		if (arrayContainsElement(marginalElements, "Copper") === true && cuLevel > moLevel && cuLevel > 45) {
			return " Although Copper is reported as marginal it is close to the target range and has a satisfactory relationship with Molybdenum. Therefore, it is unlikely that Copper will be limiting the cow health and productivity.";
		} else {
			return "";
		}
	}

	this.mainCopper2 = function(extremelyHighElements, veryHighElements, highElements, cuLevel, moLevel){
		
		if (arrayContainsElement(extremelyHighElements, "Copper") === true && cuLevel > moLevel) {
			return " Due to its extremely high status, Copper supplementation should be reviewed as a priority, by reference to a forage mineral report, at the next practical opportunity.";
		} 
		if (arrayContainsElement(veryHighElements, "Copper") === true && cuLevel > moLevel) {
			return " Due to its very high status, Copper supplementation should be reviewed by reference to a forage mineral report, at the next practical opportunity.";
		}
		if (arrayContainsElement(highElements, "Copper") === true && cuLevel > moLevel) {
			return " Due to its high status, Copper supplementation should be reviewed by reference to a forage mineral report, at the next practical opportunity.";
		} else {
			return "";
		}
	}

	this.mainMolybdenum = function(cuLevel, moLevel){

		if (moLevel > 49 && cuLevel + 5 < moLevel) {
			return " This pattern of Copper and Molybdenum suggests that insufficient rumen soluble Copper (Acetate and Sulphate) is included in the diet to precipitate Molybdenum effectively.  A high level of circulating Molybdenum is a potent suppressor of oestrus activity in cattle, to the detriment of fertility.";
		} else {
			return "";
		}
	}

	this.mainIodine = function(allElementsMoreThanSatisfactory){

		if (arrayContainsElement(allElementsMoreThanSatisfactory, "Iodine") === true) {
			return " High Iodine may be partly due to contamination arising from the use of Iodine based parlour chemicals and teat dips. ";
		} else {
			return "";
		}
	}

	this.mainManganese = function(allElementsMoreThanSatisfactory){
		
		if (arrayContainsElement(allElementsMoreThanSatisfactory, "Manganese") === true) {
			return " High Manganese is generally due to the inclusion of forages in the diet, which have an inherently high Manganese concentration.";
		} else {
			return "";
		}
	}

	this.mainSelenium = function(allElementsMoreThanSatisfactory){
		
		if (arrayContainsElement(allElementsMoreThanSatisfactory, "Selenium") === true) {
			return " High Selenium, probably due to the inclusion of Selenium yeast in the diet or to inherently high Selenium forages, is likely to be beneficial in terms of udder health. No risk of Selenium toxicity is apparent from this analysis.";
		} else {
			return "";
		}
	}

	// Combine all comment functions under a big function
	// introduce comments to historic data

	this.removeMolybdenum = function(nonSatisfactoryElementsLessMolybdenum, satisfactoryElements, moLevel, moderateElements, molybdenum){

		for (var i=0; i<nonSatisfactoryElementsLessMolybdenum.length; i++){
			if (nonSatisfactoryElementsLessMolybdenum[i].name === "Molybdenum") {
				nonSatisfactoryElementsLessMolybdenum.splice([i], 1);
				//return nonSatisfactoryElements;
			}
		}
		for (var i=0; i<satisfactoryElements.length; i++){
			if (satisfactoryElements[i].name === "Molybdenum" && moLevel > 49) {
				satisfactoryElements.splice([i], 1);
				moderateElements.push(molybdenum);
				//return satisfactoryElements;
			}
		}

	}

	this.reviewElements = function(nonSatisfactoryElementsLessMolybdenum, allElements){
		
		if (nonSatisfactoryElementsLessMolybdenum.length > 0) {
			return " Based on this analysis the supplementation of " + this.elementComments.printElements(nonSatisfactoryElementsLessMolybdenum, allElements.length) + " should be reviewed by reference to a forage mineral report to ensure it is appropriate to maintaining cow health and productivity. ";
		} else {
			return "";
		}
	}

	this.reviewCuHighMo = function(satisfactoryElements, allElements, allElementsMoreThanSatisfactory, cuLevel, moLevel){
		
		if (satisfactoryElements.length === allElements.length-1 && (arrayContainsElement(satisfactoryElements, "Copper") === true) && (arrayContainsElement(allElementsMoreThanSatisfactory, "Molybdenum") === true) && cuLevel + 5 < moLevel) {
			return " Based on this analysis the supplementation of Copper should be reviewed by reference to a forage mineral report to ensure it is sufficient to overcome any identified antagonism from Molybdenum.";
		} else if (satisfactoryElements.length === allElements.length-1 && (arrayContainsElement(satisfactoryElements, "Copper") === true) && (arrayContainsElement(allElementsMoreThanSatisfactory, "Molybdenum") === true) && cuLevel + 5 >= moLevel){
			return " Based on this report there is a high probability that trace element supplementation is both appropriate to and well balanced in the total diet."
		} else {
			return "";
		}
	}

	this.mainCommentPhosphorus = function(allElements){
		
		if (arrayContainsElement(allElements, "Phosphorus") === true){
			return "The laboratory has introduced a new analysis method to measure Phosphorus levels in milk. This new technique is considerably more effective than the previous method in recovering Phosphorus from milk. Consequently, analysed values have increased, which has resulted in the reference ranges for Phosphorus also being adjusted in an appropriate manner.";
		} else {
			return "";
		}
	}
	this.belowSatisfactoryCopper = function(veryLowElements, lowElements, marginalElements, moLevel) {
		if (copperLessThanSatisfactory(veryLowElements, lowElements, marginalElements) === true && moLevel >=50 && moLevel <60) {
			return " The " + copperLevelIfBelowSatisfactory(veryLowElements, lowElements, marginalElements) + " is associated with a moderate Molybdenum content.";
		} else {
			return "";
		}
	}



}


function arrayContainsElement(elements, name){
	for(var i=0; i<elements.length; i++){
		if (elements[i].name === name)
			return true;
		}
	return false;
	}

function copperLessThanSatisfactory(veryLowElements, lowElements, marginalElements) {
	if (arrayContainsElement(veryLowElements, "Copper") === true) {
		return true;
	} else if (arrayContainsElement(lowElements, "Copper") === true) {
		return true;
	} else if (arrayContainsElement(marginalElements, "Copper") === true) {
		return true;
	}
	return false;
}

function copperLevelIfBelowSatisfactory(veryLowElements, lowElements, marginalElements){
	if (arrayContainsElement(veryLowElements, "Copper") === true) {
		return "very low Copper";
	} else if (arrayContainsElement(lowElements, "Copper") === true) {
		return "low Copper";
	} else if (arrayContainsElement(marginalElements, "Copper") === true) {
		return "marginal Copper";
	}
}