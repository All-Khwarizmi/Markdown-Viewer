import React from 'react'

const Form = () => {
  return (
    <div className='div-form'>
      <h1>Welcome</h1>
      <form className=''>
        <p className='preview-title'>Editor</p>
        <textarea
          className='text'
          name='editor'
          id='editor'
          cols='50'
          rows='10'
          value={formValue}
          onChange={onChange}
        ></textarea>
      </form>
    </div>
  );
}

export default Form