const Assistant = require('./schema');
/**
 * 插入
 */

function insert(){
  var user = new Assistant({
    name : '123456'                //用户账号
  });

  user.save(function (err, res) {

    if (err) {
        console.log("Error:" + err);
    }else {
        console.log("Res:" + res);
    }

  });
}


function findIns(){
  var wherestr = {'name' : 'lcl'};
  Assistant.find(wherestr, function(err, res){
    if(err){
      console.log("Error:" + err);
    }else {
      console.log("Res:" + res);
    }
  })
}

findIns();
