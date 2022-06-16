import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
            State is the local state of the component which cannot be accessed and modified outside of the component. 
            It's equivalent to local variables in a function. 
            Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. 
            from stackoverflow
            */
        };
    }

    render() {
        const listings = this.props.items.map((item) => {
            return (
              <div key={item.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object className="img-fluid img-thumbnail" src={item.image} alt={item.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{item.name}</Media>
                    <p>{item.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        
        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {listings}
              </Media>
            </div>
          </div>
        );
    }
}

export default Listings;