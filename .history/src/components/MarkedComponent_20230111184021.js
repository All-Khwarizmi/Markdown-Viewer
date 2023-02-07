import React from 'react'

const MarkedComponent = ({formValue}) => {
  return (
    <div id='preview' className='preview'>
      <p className='preview-title'>Previewer</p>
      <Markdown value={markdown} gfm={true} />
    </div>
  );
}

export default MarkedComponent