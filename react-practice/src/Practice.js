import React, { useEffect, useState } from 'react';

// Greetingコンポーネントの定義　１
const Greeting = ({ name }) => {
  return (
    <div>
      Hello, {name}
    </div>
  );
};

// Counterコンポーネントの定義　２
const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>カウンター: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

//NameFormコンポーネントの定義　３
const NameForm = () => {
  const [name, setName] = useState('');//nameの初期値を空文字列に設定
  //setNameはnameの値を変更する関数
  const nameChange = (event) => {//nameSetting関数では、イベントオブジェクトを引数に取り、setName関数を呼び出してnameの値を変更
    setName(event.target.value);//イベントオブジェクトのtargetプロパティのvalueプロパティに入力された値が格納されている
  };

  const handleSubmit = (event) => {//handleSubmit関数は、イベントオブジェクトを引数に取り、アラートを表示する
    //イベントオブジェクトには入力フォームの送信イベントが格納されている
    alert('あなたの名前は ' + name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        名前を入力してください:
        <input type="text" value={name} onChange={nameChange} />
        <button type="submit">送信</button>
      </div>
    </form>
  );
};

//Timerコンポーネントの定義　４
const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      //interval変数にsetInterval関数を使用して、1秒ごとにカウントを更新する処理を格納
      setCount(prevCount => prevCount + 1);
      //現在の最新の状態の値）を引数として受け取り、その値に基づいて更新を行う
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>{count}</div>
  );
};

//TodoListコンポーネントの定義　５－１
const TodoItem = ({ task }) => {
  task=['task1', 'task2', 'task3'];
  return (
    <div>
      {task}
    </div>
  );
};

//TodoItemコンポーネントの定義　５－２
const TodoList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
  );
};

//Parentコンポーネントの定義　６－１
const Parent = () => {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Child text={text} handleChange={handleChange} />
    </div>
  );
};

//Childコンポーネントの定義　６－２
const Child = ({ text, handleChange }) => {
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};


// Appコンポーネントで関数を使用
const App = () => {
  return (
    <div>
      <Greeting name="Kamei" />
      <Counter />
      <NameForm />
      <Timer />
      <TodoItem task="task1" />
      <Parent />
    </div>
  );
};

export default App;


//コンポーネント名は NameForm とする。
//ユーザーが名前を入力し、送信ボタンを押すと入力した名前がアラートで表示される。



/*次の要件を満たすReactコンポーネントを作成してください：
コンポーネント名は TodoList と TodoItem とする。
TodoList は配列のタスクを受け取り、各タスクを TodoItem コンポーネントとして表示する。
TodoItem はタスクを受け取り、表示する。*/

/*次の要件を満たすReactアプリケーションを作成してください：
コンポーネント名は Parent と Child とする。
Parent コンポーネントは Child コンポーネントを含む。
Child コンポーネントはテキストボックスを持ち、その値を Parent コンポーネントに渡す。
Parent コンポーネントは受け取った値を表示する。*/ 