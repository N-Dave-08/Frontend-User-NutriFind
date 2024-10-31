import React from 'react'


export default function Badge({ children,
                                backgroundColor = "white",
                                textColor = "white",
                                fontSize = "sm",
                                fontWeight = "regular",
                                backgroundOpacity = "20"
                              }) {

  return (
    <span className={`bg-${backgroundColor} 
                      text-${textColor} 
                      text-${fontSize} 
                      font-${fontWeight} 
                      bg-opacity-${backgroundOpacity} 
                      px-2 py-1 rounded-full`}>
      {children}
    </span>
  )
}
