import logo from './logo.svg';
import './App.css';
import User from './User';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import {useState} from "react";



function App() {

  let str1 = 'New Year 1';
  let str2 = 'New Year 2';
  const name = 'user';
  const  age = '30';

  const num1 = 3;
  const num2 = 2;

  const name2 = 'Josh';
  const surname = 'Beauchamp ';

  const num = 4;

  const arr = [1, 2, 3, 4, 5];

  const obj = {name: 'Josh', surname: 'Beauchamp'};

  const li1 = <li>text1</li>;
  const li2 = <li>text2</li>;
  const li3 = <li>text3</li>;

  const isAdult = true;
  let text;
  if (isAdult) {
    text='welcome';
  } else{
    text = 'bye';
  }

  const isAdmin = true;
  let slova;
  if (isAdmin) {
    slova= <div><p>new</p><p>year</p></div>;
  } 


// 24/12/22
const vozrast = 19;
const isAuth = true;
function NameUser(name){
  return <><p>Добро пожаловать, {name}</p></>
}

function show1(){
  alert(1);
}
function show2(){
  alert(2);
}
function show3(){
  alert(3);
}

const arr5 = [
  <li>1</li>,
  <li>2</li>,
  <li>3</li>,
  <li>4</li>,
  <li>5</li>,
]


const arr6 = ["елка", "гирлянда", "шар", "звезда", "шапка деда мороза"];

const res = arr6.map(function(item) {
return <li>{item}</li>;
});


// 21/01/23

const [shuba, setName]=useState('Шуба')
function clickHander(){
  setName('Пальто');
}

const [imya, familiya]=useState('Vasilek')
function imyaclick(){
  familiya('Vasilev');
}

let [inCart, setInCart] = useState(false);
let [count, setCount] = useState(0);

const [value, setValue] = useState ('')
const [value2, setValue2] = useState ('')

// ex.1 28/01/23
const [value3, setValue3] = useState(0);
function Fahrenheit(event) {
  setValue3(event.target.value); 
}
// ex.2 28/01/23
const [value4, setValue4] = useState(0);
const [value5, setValue5] = useState(0);
const [value6, setValue6] = useState(0);
const [value7, setValue7] = useState(0);
const [value8, setValue8] = useState(0);
function SrAr4(event) {
  setValue4(+event.target.value); 
}
function SrAr5(event) {
  setValue5(+event.target.value); 
}
function SrAr6(event) {
  setValue6(+event.target.value); 
}
function SrAr7(event) {
  setValue7(+event.target.value); 
}
function SrAr8(event) {
  setValue8(+event.target.value); 
}
const [result, setResult] = useState(0);


const [checked, setChecked] = useState (true)
const [checked2, setChecked2] = useState (true)
const [checked3, setChecked3] = useState (true)

let message;
let message2;
let message3;
if (checked){
  message = <p>Добро пожаловать</p>
} else{
  message = <p>Пока</p>
}
if (checked2){
  message2 = <p>Welcome</p>
} else{
  message2 = <p>Бай</p>
}
if (checked3){
  message3 = <p>Bienvenido</p>
} else{
  message3 = <p>Адьос</p>
}

const [checked4, setChecked4] = useState (true)
let message4;
if (checked4){
  message4 = <div><h2>Ура, Вам уже есть 18</h2> <p>здесь расположен контент только для взрослых</p></div>
} else{
  message4 = <h2>увы, Вам еще нет 18 лет</h2>
}

// 04/02/22

const [checked5, setChecked5] = useState (true)
let message5;
if (checked5){
  message5 = <h2>ВКЛЮЧЕНО</h2>
} else{
  message5 = <h2>ВЫКЛЮЧЕНО</h2>
}

let st;
st = {backgroundColor: "white", color: "black"}
const [checked6, setChecked6] = useState (true)
let message6;
if (checked6){
  message6 = <h2>СВЕТЛАЯ ТЕМА</h2>
} else{
  message6 = <h2>ТЕМНАЯ ТЕМА</h2>
}


const [value9, setValue9] = useState('');


  return (
 
  <div style={checked6 ? st : {backgroundColor: "black", color: "white"}}>
    <Header/>
  <p>Скоро Новый Год</p>
  <p>Мандарины, ёлка, подарки</p>
  <p>Осталось 3 недели</p>


  <p>{str1}</p>
  <p>{str2}</p>
  <p>name: {name};</p>
  <p>age: {age};</p>
  <p>{num1 ** num2}</p>
  <p>{name2 + "_" + surname}</p>
  <p>{num ** (1/2)}</p>

  

  <ul>
    <li>{arr [0]}</li>
    <li>{arr [1]}</li>
    <li>{arr [2]}</li>
    <li>{arr [3]}</li>
    <li>{arr [4]}</li>
  </ul>

  <p>name: <span>{obj.name}</span>, <br></br>
  surname: <span>{obj.surname}</span> </p>

  <ul>
    {li1}
    {li2}
    {li3}
  </ul>

<p>{text}</p>
<p>{slova}</p>


  <input></input>
  <br/>
  <input></input>
  <br/>
  <input></input>
  <br/>
  <User/>
  <ul>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
    <li>Скоро Новый Год</li>
  </ul>
  <User/>
  <Main/>
  <tbody>
    <table border = "1">
    <tr>
      <td>Новый Год</td>
      <td>Новый Год</td>
      <td>Новый Год</td>
      
    </tr>
    <tr>
    <td>Новый Год</td>
    <td>Новый Год</td>
    <td>Новый Год</td>

    </tr>
    <tr>
    <td>Новый Год</td>
    <td>Новый Год</td>
    <td>Новый Год</td>

    </tr>
    </table>
  </tbody>

  <p className = "new1">Скоро Новый Год</p>
  <p className = "new2">Мандарины, ёлка, подарки</p>
  <p className = "new3">Осталось 3 недели</p>





{vozrast>18 ? 'поздравляем, вы старый': 'поздравляем, вы молодой' }
{isAuth && <p>вы авторизованы</p>}

{NameUser("Валентина")}

<button onClick={show1}>act1</button> 
<button onClick={show2}>act2</button> 
<button onClick={show3}>act3</button> 

<ul>{arr5}</ul>

{res}

<User/>

<p>{shuba} <button onClick={clickHander}> кнопка</button></p>
<p>{imya} <button onClick={imyaclick}> фамилия</button></p>

<p>{inCart ? 'бан' : 'не бан'} <button onClick={() => setInCart(!inCart)}>кнопка</button></p>

<p> <button onClick={() => setCount(count - 1)}>-</button> {count} <button onClick={() => setCount(count + 1)}>+</button></p>

<input value={value} onChange={event => setValue(event.target.value)}></input>
<p>First: {value}</p>

<input value={value2} onChange={event => setValue2(event.target.value)}></input>
<p>Second: {value2}</p>

<h1>HOMEWORK 28/01/23</h1>
<h3>Ex. 1</h3>
<input value={value3} onChange={Fahrenheit} />℉
<p>{(value3 - 32)*5/9}℃</p>

<h3>Ex. 2</h3>
<input value={value4} onChange={SrAr4} />
<input value={value5} onChange={SrAr5} />
<input value={value6} onChange={SrAr6} />
<input value={value7} onChange={SrAr7} />
<input value={value8} onChange={SrAr8} />
<button onClick={() => setResult(Number(value4) + Number(value5) + Number(value6) + Number(value7) + Number(value8))}>СУММА</button>
<button onClick={() => setResult(Number(value4) * Number(value5) * Number(value6) * Number(value7) * Number(value8))}>ПРОИЗВЕДЕНИЕ</button>
<p>result: {result}</p>

<p>Какой язык ты знаешь?</p>
<input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} /> Русский
<input type='checkbox' checked={checked2} onChange={() => setChecked2(!checked)} /> Английский
<input type='checkbox' checked={checked3} onChange={() => setChecked3(!checked)} /> Испанский
<div>{message}</div>
<div>{message2}</div>
<div>{message3}</div>

<p>Вам есть 18?<input type='checkbox' checked={checked4} onChange={() => setChecked4(!checked)} /></p>
<div>{message4}</div>

<select value={value} onChange={event => setValue(event.target.value)}>
  <option value="1">от 0 до 12 лет</option>
  <option value="2">от 13 до 17</option>
  <option value="3">от 18 до 25</option>
  <option value="4">старше 25</option>
</select>
<p>
  {value === '1' && 'младшая группа'}
  {value === '2' && 'средняя группа'}
  {value === '3' && 'старшая группа'}
  {value === '4' && 'пожилая группа'}
</p>


<h1 >HOMEWORK 04/02/23</h1>
<h3>Ex. 1</h3>

<p><input type='checkbox' checked={checked5} onChange={() => setChecked5(!checked5)} /></p>
<div>{message5}</div>

<h3>Ex. 2</h3>
<p>Смена темы<input type='checkbox' checked={checked6} onChange={() => setChecked6(!checked6)} /></p>
<div>{message6}</div>




</div>
  );
}

export default App;


