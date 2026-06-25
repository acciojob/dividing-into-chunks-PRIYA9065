const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	if(arr.length === 0){
		return [];
	}
	let target_sum = 0;
	let subarr = [], result = [];
	for(let i = 0; i < arr.length; i++){
		if(target_sum + arr[i] <= n){
			subarr.push(arr[i]);
			target_sum = target_sum + arr[i];
		}
		else{
			result.push(subarr);
			subarr = [arr[i]];
			target_sum = arr[i];
		}
	}
	result.push(subarr);
	return result;
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
