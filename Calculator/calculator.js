var output=document.getElementById("output");
var but=document.querySelectorAll("button");
//console.log(output);
var outValue='';

for(let i of but){
	i.addEventListener('click',function(){
		buttonText=i.innerHTML;
		//console.log(buttonText);
		if(buttonText==='C'){
			outValue='';
			output.value=outValue;
		}
		else if(buttonText==='='){
			output.value=eval(outValue)
		}
		else{
			outValue=outValue+buttonText;
			output.value=outValue;
		}
	})
}

