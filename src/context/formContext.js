import React , {useState,createContext,useReducer, useContext} from 'react'
import axios from 'axios'
import { SidebarContext } from './sideBarContext'
import { DataContext } from './dataContext'
import { LoadingContext } from './LoadingContext';
export const FormContext = createContext()

export const FormContextProvider = (props) => {
    const {loading,setLoading} = useContext(LoadingContext)
    const {hide} = useContext(SidebarContext)
    const {setData} = useContext(DataContext)
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
        name: '',
        phone: '',
        chest:'',
        shoulder:'',
        sleeves:'',
        armhole:'',
        lengthKurti:'',
        waistKurti:'',
        hipsKurti:'',
        lengthPant:'',
        waistPant:'',
        hipsPant:'',
        
        }
      );
const saveUser = () => {
    setLoading(true)
    axios.post('https://hidden-thicket-97602.herokuapp.com/api/user/create', {
        name:userInput.name,
        phone:userInput.phone,
        chest:userInput.chest,
        shoulder:userInput.shoulder,
        sleeves:userInput.sleeves,
        armhole:userInput.armhole,
        lengthKurti:userInput.lengthKurti,
        waistKurti:userInput.waistKurti,
        hipsKurti:userInput.hipsKurti,
        lengthPant:userInput.lengthPant,
        waistPant:userInput.waistPant,
        hipsPant:userInput.hipsPant,
      })
      .then(function (response) {
        console.log(response);
      })

    hide()
    const fetchData = async () => {
          const result = await axios(
            'https://hidden-thicket-97602.herokuapp.com/api/user',
          );


            setLoading(false)
            setData(result.data);
        };
     
        fetchData();
    setUserInput({
        name: '',
        phone: '',
        chest:'',
        shoulder:'',
        sleeves:'',
        armhole:'',
        lengthKurti:'',
        waistKurti:'',
        hipsKurti:'',
        lengthPant:'',
        waistPant:'',
        hipsPant:'',
    })  
}

      const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({[name]: newValue});
      }
      

    const fullSizeInputs = [
        {
            label:"Name:",
            placeholder:"Name",
            name:'name',
            value:userInput.name
        },
        {
            label:"Contact no.",
            placeholder:"Contact no.",
            name:'phone',
            value:userInput.phone,
            
        }
    ]
    const smallSizeInputs = [
        {
            label:"Chest:",
            placeholder:"Chest",
            name:'chest',
            value:userInput.chest
        },
        {
            label:"Shoulder:",
            placeholder:"Shoulder",
            name:'shoulder',
            value:userInput.shoulder, 
        },
        {
            label:"Sleeves:",
            placeholder:"Sleeves",
            name:'sleeves',
            value:userInput.sleeves,  
        },
        {
            label:"Armhole:",
            placeholder:"Armhole",
            name:'armhole',
            value:userInput.armhole,  
        },
        {
            label:"Length (Kurti):",
            placeholder:"Length",
            name:'lengthKurti',
            value:userInput.lengthKurti,  
        },
        {
            label:"Waist (Kurti):",
            placeholder:"Waist",
            name:'waistKurti',
            value:userInput.waistKurti,  
        },
        {
            label:"Hips (Kurti):",
            placeholder:"Hips",
            name:'hipsKurti',
            value:userInput.hipsKurti,  
        },
        {
            label:"Length (Pant):",
            placeholder:"Length",
            name:'lengthPant',
            value:userInput.lengthPant,  
        },
        {
            label:"Waist (Pant):",
            placeholder:"Waist",
            name:'waistPant',
            value:userInput.waistPant,  
        },
        {
            label:"Hips (Pant):",
            placeholder:"Hips",
            name:'hipsPant',
            value:userInput.hipsPant,  
        },
        
    ]
    return (
        <FormContext.Provider value={{fullSizeInputs,saveUser,smallSizeInputs,handleChange,userInput,setUserInput}} >
            {props.children}
        </FormContext.Provider>
    )
}
