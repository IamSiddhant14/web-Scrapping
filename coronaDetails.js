const request = require('request');
const cheerio = require('cheerio');


console.log(`
Before
`);

//This is an asychonus request thats is it is non blocking in nature

request('https://www.worldometers.info/coronavirus/', cb);//(link of the website whoes data we wanna extracr , callBack function)

function cb (error, response, html) {
    if( error){
        console.error('error:', error);// Special "console" which could print the error if one occurred
    }else{
        handleHtml(html);
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  }

function handleHtml(html){

let selTool = cheerio.load(html);//With this load functionality we could use the selctor tool provided by cheerio 

let contentArr =  selTool('.maincounter-number span');//This will bring all the html associated with the respective class(Selector)
// console.log(contentArr);


// For all elements


for( let i =0; i< contentArr.length ; i++){

    let data = selTool(contentArr[i]).text()//Converting it into proper formate  , which would result in properly giving out the right data only;
    // console.log(data);

}

// console.log("********************* Break *********************")



// For specific elements

let data = selTool(contentArr[0]).text()//Converting it into proper formate with the help of " .text() " , which would result in properly giving out the right data only;
    
// console.log(data);

let totalcases = selTool(contentArr[0]).text();
let totalDeaths = selTool(contentArr[1]).text(); 
let totalRecoveries = selTool(contentArr[2]).text();


console.log('Total Cases:' + totalcases)
console.log("Totals Deaths", totalDeaths);
console.log("Total Recoverd", totalRecoveries);

console.log(`



`);

}

console.log( `

This Statement is been shown in order to show that the 'request' function is asynchronous in nature

` );
console.log(`
After


`);