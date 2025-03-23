import './App.css'
import Address from './hooks/useContext/address';
import Child from './hooks/useContext/child';
import Parent from './hooks/useContext/parent';
import Phone from './hooks/useContext/phone';
import ArraySearch from './hooks/useEffect/arraySearch';
import Debounce from './hooks/useEffect/Debounce';
import FilterSearch from './hooks/useEffect/filterSearch';
import InputChange from './hooks/useEffect/inputChange';
import List from './hooks/useEffect/list';
import Search from './hooks/useEffect/search';
import Animal from './useState/animal';
import Bulb from './useState/bulb';
import Color from './useState/color';
import Count from './useState/count';
import CountryCapital from './useState/countryCapital';
import Input from './useState/input';
import ToggleName from './useState/toggleName';
import UserList from './useState/userList';

function App() {

  return (
    <>
        {/* <Count /> */}
        {/* <ToggleName/> */}
        {/* < Bulb/> */}
        {/* <Animal/> */}
        {/* <Input/> */}
        {/* <Color/> */}
        {/* <CountryCapital/> */}
        {/* <UserList/> */}
        {/* <List/> */}
        {/* <Search/> */}
        {/* <FilterSearch/> */}
        {/* <Debounce/> */}
        {/* <InputChange/> */}
        {/* <ArraySearch/> */}
        <Parent>
          <Child/>
          {/* <Phone/> */}
          {/* <Address/> */}
        </Parent>
        </>
  )
}

export default App
