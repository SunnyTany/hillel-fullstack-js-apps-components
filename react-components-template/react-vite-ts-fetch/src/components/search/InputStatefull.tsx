const InputStatefull = ({type}) => {

  return (
    <>
      <input 
        className="search__input" 
        type={type} 
        placeholder={value} 
        onChange={inputSearchHandeler}
        data-flag={flag}
      />
      <h2 className="search__start-message">
        { flag ? 
          'Щоб знайти фільми введіть у пошук англійською назву чи частину назви фільму' 
          : '' 
        }
      </h2>
    </>
  )
}

export default InputStatefull;