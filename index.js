
function receivesAFunction(callBack){
    return callBack();
};

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(anonymous){
   return (function(){
    });
}