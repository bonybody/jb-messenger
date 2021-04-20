export default function ({$myAuth, redirect}) {
  if ($myAuth.loggedIn()) {
    return redirect('/home')
  }
}