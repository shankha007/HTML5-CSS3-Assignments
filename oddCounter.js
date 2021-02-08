onmessage = function(e) {
    for (let i = 1; i < e.data[0]; i+=2) {
        postMessage(i);
    }
    // console.log('running worker');
}