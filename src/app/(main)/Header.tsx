'use client'

import { Container } from "@/components/ui/Container"
import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"

export function Header () {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-semibold">
            Eavan
          </div>
          <nav>
            <ul className="flex space-x-10 text-lg font-medium">
              <li>
                <a href="/">主页</a>
              </li>
              <li>
                <a href="/about">运动</a>
              </li>
              <li>
                <a href="/blog">阅读</a>
              </li>
              <li>
                <a href="/contact">联系</a>
              </li>
            </ul>

          </nav>
          <div>
            {/* @ts-ignore */}
            <Around duration={750} className="scale-150" />
          </div>
        </div>
      </Container>
      <div className="divider px-4 sm:px-6 lg:px-8 my-0"></div>
    </header>
  )
}