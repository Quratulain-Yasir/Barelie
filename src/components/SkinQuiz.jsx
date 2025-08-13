import React from 'react'
import QuizStep from './QuizStep'

const SkinQuiz = () => {
  return (
        <main id="quiz" className="min-h-screen text-gray-900 font-sans px-4">
      <section className="max-w-3xl mx-auto py-16">
        <header className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-mono">Skin Quiz</p>
          <h1 className="text-3xl sm:text-5xl font-serif font-semibold mt-2">Skincare is personal.</h1>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold mt-1">Let’s find what’s best for you.</h2>
          <p className="mt-4 text-gray-600 text-base max-w-lg mx-auto">
            Get a custom skincare routine based on your<br /> unique skin type and concerns.
          </p>
        </header>
        <QuizStep />
      </section>
    </main>
  )
}

export default SkinQuiz