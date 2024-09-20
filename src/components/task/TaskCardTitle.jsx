import React from 'react';

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = React.useState(false);
  const [inputCardTitle, setInputCardTitle] = React.useState('Today');

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    console.log(inputCardTitle)
    setInputCardTitle(e.target.value);
  };
  
  const handleSubmit = (e) => { //onSubmitはフォームが送信された時に発火するイベント
    e.preventDefault(); //enterを押すとページが更新されるのを防ぐ->ページが更新されないから状態を維持できる。
    setIsClick(false); //フォームを閉じる
  };

  const handleBlur = () => { //onBlurはフォームからフォーカスが外れた時に発火するイベント
    setIsClick(false); //フォームを閉じる
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
          className="taskCardTitleInput"
          autoFocus //フォームが開いた時に自動でフォーカスが当たる
          type="text"
          onChange={handleChange} //onSubmitはフォームが送信された時に発火するイベント
          onBlur={handleBlur} //onBlurはフォームからフォーカスが外れた時に発火するイベント
          value={inputCardTitle} //valueにinputCardTitleを入れることで、入力が保持された状態になる。
          maxLength={10}
          /> 
        </form>
      ) : (
      <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};