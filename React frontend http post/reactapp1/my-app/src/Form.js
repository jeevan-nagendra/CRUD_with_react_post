import React,{Component} from 'react'
import axios from 'axios'
import './Form.css'

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            title : ' ',
            author : ' ',
            content : ' '
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) =>{
        alert("Posted successfully")
        console.log("Posted successfully")
         e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:3002/posts",this.state)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        const {title,author,content} = this.state
    return (
        <div className='form'>
            
            <form onSubmit={this.handleSubmit}>
            <div className='input'>
            <div className='inputField' className="flex">
            <div>
                 
                <label>Title</label>
                <input className='invisible' placeholder="Enter a title" type='text'  name='title' value={title} onChange={this.changeHandler}/>
            </div>
            <div>
                 <label>Author</label> 
                <input className='invisible' placeholder="Enter name of author" type='text' value={author} name='author' onChange={this.changeHandler}/>
            </div>
            <div>
                 <label>Content</label> 
                <input className='invisible' placeholder="Content" type='text' value={content} name='content' onChange={this.changeHandler}/>
            </div>
            </div>
            <button>Submit</button>
            </div>
            </form>
        </div>
    )
    }
    
}

export default Form
