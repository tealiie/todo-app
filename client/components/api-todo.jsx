import request from 'superagent'

export default {
  getTaskdo:getTaskdo
}

function getTaskdo(callback){
  let items = []
  request
   .get('http://localhost:3000')
   .end((err, res)) => {
     if(!err){
       data=res.body
       callback(null, data)
     }else{
       callback(error)
     }
   })
 }
