
import './App.css';
import Func_JSX_NguyenHuuPhuc from './components/Func_JSX_NguyenHuuPhuc';
import Class_NguyenHuuPhuc from './components/Class_NguyenHuuPhuc';

function App() {
  return (
    <div className="App">
        <h1>Hello</h1>
        {/* function component demo */}
        <Func_JSX_NguyenHuuPhuc/>
        <Func_JSX_NguyenHuuPhuc fullName="NguyenHuuPhuc" age="20"/>
      <hr/>
      <Class_NguyenHuuPhuc info="Hoc ReactJs" time="4 months"/>
    </div>
  );
}

export default App;
