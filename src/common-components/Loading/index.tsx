import { LoadingContainer, Spinner } from "./styles"

type LoadingProps = { 
  isLoading: boolean
}


const LoadingCircle = ({isLoading}:LoadingProps) => {
  return (
   <LoadingContainer>
     <Spinner/>
     </LoadingContainer>
  ) 
}

export default LoadingCircle