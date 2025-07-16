import { useCallback, useState, useEffect} from 'react'

function App() {

    const [Length, setLength] = useState(8);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [password, setPasword] = useState("");

    const passGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let num = "1234567890";
        let Char = "@#$%^&*{}~`";
        
        if(numberAllowed) str += num;
        if(characterAllowed) str += Char;

        for(let i = 1; i <= Length; i++){
          pass += str.charAt(Math.floor(Math.random() * str.length) + 1);
        }
        setPasword(pass);
        
      }, [Length, numberAllowed, characterAllowed, setPasword]);

      useEffect(() => {
        passGenerator();
      }, [Length, numberAllowed, characterAllowed, passGenerator]);

  return (
    <>
      <div className='p-5 text-center bg-gray-700 shadow-md shadow-gray-500 rounded-xl my-15 max-w-fit'>
        <h1 className='text-[40px] text-white text-center mb-5'>Password Generator</h1>
        
        <input type="text" className='bg-white mb-5 w-[30rem] h-12 rounded-xl pl-2 text-xl' placeholder='p@ssword' readOnly value={password}/>
        
        <button className='ml-5 bg-blue-500 h-12 w-20 rounded-xl text-xl text-white '>Copy</button> <br />

        <label className='text-white mr-4'>Length: {Length}</label>
        <input type="range" className='mr-24' value={Length} min={8} max={100} onChange={(e) => setLength(e.target.value)}/>

        <input type="checkbox" onChange={() => setNumberAllowed((prev) => !prev)}/>
        <label className='text-white ml-2 mr-4'>Number</label>

        <input type="checkbox" onChange={() => setCharacterAllowed((prev) => !prev)}/>
        <label className='text-white ml-2 '>Character</label>
      </div>

    </>
  )
}

export default App
