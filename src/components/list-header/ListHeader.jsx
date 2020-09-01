import React , {useContext} from 'react'
import './ListHeader.scss'
import { FaSearch } from 'react-icons/fa'
import { DataContext } from '../../context/dataContext';

export const ListHeader = () => {
    const {data,setData,filteredData,setFilteredData} = useContext(DataContext)
    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
        console.log(searchTerm)
    };
    React.useEffect(() => {
    
        setFilteredData(
            data.filter(person => {
                var per = []
                return person.name.toLowerCase().includes(searchTerm.toLowerCase()) || person.phone.includes(searchTerm)
            }
              )
        );
      }, [searchTerm,data]);
    
    
    return (
        <div className="list-header">
            <div className="searchbar">
                <FaSearch className='search-icon' />
                <input onChange={handleChange} value={searchTerm} className='search-input' type="text" placeholder="Search " />
            </div>
        </div>
    )
}
