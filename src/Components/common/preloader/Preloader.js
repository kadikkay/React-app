import preloader from '../../../img/Spinner-1s-200px.svg'

const Preloader = (props) => {
  return <img src={preloader} style={{position: "absolute", top : "17%", left: "50%"}} />
}

export default Preloader;