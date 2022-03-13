import { Container } from "./styles"

const Newsletter = () => {
  return (
    <Container>
      <h1>Join Our Newsletter</h1>
      <form>
        <input type="text" placeholder="Subscribe your email"/>
        <button type="submit">Subscribe</button>
      </form>
    </Container>
  )
}

export default Newsletter;