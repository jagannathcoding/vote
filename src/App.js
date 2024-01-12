import React,{useState} from'react';

const Age=()=>{
const [num,setNum]=useState(0);
const[result,setResult]=useState('');


const agecheck=(num)=>{
  if(num>=18)
  {
  setResult("Eligible to vote");
  }
  else{
    setResult("Not");
  }
};

const agegive = (event) => {
  setNum(event.target.value);
  agecheck(event.target.value);
};


return (
  <div>
    <label>
      Enter age 
        <input
        type="number"
        value={num}
        onChange={agegive}
        />
    </label>

<p>{result}</p>
  </div>
);

};

export default Age;
///<button onClick={agecheck}>check</button>