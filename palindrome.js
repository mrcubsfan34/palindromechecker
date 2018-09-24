const wordChecker = (wordCheck) => {
   let arr = '';
   for(let i = wordCheck.length -1; i >= 0; i--) {
      arr += wordCheck[i];
   }
   if(arr === wordCheck) {
      console.log(arr);
   }  else  {
      console.log(false);
   }
}
wordChecker();
