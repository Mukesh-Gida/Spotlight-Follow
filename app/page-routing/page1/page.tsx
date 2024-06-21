import Link from 'next/link'
import React from 'react'

export const page1 = () => {
  return (
    <div>
    <div>page1</div>
    <Link href='./page-routing/page2'>Page2</Link>
    </div>
  )
}
