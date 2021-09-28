import React from 'react'

export type LayoutProps = {
  children: React.ReactNode
}

type LayoutHeaderProps = LayoutProps

function Layout({ children }: LayoutProps) {
  return <div>{children}</div>
}

Layout.Header = ({ children }: LayoutHeaderProps) => <div>{children}</div>

export default Layout
