import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import bugSvg from "../../assets/bug.svg"
import ideaSvg from "../../assets/idea.svg"
import thoughtSvg from "../../assets/thought.svg"

export const feedbackTypes = {
  BUG: {
    title: "Problem",
    image: {
      source: bugSvg,
      alt: "Illustration of a purple insect"
    }
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaSvg,
      alt: "Lamp on"
    }
  },
  OTHER: {
    title: "Other",
    image: {
      source: thoughtSvg,
      alt: "Thought cloud"
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {
        !feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        ) : (
          <div> Feedback </div>
        )
      }

      <footer className="text-xs text-neutral-400">
        Made with ♥ by <a href="https://rocketseat.com.br" className="underline underline-offset-2"> Rocketseat </a>
      </footer>
    </div>
  )
}