var array=[6, 2, 9, 4, 7, 3, 5, 8];
console.log()


function sort(){

	var a = 0;
	while(a<array.length){

		a++;
		for(var i=0 ; i<array.length ; i++){
			var b = i+1;
			if(array[i]>array[b]){
				var tmp = array[i];
				array[i] = array[b];
				array[b]= tmp;
				console.log(array);
			}

		}
	}
	return result;
}

var result = sort(array);