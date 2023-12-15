# syno_surveys

The official repository to maintain the Javascript codes for SynoSurveys

In order to make use of this library, you have to copy this code into the Javascript editor within a question page.
Once done, copy and paste the library URLS you want to use and cofigure them

```javascript
// Insert your script URLs
let scripts = [
  'Add library here separated by commas' 
]; 

let promises = scripts.map(script => {
    return new Promise((resolve, reject) => {
        document.querySelector("body").style.opacity = "0";
        let s = document.createElement('script');
        s.src = script;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
        
    });
});

Promise.all(promises)
    .then(() => {
        /* All scripts are loaded, you can execute your functions here */
        rank({question_code : "Q1"});
        display_open_text({question_code : "Q3", selector : "#p_Q2_0"});
      
        /* All script ends here */
        document.querySelector("body").style.opacity = "1";
    })
    /* If a library could not be imported throw an error */
    .catch((error) => {
        console.error(`Failed to load script: ${error}`);
    });
```