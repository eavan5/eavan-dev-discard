'use client'

import { Container } from "../../components/ui/Container"
import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"
import { useTheme } from "next-themes"
import Link from 'next/link'
import { useCallback, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import classNames from "classnames"

export function Header () {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [isDark, setDark] = useState(false)
  useEffect(() => {
    setDark(theme === 'dark')
  }, [])
  function toggleTheme () {
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }, 750);
    setDark(theme !== 'dark')
  }


  const currentStyle = 'shrink-0 rounded-lg bg-gray-50 p-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200'

  const activeStyle = useCallback((path: string) => {
    const routePath = usePathname()
    return routePath === path ? currentStyle : ''
  }, [])

  const routeMap = [
    { path: '/', name: '主页' },
    { path: '/articles', name: '文章' },
    { path: '/sports', name: '运动' },
    { path: '/read', name: '阅读' },
    { path: '/about', name: '关于' },
  ]


  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href='/' className="text-2xl font-semibold">
            Eavan
          </Link>
          <div>
            <div className="sm:hidden">
              {/* //todo */}
              <label htmlFor="Tab" className="sr-only">Tab</label>
            </div>

            <div className="hidden sm:block">
              <nav className="flex gap-6" aria-label="Tabs">
                {
                  routeMap.map(({ path, name }) => (
                    <Link
                      key={path}
                      href={path}
                      className={classNames("shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200", activeStyle(path))}
                    >
                      {name}
                    </Link>
                  ))
                }

              </nav>
            </div>
          </div>
          <div>
            {/* @ts-ignore */}
            <Around duration={750} onToggle={toggleTheme} toggled={isDark} className="scale-150" />
          </div>
        </div>
      </Container>
      <div className="border border-light-border dark:border-dark-border mx-4 sm:mx-6 lg:mx-10 my-4" />
    </header>
  )
}