
const stringUtil =(function(){

  return{
    shortText(string){

      let info = string.match(/\./)
      return string.slice(0,info.index + 1)
    }
  }

}())

export default stringUtil
