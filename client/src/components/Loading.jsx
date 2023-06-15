import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Spinner animation="border" role="status">
        <span className="sr-only"></span>
      </Spinner>
    </div>
  )
}

export default Loading
