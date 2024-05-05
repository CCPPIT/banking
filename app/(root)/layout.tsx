import React from 'react'

type Props = {
    children:React.ReactNode
}

const LayoutBank = ({children}: Props) => {
  return (
    <div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default LayoutBank