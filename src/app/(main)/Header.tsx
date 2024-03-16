'use client'

import { Container } from "../../components/ui/Container"
import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"
import { useTheme } from "next-themes"
import Link from 'next/link'

export function Header () {
  const { setTheme, theme, resolvedTheme } = useTheme()
  function toggleTheme () {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-semibold">
            Eavan
          </div>
          <div>
            <div className="sm:hidden">
              <label htmlFor="Tab" className="sr-only">Tab</label>

              {/* <select
                id="Tab"
                className="w-full rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              >
                <option selected>Settings</option>
                <option>Messages</option>
                <option>Archive</option>
                <option >Notifications</option>
              </select> */}
            </div>

            <div className="hidden sm:block">
              <nav className="flex gap-6" aria-label="Tabs">
                <Link
                  href="/"
                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200"
                >
                  主页
                </Link>
                <Link
                  href="/articles"
                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200"
                >
                  文章
                </Link>
                <Link
                  href="#"
                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200"
                >
                  运动
                </Link>

                <Link
                  href="#"
                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200"
                >
                  阅读
                </Link>
                <Link
                  href="#"
                  className="shrink-0 rounded-lg bg-gray-100 p-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  aria-current="page"
                >
                  关于
                </Link>
              </nav>
            </div>
          </div>
          <div>
            {/* @ts-ignore */}
            <Around duration={750} onToggle={toggleTheme} className="scale-150" />
          </div>
        </div>
      </Container>
      <div className="border border-light-border dark:border-dark-border mx-4 sm:mx-6 lg:mx-10 my-4" />
    </header>
  )
}