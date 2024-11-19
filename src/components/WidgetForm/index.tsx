import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import bugSvg from "../../assets/bug.svg"
import ideaSvg from "../../assets/idea.svg"
import thoughtSvg from "../../assets/thought.svg"

export const feedbackTypes = {
  BUG: {
    title: "Problem",
    image: {
      source: bugSvg,
      alt: "Illustration of a purple insect"
    },
    placeholder: "Something's not working right? We want to fix it. Tell us in detail what's going on..."
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaSvg,
      alt: "Lamp on"
    },
    placeholder: "Do you have an idea for an improvement or new feature? Tell us!"
  },
  OTHER: {
    title: "Other",
    image: {
      source: thoughtSvg,
      alt: "Thought cloud"
    },
    placeholder: "We want to hear from you. What would you like to tell us?"
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {
        !feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        ) : (
          <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} />
        )
      }

      <footer className="text-xs text-neutral-400">
        Made with ♥ by <a href="https://rocketseat.com.br" className="underline underline-offset-2"> Rocketseat </a>
      </footer>
    </div>
  )
}