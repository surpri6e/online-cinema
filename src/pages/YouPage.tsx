import { useContext } from "react"
import { IsAuthContext } from "../context/isAuth"
import Loader from "../components/design/Loader/Loader"

const YouPage = () => {
  const {user, loading} = useContext(IsAuthContext)

  if(loading) {
    return <Loader/>
  }

  return (
    <>
    <div>delete user</div>
    <div>sign out</div>
    <div>{user?.displayName}</div>
    <div>{user?.email}</div>
    <img src={user?.photoURL ? user?.photoURL : ''} alt="" />
    </>
  )
}

export default YouPage