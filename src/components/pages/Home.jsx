import Container from "../Container"
import Flex from "../Flex"


const Home = () => {
  return (
    <div className="">
        <Container>
            <Flex>
                <h1>this is home</h1>
                {/* 
                gitbash run--

                del package-lock.json && rmdir /s /q node_modules && npm install 

                */}
            </Flex>
        </Container>
    </div>
  )
}

export default Home