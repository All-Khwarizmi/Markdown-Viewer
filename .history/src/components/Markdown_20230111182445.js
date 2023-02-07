import React from 'react'

const Markdown = ({}) => {
  return (
    <div id='preview' className='preview'>
      <p className='preview-title'>Previewer</p>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={formValue}
        className='markdown'
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={dark}
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
}

export default Markdown