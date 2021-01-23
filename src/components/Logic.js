constructor() {
    super();
    this.state = {
      photos: [],
      photoList: []
    };
  }

  componentDidMount() {
    let data = this.fetchData();
    this.createPhotoList();
  }


  
//   fetchData = (query) =>{
//     //query set to "dogs" for now
//     //let query = `dogs`;
//     //format api key
//     const key = apiKey.toString();
//     let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
//     axios.get(url)
//       .then(response => {
//         const photosReturned = response.data.photos.photo;
//         this.setState({
//           photos: photosReturned
//         })
//         console.log(photosReturned)
//       })
//       .catch(error => {
//         console.log("Error Fetching Data -_-")
//       });
//   }

  createPhotoList = () => {
    let photoArray = this.state.photos;
    console.log(photoArray);
    let photoList;
   
    if (photoArray.length > 0){
        photoList = photoArray.map( photo => {
            <Photo 
                server={photo.server}
                id={photo.id}
                secret={photo.secret}
                title={photo.title}
                key={photo.id.toString()}
            />
        })
    } else {
        photoList = <NotFound />
    }
  }
