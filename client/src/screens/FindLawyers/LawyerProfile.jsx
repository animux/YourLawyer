import { Component } from "react";
import axios from "axios";

import { withRouter } from "../../controllers/withRouter";

import LawyerProfileCard from "../../components/LawyerProfile/LawyerProfileCard";

export default withRouter(class LawyerProfile extends Component {
  constructor() {
    super();
  
    this.state = {
      data: ''
    };

    this.fetchLawyerByID = this.fetchLawyerByID.bind(this);
  }

  componentDidMount() {
    this.fetchLawyerByID()
  }

  async fetchLawyerByID() {
    let id = this.props.params.id;

    if (!id) this.props.navigate('/findlawyers')

    let { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/lawyers/get?id=${id}`);

    if (data) this.setState({ data: data })
  }

  render() {
    return (
      <div className="lawyerProfile">
        <div className="container py-5">
          <LawyerProfileCard lawyer_data={this.state.data}></LawyerProfileCard>
        </div>
      </div>
    )
  }
})