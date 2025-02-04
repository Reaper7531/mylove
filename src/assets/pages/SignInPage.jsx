import { SignIn } from "@clerk/clerk-react"

function SignInPage() {
  return (
    <div className="w-full flex-col h-screen items-center gap-10 flex mt-10">
    <h1 className="text-2xl   font-semibold font-mono text-center">Either its me or some mf who thinks he slick</h1>
    <SignIn signInUrl="/signin" />

  </div>
  )
}

export default SignInPage