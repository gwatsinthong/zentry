import React, { useState } from 'react'

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  const [animateText, setAnimateText] = useState(false)

  const triggerAnimation = () => {
    setAnimateText(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimateText(true)
      })
    })
  }

  return (
    <button
      id={id}
      onMouseEnter={triggerAnimation}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden bg-violet-50 px-7 py-3 text-black 
        font-general text-xs uppercase transition-all duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] 
        rounded-3xl 
        [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] 
        hover:[clip-path:polygon(0%_0%,_98%_4%,_100%_100%,_2%_100%)] 
        hover:rounded-xl
        ${containerClass}`}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden">
        <div className={animateText ? 'bounce-once' : ''}>
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  )
}

export default Button