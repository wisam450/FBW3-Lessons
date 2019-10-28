import React, { Component } from 'react'

export default class Videos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             url:'',
             isLoading:false,
             fetchedData: []
        }
    }
    static  getDerivedStateFromProps(props,state)
    {   console.log('getderivedstate')
        if(state.url!==props.url){
            return state.url=props.url
        }
        else {
            return null
        }
    }
    componentDidMount() {
        this.setState({isLoading:true});
        let url = this.state.url;
        console.log('Url before Fetch: ', url);
        fetch(url)
        .then((res) => {
            console.log('Fetch Response : ', res);
            return res.json();
        })
        .then((data)=> {
            console.log(data);
            this.setState({fetchedData:data.hits,  isLoading:false})

        })
    }
    
    
    render() {
        let video_array = null;
        if(this.state.fetchedData.length > 0){
            console.log(this.state.fetchedData)
            video_array= this.state.fetchedData.map((item,index) => {

                return (
                    <div > 
                       <p key={index}> {item.id} </p>
                    </div>
                )

            }
            )

        }


        return (
             {video_array}
        )
    }
}
