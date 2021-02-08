import react from 'react';


class App extends react.Component{


    state = {
        count: 0
    };

    render()
    {
        return(

            <div className="App">
               <h1 style={{color: 'red'}}>Why do we need State? </h1>
               <h1>Count: {this.state.count}</h1>
               <button onClick={() => {
                //    this.count++;
                this.setState({count: this.state.count + 1});
                   console.log('clicked ...', this.state.count);
               }}>

               Add +1
               </button>
            </div>
        );
    }
}

export default App;

