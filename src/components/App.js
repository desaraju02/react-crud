import React from 'react';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import history from '../history';

const App = () =>{

    return(

        <div className='ui container'>
            
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={StreamList} />
                        <Route path='/streams/new' component={StreamCreate} />
                        <Route path='/streams/edit/:id' component={StreamEdit} />
                        <Route path='/streams/:id' component={StreamShow} />
                        <Route path='/streams/delete/:id' component={StreamDelete} />
                    </Switch>
                    

                </div>
            </Router>

        </div>
    );
}

export default App;