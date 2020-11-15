var reBadWords = /||||||/gi;
   var a = document.getElementsByTagName("body")[0];
    var sUserInput = a.innerHTML;
    var sFinalText = sUserInput.replace(reBadWords,function(sMatch) {
        return sMatch.replace(/./g,"");
    });
    
 a.innerHTML=sFinalText;