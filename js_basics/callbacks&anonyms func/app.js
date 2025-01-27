function first(){
    setTimeout(function(){
        console.log('First Function called')
    },1000) 
}

function second(){
    console.log('Second Function called')
}
first();
second();

function doHomeWork(subject,callback){
    console.log(`Start working on my ${subject} homework`);
    callback();
}
doHomeWork('Maths',function(){
    console.log('Finished my homework');
})

