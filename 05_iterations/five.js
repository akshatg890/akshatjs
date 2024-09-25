// for each
const coding=["js","javascript","c++","py"]
coding.forEach(function name(item){
    //console.log(item);
})
coding.forEach( (val) =>{
    console.log(val);
})
coding.forEach( (item,index,arr)=> {
    console.log(item,index,arr)
})
const codingName=[
    {
    languagename: "js",
    languagefilename: "javascript",
    },
    {
    languagename: "py",
    languagefilename: "pyhton",
    },
    {
    languagename: "java",
    languagefilename: "java",
    }

]
codingName.forEach((item)=>{
    console.log(item.languagefilename)
})
