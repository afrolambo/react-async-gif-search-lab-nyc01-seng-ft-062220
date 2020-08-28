import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

let pt1 = `https://api.giphy.com/v1/gifs/search?q=`
let pt2 = `&api_key=Now58JZJd5BcocFG1nnb1lKZ0BIBOjXT`


class GifListContainer extends React.Component{

    state = {
        gifArray: [], 
        searchTerm: ""
      }
    
    gifurl(){
        if(this.state.searchTerm !== ""){
            return pt1 + this.setState.searchTerm + pt2 
        }else {
          return pt1 + "dolphin" + pt2
        }
    } 

    
      searchHandler = (e) => {
        this.setState({searchTerm: e.target.value})

            fetch(this.gifurl())
               .then(resp => resp.json())
               .then((data) => this.setState({gifArray: data.data.slice(0,3)}))

      }

     

      gifs = () => {
        return this.state.gifArray.map((gifObj) => <GifList key={gifObj.id} gif={gifObj} />)
      }

    render() {
        console.log(this.gifurl())
        
        return (
            <div>
                <h1>Gif Container</h1>
                <GifSearch changeHandler={this.searchHandler}/>
                <ul>
                {this.gifs()}
                </ul>

            </div>

        )
    }

    componentDidMount(){
     fetch(this.gifurl())
        .then(resp => resp.json())
        .then((data) => this.setState({gifArray: data.data.slice(0,3)}))
    }
}



export default GifListContainer