const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array){
    for(let i = 0; i < array.length; i++){
        if (array[i] === 'nemo') {
            console.log('Found Nemo');
        }
    }
}

findNemo(everyone);

const findNemo2 = array => {
    array.forEach( fish => { // using the built in forEach method method of the array class
        if(fish === 'nemo') {
            console.log('Found Nemo!');
        }
    })
}

const findNemo2 = array => {
    for (let fish of array){ // here 'of' does the same thing as (let fish = 0; fish < array.length; fish++)
        if(fish === 'nemo'){
            console.log('found Nemo');
        }
    }
}

// all three of these loops do the same thing... wow!