import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Caroline Ó Cathal - UX Designer & Product Specialist",
  description: "Portfolio of Caroline Ó Cathal, UX Designer and Product Specialist",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
