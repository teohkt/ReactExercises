// Default and named export on a single line
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions'

// We can do extends Component instead of React.Component
// because we called the named export { Component } up top
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button className='ui button primary' onClick={()=> this.props.selectSong(song)}>Select</button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    })
  }
  
  render() {
    // console.log(this.props);
    return(
      
      <div className='ui divided list'>
        {this.renderList()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { songs: state.songs };
}

// By passing our action creator 'selectSong' through the connect function, we do not
// have to call the dispatch function because it does so for us
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
