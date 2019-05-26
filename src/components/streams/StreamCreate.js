import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm  from './StreamForm';

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        //console.log(formValues);
        //console.log(formValues.title);
        //console.log(formValues.description);
        this.props.createStream(formValues);
    }

   
    render(){
        
        return(
           <div>
               <h3> Create a Stream</h3>
               <StreamForm onSubmit={this.onSubmit} />
           </div>
        );
    }
}


export default connect(null, {
    createStream
})(StreamCreate);