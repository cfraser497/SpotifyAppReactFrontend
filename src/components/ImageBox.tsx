function ImageBox(props: any) {
    return (
      <img className = "imageBox" src={props.url} alt="album art"/>
    );
  }
  
  export default ImageBox;