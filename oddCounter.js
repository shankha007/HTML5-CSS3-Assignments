function oddNumberPrinter(val) {
    for(var i=parseInt(val);i>=1;i--) {
        setTimeout(() => {
            console.log('Hi'+i)
        }, 1000);
        if(i%2!=0)
            postMessage(i);
    }
}

oddNumberPrinter(30);