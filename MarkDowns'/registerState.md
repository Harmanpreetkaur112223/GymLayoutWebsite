# if we want to create a state variable that is single in nature means every time it updates itself but it is indivual object 
# also with the help of map function we are forming the whole form


arr = [{namehere:"fullname",for:"fullname",valueHere:""},{namehere:"email",for:"email",valueHere:""},{namehere:"username",for:"username",valueHere:""}]
set a state variable ---> const[data , setdata] = useState((acc , item)=>{return ...acc , [item.namehere]:item.valueHere},{})
---------------------------------------------> this will craete the object in such a way {username:"",email:"",fullname:"",password:""}

using the onchange method each time create a new object leaving the older objects
setData({...acc , [e.target.name]:e.target.value})




# if we want to create an array of object take the two state varibles one will hold individual objecta and the other will add up this object to the existing array of objects
const[obj , setbj] = useState(arr.reduce(acc , item)=>{return ({...acc,[item.namehere]:item.valuehere})})

#Here we are declaring the data variable that will jold the data in the form of an object at a time with the help of title and value mentioned in the array of objet above .
for this we used reduce function and we took the Name : '' as ...acc,[curr.title] : curr.value ,{}
const [arrobj , setArrobj] = useState([])

const handleChange = (e)=>{
    const{name , value} = e.target;
    setobj({...acc , [name]:value})
}
const handleSubmit = (e)=>{
    e.preventDefault();
    setArrobj([...arrobj , obj])
    setobj(arr.reduce((acc , item)=>{return({...acc , [item.namehere]:item.valuehere})}))
}