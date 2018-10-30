import React, {Component} from "react";
import Header from './header';
class Tabs extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 0,
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(idx){
    console.log("CLICKED", idx);
    this.setState({selectedTab: idx});
  }



  render(){
    const {headers} = this.props;

    return(
      <div className='tabs'>
        <h1> Tabs </h1>
        {
          headers.map( (entity, idx) =>
            <Header
            onClick={() => this.handleClick(idx)}
            key={idx}
            content={entity.content}
            title={entity.title}
            />
        )}

      </div>
    );
  }
}

export default Tabs;
