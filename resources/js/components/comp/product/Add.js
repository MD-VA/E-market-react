import React, { Component, Fragment } from 'react'
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import SuccessAlert from './SuccessAlert'
import ErrorAlert from './ErrorAlert'
import axios from 'axios';


export default class Add extends Component {

    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangefile = this.onChangefile.bind(this)

        this.state = {
            title : '',
            price : '',
            company : '',
            description : '',
            info : '',
            product_image:'',
            alert_message:'',
            product:[],
            // categorie:[]


        }

    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/product')
        .then(res => {
            console.log(res.data)
            this.setState({
                product:res.data,
            })
        })
        .catch(err => {
            console.error(err);
        })
    }

    onChange(e){
        // console.log(e.target.files[0])
        this.setState({
            // product_name : e.target.value
            [e.target.name]: e.target.value,
            // product_image:e.target.files[0]

        })
        // console.log(e.target.value)

    }

    onChangefile(e){
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
              return;
        this.createImage(files[0]);
        // console.log("the image ",e.target.files)

    }
    createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({
            product_image: e.target.result
          })
        };
        reader.readAsDataURL(file);
        // console.log('the image',e.target.result)
      }
    onSubmit(e){
        e.preventDefault()
        const product = {
            // user_id : this.props.userid,
            title : this.state.title,
            price : this.state.price,
            company : this.state.company,
            info : this.state.info,
            image : this.state.product_image
            // description : 'ksnefn',
            // price : '12'

        }
        axios.post('http://127.0.0.1:8000/product',

        product,

        {
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log(res.data);
            this.setState({
                alert_message:"success"
            })
            console.log(this.state.title)
            // console.log(this.state.product)

        })
        .catch(err => {
            console.error(err);
            // console.log(this.props.userid)
            this.setState({
                alert_message:"error"
            })
            console.log(this.state.alert_message)
        })
        this.setState({
            title : '',
            price : '',
            company : '',
            description : '',
            info : '',
            // product_image:'',
        })
        this.componentDidMount()

    }

    render() {
        return (
   <div className='container'>
      <div className='row'>
        <div className="col-12">


            {this.state.alert_message =='success'?<SuccessAlert message={"Product added successfully."}/>:null}
            {this.state.alert_message =='error'?<ErrorAlert message={"Error occured."}/>:null}

          <form onSubmit={this.onSubmit}>
            <p className="h2 text-center my-4 text-danger">Add</p>

            <label  className="grey-text">
              product title
            </label>

            <input
              type="text"
              id="title"
              className="form-control z-depth-1"
              name="title"
              value={this.state.title || ''}
              onChange={this.onChange}
              placeholder='enter product'
            />

            <label  className="grey-text">
              Company
            </label>

            <input
              type="text"
              id="company"
              className="form-control z-depth-1"
              name="company"
              value={this.state.company || ''}
              onChange={this.onChange}
              placeholder='enter company'
            />

            <label  className="grey-text">
              product info
            </label>

            <textarea
              type="text"
              className="form-control z-depth-1"
              id="exampleFormControlTextarea1"
              rows="10"
              name="info"
              value={this.state.info || ''}
              onChange={this.onChange}
              placeholder='enter info'
            />

            <label  className="grey-text">
              Price
            </label>

            <input
              type="text"
              id="price"
              className="form-control z-depth-1"
              name="price"
              value={this.state.price || ''}
              onChange={this.onChange}
              placeholder='enter price'
            />


            <label className="grey-text">
              Image
            </label>

             <div className="custom-file">
                 {/* {{-- <input type="file" name="image" id="image"> --}} */}

                 <div className="uk-margin" uk-margin>
                        <div uk-form-custom="target: true">
                            <input
                            type="file"
                            name="product_image"
                            id="product_image"
                            // value={this.state.product_image || ''}
                            onChange={this.onChangefile}/>
                            {/* <input class="uk-input uk-form-width-medium" type="text" placeholder="Select file" disabled/> */}
                        </div>
                </div>


            </div>

            {/* <input
              type="file"
              id="product_image"
              name="product_image"
              className="form-control"
              onChange={this.onChangefile}

            /> */}
            {/* <br /> */}

            <div className="text-center my-4">
              <button color="unique" type="submit" class="btn btn-info">
                    ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        )
    }
}


