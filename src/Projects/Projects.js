import React from 'react';
import * as contentful from 'contentful';




class Projects extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'sk0wb9prg7yi',
    accessToken: 'f6cd73c5e9223edd2a13f4472780d7902f9f5265666507e9c1ea2542c8d0a665'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    return (
      
      <div>
        <p>This is the Blog Page</p>
        <br/>
        { this.state.posts.map(({fields}, i) =>
          <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
        )}
      </div>
    )
  }
}
export default Projects;