function SpecificElementCommentsMicro(){

	this.elementComments = new ElementCommentsMicro();

	this.areThereNoValues = function(allElements){
		if (allElements.length < 3) {
			return "Please enter all trace element levels".fontcolor("red");
		} else {
			return "";
		}
	}

	this.coliformLevel = function(colLevel){
		if (colLevel >= 50){
			return " relatively high ";
		} else {
			return " moderate ";
		}
	}

	this.forHumans = function(colLevel){
		var humanChkBx = document.getElementById("humanCheckbox");
		if (humanChkBx.checked && colLevel >= 1) {
			return " Please note no detectable level of Total Coliforms is permitted for human drinking water.";
		} else {
			return "";
		}
	}


	this.mainComment = function(satisfactoryElements, raisedElements, highElements, veryHighElements, extremelyHighElements, allElements, colLevel, closLevel, ecolLevel, salLevel){
		
		// Short Micro Comments
		if (allElements.length <= 3 && arrayContainsElement(satisfactoryElements, "Salmonella") === true && arrayContainsElement(raisedElements, "Total Coliforms") === true && arrayContainsElement(satisfactoryElements, "E-Coli") === true && colLevel >= 15) {
			return "This water sample has no detectable presence of Salmonella, however, there is a relatively low level of Coliform activity, although the potentially pathogenic E-Coli strain has not been found. The University of Oklahoma Farm Extension Service recommends that water supplied to cattle can contain up to 5MPN/100mls for young stock and 15MPN/100mls for adult stock without representing a significant risk to health based on no E-Coli being detected. Based on these recommendations this water quality appears to be usuitable for cattle. Any detection of Coliforms indicates the sanitary quality of this supply may be compromised by trace levels of slurry/manure. Consequently, any actions designed to eliminate Coliforms and other potentially pathogenic microbes should be introduced." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 3 && arrayContainsElement(satisfactoryElements, "Salmonella") === true && arrayContainsElement(raisedElements, "Total Coliforms") === true && arrayContainsElement(satisfactoryElements, "E-Coli") === true && colLevel <= 1) {
			return "This water sample has a satisfactory sanitary quality as described by the low levels of the key pathogenic micro-organisms listed above." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 3 && arrayContainsElement(satisfactoryElements, "Salmonella") === true && arrayContainsElement(raisedElements, "Total Coliforms") === true && arrayContainsElement(satisfactoryElements, "E-Coli") === true && colLevel >= 5 && colLevel <= 14) {
			return "This water sample has no detectable presence of Salmonella, however, there is a very low level of Coliform activity, although the potentially pathogenic E-Coli strain has not been found. The University of Oklahoma Farm Extension Service recommends that water supplied to cattle can contain up to 5MPN/100mls for young stock and 15MPN/100mls for adult stock without representing a significant risk to health based on no E-Coli being detected. Based on these recommendations this water quality appears to be suitable for adult cattle but not young stock. Although any detection of Coliforms indicates the sanitary quality of this supply may be compromised by trace levels of slurry/manure. Consequently, any actions designed to eliminate Coliforms and other potentially pathogenic microbes should be introduced." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 3 && arrayContainsElement(satisfactoryElements, "Salmonella") === true && arrayContainsElement(raisedElements, "Total Coliforms") === true && arrayContainsElement(satisfactoryElements, "E-Coli") === true && colLevel <= 4 && colLevel > 1) {
			return "This water sample has no detectable presence of Salmonella, however, there is a very low level of Coliform activity, although the potentially pathogenic E-Coli strain has not been found. The University of Oklahoma Farm Extension Service recommends that water supplied to cattle can contain up to 5MPN/100mls for young stock and 15MPN/100mls for adult stock without representing a significant risk to health based on no E-Coli being detected. Based on these recommendations this water quality appears to be suitable for cattle. Although any detection of Coliforms indicates the sanitary quality of this supply may be compromised by trace levels of slurry/manure. Consequently, any actions designed to eliminate Coliforms and other potentially pathogenic microbes should be introduced." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 3 && arrayContainsElement(satisfactoryElements, "Salmonella") === true && arrayContainsElement(raisedElements, "Total Coliforms") === true && arrayContainsElement(highElements, "E-Coli") === true) {
			return "This water sample contains a relatively low concentration of Coliform bacteria with the potentially pathogenic E-Coli strain also identified at a very low level. In contrast Salmonella has not been detected. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). Although Coliforms are above these limits, this supply would represent a low risk to animal health. However, the fact that E-Coli has been detected renders this microbiological quality unsuitable for livestock use. Consequently, advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria, including E-Coli." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 3 && arrayContainsElement(satisfactoryElements, "Salmonella") === true && arrayContainsElement(veryHighElements, "Total Coliforms") === true && ecolLevel >= 1 && ecolLevel < 15) {
			return "This water sample contains a high concentration of Coliform bacteria including a relatively low presence of the potentially pathogenic E-Coli strain. In contrast Salmonella has not been detected. The most likely cause of Coliforms in drinking water is from trace levels of livestock slurry or manure, which is contaminating this supply. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). On this basis, this supply is contaminated with Coliform bacteria including E-Coli and represents a significant risk to cow health. Clearly the microbiological quality of this supply is not suitable for cattle and advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria, including E-Coli." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 3 && arrayContainsElement(satisfactoryElements, "Salmonella") === true && arrayContainsElement(veryHighElements, "Total Coliforms") === true && ecolLevel >= 15) {
			return "This water sample contains a high concentration of Coliform bacteria including a significant presence of the potentially pathogenic E-Coli strain. In contrast Salmonella has not been detected. The most likely cause of Coliforms in drinking water is from trace levels of livestock slurry or manure, which is contaminating this supply. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). On this basis, this supply is highly contaminated with Coliform bacteria including E-Coli and represents a significant risk to cow health. Clearly the microbiological quality of this supply is not suitable for cattle and advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria, including E-Coli." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 3 && arrayContainsElement(satisfactoryElements, "Salmonella") === true && arrayContainsElement(highElements, "Total Coliforms") === true && arrayContainsElement(satisfactoryElements, "E-Coli") === true ){
			return "This water sample contains a" + this.coliformLevel(colLevel) + "concentration of Coliform bacteria, with no detectable presence of the potentially pathogenic E-Coli strain. Also, Salmonella has not been detected. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). On this basis, this supply is contaminated with Coliform bacteria and represents a risk to cow health. Clearly the microbiological quality of this supply is not suitable for cattle and advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria." + this.forHumans(colLevel) + "";
		
		} else if (allElements.length <= 3 && arrayContainsElement(satisfactoryElements, "Salmonella") === true && arrayContainsElement(extremelyHighElements, "Total Coliforms") === true && arrayContainsElement(satisfactoryElements, "E-Coli") === true) {
			return "This water sample contains an extremely high concentration of Coliform bacteria, with no detectable presence of the potentially pathogenic E-Coli strain. Also, Salmonella has not been detected. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). On this basis, this supply is highly contaminated with Coliform bacteria and represents a significant risk to cow health. Clearly the microbiological quality of this supply is not suitable for cattle and advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 3 && arrayContainsElement(satisfactoryElements, "Salmonella") === true && arrayContainsElement(extremelyHighElements, "Total Coliforms") === true && arrayContainsElement(highElements, "E-Coli") === true ){
			return "This water sample contains an extremely high concentration of Coliform bacteria including a significant presence of the potentially pathogenic E-Coli strain. In contrast Salmonella has not been detected. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). On this basis, this supply is highly contaminated with Coliform bacteria including E-Coli and represents a significant risk to cow health. Clearly the microbiological quality of this supply is not suitable for cattle and advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria, including E-Coli." + this.forHumans(colLevel)  + "";



			//Full Micro Comments
		} else if (satisfactoryElements.length === allElements.length && allElements.length >= 3 && closLevel < 1){
			return "In terms of the potentially pathogenic organisms listed above, this water quality has a satisfactory sanitary quality and is fit for livestock use. However, it should be noted that this is an incomplete list and it is not possible to state whether other pathogens are present or not. ";
		} else if (satisfactoryElements.length === allElements.length && allElements.length >= 3 && closLevel >= 1){
			return "A low level of Clostridium suggests this water sample is contaminated with very low trace levels of slurry or manure. No other micro-organisms tested here were found to be present in the supply. In terms of the potentially pathogenic organisms listed above, this water quality is unlikely to cause any issues and should be suitable for livestock use. However, it should be noted that this is an incomplete list and it is not possible to state whether other pathogens are present or not. ";

		} else if (allElements.length <= 6 && arrayContainsElements5(satisfactoryElements, "Salmonella", "E-Coli", "Pseudomonas", "Campylobacter", "Clostridium perfringens") === true && colLevel <= 1){
			return "This water sample has a satisfactory sanitary quality as described by the low levels of the key pathogenic micro-organisms listed above which are below the limits of detection." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements5(satisfactoryElements, "Salmonella", "E-Coli", "Pseudomonas", "Campylobacter", "Clostridium perfringens") === true && colLevel <= 3){
			return "This water sample has a satisfactory sanitary quality as described by the low levels of the key pathogenic micro-organisms listed above which are below the limits of detection. " + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements5(satisfactoryElements, "Salmonella", "E-Coli", "Total Coliforms", "Campylobacter", "Clostridium perfringens") === true && arrayContainsElement(raisedElements, "Pseudomonas") === true ){
			return "This water sample has a satisfactory sanitary quality as described by the low levels of the key pathogenic micro-organisms listed above, with the exception of the slightly raised Pseudomonas activity level. Pseudomonas organisms are considered to be environmental in origin and are most likely a reflection of a lack of sanitary quality (ie. dirt) in the water distribution network including storage tanks and pipes. Although the Pseudomonas activity level is relatively low these organisms do represent a risk factor for mastitis and suppressed immunity. The fact they have been detected indicates the need for the water distribution network to be flushed out with a sanitising agent, at least annually. While this practice occurs on a regular basis on pig and poultry farms, it rarely occurs on cattle units." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElement(satisfactoryElements, "Campylobacter") === true && arrayContainsElements3(extremelyHighElements, "Clostridium perfringens", "E-Coli", "Total Coliforms") === true && arrayContainsElement(raisedElements, "Pseudomonas") === true && salLevel >= 1){
			return "This water sample contains an extremely high concentration of Coliform bacteria with a significant proportion being in the potentially pathogenic E.Coli strain. The fact that Clostridium perfringens has also been found at a very high a level is conclusive evidence that this water is heavily contaminated with faecal bacteria derived undoubtedly from livestock slurry or manure. Salmonella and Pseudomonas microbes have also been detected, albeit at a low level and as a consequence are unlikely to represent a threat to livestock health, unlike the presence of Coliforms and Clostridia organisms. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). On this basis, this supply is highly contaminated with Coliform bacteria including E-Coli and represents a significant risk to cow health. It should also be noted that this is an incomplete list and it is not possible to state whether other pathogens are present or not. Clearly the microbiological quality of this supply is not suitable for cattle and before it can be made available for consumption, advice should be sought on introducing a sanitising treatment capable of eliminating Salmonella, Pseudomonas, Clostridium perfringens and Coliform bacteria, including E-Coli." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements4(satisfactoryElements, "Salmonella", "Campylobacter", "Clostridium perfringens", "Pseudomonas") === true && arrayContainsElement(raisedElements, "E-Coli") === true && arrayContainsElement(extremelyHighElements, "Total Coliforms") === true){
			return "This water sample contains an extremely high concentration of Coliform bacteria including a relatively low presence of the potentially pathogenic E-Coli strain. Also, Salmonella, Campylobacter, Clostridium perfringens and Pseudomonas have not been detected. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). On this basis, this supply is highly contaminated with Coliform bacteria and represents a significant risk to cow health. Clearly the microbiological quality of this supply is not suitable for cattle and advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria, including E-Coli.";

		} else if (allElements.length <= 6 && arrayContainsElements5(satisfactoryElements, "Salmonella", "E-Coli", "Total Coliforms", "Campylobacter", "Clostridium perfringens") === true &&  arrayContainsElement(highElements, "Pseudomonas") === true ){
			return "This water sample contains no detectable levels of microbes associated with faecal contamination from slurry or manures including Coliforms, E. Coli, Salmonella and Clostridium perfringens. Campylobacter has also not been detected. However, Pseudomonas organisms have been detected, albeit at a relatively low level. These microbes are classified as “environmental” bacteria and are unlikely to have been sourced from the borehole. Most likely they are derived from “dirt” within the water distribution network including header tanks and pipes. Their presence at a high level (not found here) has been associated with an increased risk of mastitis and depressed immunity in cows. However, the fact Pseudomonas organisms have been detected indicates the need to regularly (annually) sanitise the water distribution network." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements4(satisfactoryElements, "Salmonella", "Pseudomonas", "Campylobacter", "Clostridium perfringens") === true && arrayContainsElement(raisedElements, "Total Coliforms") === true && arrayContainsElement(highElements, "E-Coli") === true) {
			return "This water sample contains a relatively low concentration of Coliform bacteria with the potentially pathogenic E-Coli strain also identified at a very low level. In contrast Salmonella, Campylobacter, Clostridium perfringens and Pseudomonas have not been detected. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). Although Coliforms are above these limits, this supply would represent a low risk to animal health. However, the fact that E-Coli has been detected renders this microbiological quality unsuitable for livestock use. Consequently, advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria, including E-Coli." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements4(satisfactoryElements, "Salmonella", "Pseudomonas", "Campylobacter", "Clostridium perfringens") === true && arrayContainsElement(raisedElements, "Total Coliforms") === true && arrayContainsElement(highElements, "E-Coli") === true && colLevel < 5) {
			return "This water sample contains a relatively low concentration of Coliform bacteria with the potentially pathogenic E-Coli strain also identified at a very low level. In contrast Salmonella, Campylobacter, Clostridium perfringens and Pseudomonas have not been detected. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). Although Coliforms are below these limits, this supply would represent a low risk to animal health. However, the fact that E-Coli has been detected renders this microbiological quality unsuitable for livestock use. Consequently, advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria, including E-Coli." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements4(satisfactoryElements, "Salmonella", "Pseudomonas", "Campylobacter", "Clostridium perfringens") === true && arrayContainsElement(raisedElements, "Total Coliforms") === true && arrayContainsElement(highElements, "E-Coli") === true && colLevel > 5 && colLevel < 15) {
			return "This water sample contains a relatively low concentration of Coliform bacteria with the potentially pathogenic E-Coli strain also identified at a very low level. In contrast Salmonella, Campylobacter, Clostridium perfringens and Pseudomonas have not been detected. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). Although Coliforms are below these limit for adult animals the level is above that for calves and therefore this supply would represent a low risk to animal health. However, the fact that E-Coli has been detected renders this microbiological quality unsuitable for livestock use. Consequently, advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria, including E-Coli." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements5(satisfactoryElements, "Salmonella", "E-Coli", "Pseudomonas", "Campylobacter", "Clostridium perfringens") === true &&  arrayContainsElement(raisedElements, "Total Coliforms") === true && colLevel >= 5 ){
			return "This water sample contains a relatively low level of Coliform bacteria, with no detectable presence of the potentially pathogenic E-Coli strain. Salmonella has also not been detected. Coliforms are commonly found in the environment and are generally harmless, although their presence does indicate a risk of contamination by more pathogenic organisms. For cattle, the University of Oklahoma Farm Extension Service has recommended a limit of 5MPN/100mls of Total Coliforms for young stock and 15MPN/100mls for adult stock, with no detectable presence of E-Coli. This water quality fails to meet their standards and consequently from a Total Coliform perspective this water quality is not suitable for cattle drinking water purposes. However, the fact that Coliform bacteria have been found may indicate an increased risk of more pathogenic microbes being present in this supply, which have not been subject to this analysis. Although Coliform bacteria have been detected, there is no evidence that other potentially pathogenic bacteria, including Campylobacter, Clostridium perfringens or Pseudomonas have been detected. But as this is an incomplete list it is not possible to state whether other pathogens are present or not. Based on this analysis it is advisable to discuss appropriate sanitising treatments with your local water engineer." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements5(satisfactoryElements, "Salmonella", "E-Coli", "Pseudomonas", "Campylobacter", "Clostridium perfringens") === true &&  arrayContainsElement(raisedElements, "Total Coliforms") === true && colLevel <= 4 && colLevel > 1 ){
			return "This water sample contains a very low level of Coliform bacteria, with no detectable presence of the potentially pathogenic E-Coli strain. Salmonella has also not been detected. Coliforms are commonly found in the environment and are generally harmless, although their presence does indicate a risk of contamination by more pathogenic organisms. For cattle, the University of Oklahoma Farm Extension Service has recommended a limit of 5MPN/100mls of Total Coliforms for young stock and 15MPN/100mls for adult stock, with no detectable presence of E-Coli.  Based on these recommendations this water quality appears to be suitable for cattle. Although any detection of Coliforms indicates the sanitary quality of this supply may be compromised by trace levels of slurry/manure.  There is no evidence that other potentially pathogenic bacteria, including Campylobacter, Clostridium perfringens or Pseudomonas have been detected. But as this is an incomplete list it is not possible to state whether other pathogens are present or not. Consequently, any actions designed to eliminate Coliforms and other potentially pathogenic microbes should be introduced." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements5(satisfactoryElements, "Salmonella", "E-Coli", "Pseudomonas", "Campylobacter", "Clostridium perfringens") === true &&  arrayContainsElement(extremelyHighElements, "Total Coliforms") === true ){
			return "This water sample contains an extremely high concentration of Coliform bacteria including a relatively low presence of the potentially pathogenic E-Coli strain. In contrast Salmonella has not been detected. Other potential pathogens analysed, including Campylobacter, Clostridium perfringens and Pseudomonas were also not detected. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). On this basis, this supply is highly contaminated with Coliform bacteria and represents a significant risk to cow health. Clearly the microbiological quality of this supply is not suitable for cattle and advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria, including E-Coli." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements3(satisfactoryElements, "Salmonella", "Campylobacter", "Clostridium perfringens") === true && arrayContainsElements3(highElements, "Total Coliforms", "Pseudomonas", "E-Coli") === true ){
			return "This water sample contains a relatively low concentration of Coliform bacteria; however, the potentially pathogenic E-Coli strain has been identified. Pseudomonas organisms have also been detected, again at a relatively low level. In contrast Salmonella, Campylobacter and Clostridium perfringens microbes have not been detected. Although the Coliform activity is low the fact that E-Coli has been detected renders this supply a risk to animal health and consequently it is not advisable to supply it to livestock. While Coliform bacteria are most likely derived from trace contamination of this supply from slurry or manures, the presence of Pseudomonas is an indication of dirt in the water distribution system (header tanks and pipes). Pseudomonas organisms represent a risk factor for mastitis and supressed immunity in cattle. Two actions emanate from this report: \n1.	Flush out the water distribution network including tanks and pipes with a sterilant. \n2.	Discuss the installation of a sanitising filter capable of eliminating Coliform bacteria, with your local water engineer." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements4(satisfactoryElements, "Salmonella", "Campylobacter", "Pseudomonas", "E-Coli") === true && arrayContainsElement(highElements, "Total Coliforms") === true && closLevel < 50 && closLevel > 10){
			return "This water sample contains a very low level of Total Coliform bacteria, with no detectable presence of the potentially pathogenic E-Coli strain. Salmonella has also not been detected, as has campylobacter and Pseudomonas organisms. However, Clostridium has been detected, albeit at a low level, which ties in with the low Coliform count, as both microbes are markers for faecal contamination. Coliforms are commonly found in the environment and are generally harmless, although their presence does indicate a risk of contamination by more pathogenic organisms. For cattle, the University of Oklahoma Farm Extension Service has recommended a limit of 15 MPN/100ml for adults and 5 MPN/100ml for calves, with no detectable presence of E-Coli. This water quality meets their standards and consequently from a Total Coliform perspective this water quality is suitable for cattle drinking water purposes. However, the fact that Coliform and Clostridium bacteria have been found may indicate an increased risk of more pathogenic microbes being present in this supply, which have not been subject to analysis. Consequently, it would be advisable to discuss these results with your local water engineer reference the installation of appropriate sanitising treatments." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements4(satisfactoryElements, "Salmonella", "Campylobacter", "Pseudomonas", "E-Coli") === true && arrayContainsElement(highElements, "Total Coliforms") === true && closLevel < 50 && closLevel > 10 && colLevel >=25){
			return "This water sample contains a relatively low level of Total Coliform bacteria, with no detectable presence of the potentially pathogenic E-Coli strain. Salmonella has also not been detected, as has campylobacter and Pseudomonas organisms. However, Clostridium has been detected, albeit at a low level, which ties in with the low Coliform count, as both microbes are markers for faecal contamination. Coliforms are commonly found in the environment and are generally harmless, although their presence does indicate a risk of contamination by more pathogenic organisms. For cattle, the University of Oklahoma Farm Extension Service has recommended a limit of 15 MPN/100ml for adults and 5 MPN/100ml for calves, with no detectable presence of E-Coli. This water quality meets their standards and consequently from a Total Coliform perspective this water quality is suitable for cattle drinking water purposes. However, the fact that Coliform and Clostridium bacteria have been found may indicate an increased risk of more pathogenic microbes being present in this supply, which have not been subject to analysis. Consequently, it would be advisable to discuss these results with your local water engineer reference the installation of appropriate sanitising treatments." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements4(satisfactoryElements, "Salmonella", "Campylobacter", "Pseudomonas", "E-Coli") === true && arrayContainsElement(highElements, "Total Coliforms") === true && closLevel <= 10 && colLevel >= 25){
			return "This water sample contains a relatively low concentration of Coliform bacteria, however no detectable level of the potentially pathogenic E Coli strain was found. Salmonella has also not been detected. The most likely cause of Coliforms in drinking water is from trace levels of livestock slurry or manure, which is contaminating this supply. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). On this basis, this supply is contaminated with Coliform bacteria and represents a risk, albeit a low risk to cow health. Clearly the microbiological quality of this supply is not suitable for cattle and advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria." + this.forHumans(colLevel) + "";

		} else if (allElements.length <= 6 && arrayContainsElements4(satisfactoryElements, "Salmonella", "Campylobacter", "Pseudomonas", "E-Coli") === true && arrayContainsElement(highElements, "Total Coliforms") === true && closLevel <= 10 && colLevel < 25){
			return "This water sample contains a very low concentration of Coliform bacteria, however no detectable level of the potentially pathogenic E Coli strain was found. Salmonella has also not been detected. The most likely cause of Coliforms in drinking water is from trace levels of livestock slurry or manure, which is contaminating this supply. The recommended limit for Coliform bacteria in drinking water supplied to cattle is 15 MPN/100ml for adults and 5 MPN/100ml for calves (University of Oklahoma Farm Extension Service). On this basis, this supply is contaminated with Coliform bacteria and represents a risk, albeit a low risk to cow health. Clearly the microbiological quality of this supply is not suitable for cattle and advice should be sought on introducing a sanitising treatment which can eliminate Coliform bacteria." + this.forHumans(colLevel) + "";
		} else if (allElements.length < 3) {
			return "";
		} else {
			return "Not yet programmed";
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


function arrayContainsElements2(elements, name1, name2){
	if (arrayContainsElement(elements, name1) === true && arrayContainsElement(elements, name2) === true){
		return true;
	}
	return false;
 	}

	function arrayContainsElements3(elements, name1, name2, name3){
	if (arrayContainsElement(elements, name1) === true && arrayContainsElement(elements, name2) === true && arrayContainsElement(elements, name3) === true){
		return true;
	}
	return false;
 	}

function arrayContainsElements4(elements, name1, name2, name3, name4){
	if (arrayContainsElement(elements, name1) === true && arrayContainsElement(elements, name2) === true && arrayContainsElement(elements, name3) === true && arrayContainsElement(elements, name4) === true){
		return true;
	}
	return false;
 	}


function arrayContainsElements5(elements, name1, name2, name3, name4, name5){
	if (arrayContainsElement(elements, name1) === true && arrayContainsElement(elements, name2) === true && arrayContainsElement(elements, name3) === true && arrayContainsElement(elements, name4) === true && arrayContainsElement(elements, name5) === true){
		return true;
	}
	return false;
 	}