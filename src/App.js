import './App.css';
import FlexDisplay from './components/FlexDisplay';
import FlexDirection from './components/FlexDirection';
import FlexWrap from './components/FlexWrap';
import FlexFlow from './components/FlexFlow';
import FlexJustifyContent from './components/FlexJustifyContent';
import FlexAlignItem from './components/FlexAlignItem';
import FlexAlignContent from './components/FlexAlignContent';
import FlexItem from './components/FlexItem';
import Navbar from './components/Navbar';
import CenteringItem from './components/Usecase/CenteringItem';
import VariableHeights from './components/Usecase/VariableHeights';
import HolyGrailLayout from './components/Usecase/HolyGrailLayout';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <h3>Flex Display</h3>
      <FlexDisplay/>
      <h3>Flex Direction</h3>
      <FlexDirection/>
      <h3>Flex Wrap</h3>
      <FlexWrap/>
      <h3>Flex Flow</h3>
      <FlexFlow/>
      <h3>Flex Justify Content</h3>
      <FlexJustifyContent/>
      <h3>Flex Align Item</h3>
      <FlexAlignItem/>
      <h3>Flex Align Content</h3>
      <FlexAlignContent/>
      <h3>Flex Item</h3>
      <FlexItem/>

      <h3>3 use case</h3>
      <CenteringItem/>
      <VariableHeights />
      <HolyGrailLayout/>
    </div>
  );
}

export default App;
